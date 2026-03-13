//Parsing Request 


const http =  require('http');
const fs = require('fs');
const body = [];

const requestHandler = ((req, res)=> {
  console.log( req.method , req.url);

 
  if(req.url === '/'){
    res.setHeader('Content-type', 'text-html');
    res.write('<html>');
    res.write('<head><title> Complete Node Js course </title></head>');
    res.write('<body><h1>Enter your details: </h1>');
    //form
    res.write('<form action = "/submit-details" method= "POST">');
    res.write('<input type = "text" name = "username" placeholder="Enter Your Name"></input><br><br>')
    res.write('<label for="gender">Gender : </label>')
    res.write('<input type = "radio" name = "gender" id="male" value="male"></input>')
    res.write('<label for="Male">Male</label>')
    res.write('<input type = "radio" name = "gender" id="female" value="female"></input>')
    res.write('<label for="Female">Female</label><br><br>')
    res.write('<button type = "submit" >Submit</button>')
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end(); 
    }else if(req.url.toLowerCase() === '/submit-details' && req.method ==  "POST"){

      req.on("data", (chunk) => {
        console.log(chunk);
        body.push(chunk);
      })
      req.on("end" , ()=>{
        const fullBody = Buffer.concat(body).toString();
        console.log(fullBody);
        const Params = new URLSearchParams(fullBody);
        // const bodyObject = {};
        // for(const [key , val] of Params.entries()){
        //       bodyObject[key] = val;
        // }
        const bodyObject = Object.fromEntries(Params);
        console.log(bodyObject);
        fs.writeFileSync('user.txt' , JSON.stringify(bodyObject));
      })
        res.statusCode = 302;
        res.setHeader('Location' , '/');
        return res.end();
    }
    
    res.setHeader('Content-type', 'text-html');
    res.write('<html>');
    res.write('<head><title> Complete Node Js course </title></head>');
    res.write('<body><h1>404 error , page not found</h1></body>');
    res.write('</html>');
    res.end();
    
})
module.exports = requestHandler;