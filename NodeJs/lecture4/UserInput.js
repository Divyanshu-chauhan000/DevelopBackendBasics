//Simple Node.js Server
//Taking user Inputs
//Redirecting the request
const http = require('http'); 
const fs = require('fs');

const server = http.createServer(function (req, res){
  console.log(req.headers, req.method , req.url);

  
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
  }else if(req.url.toLowerCase() === '/submit-details' && req.method ==   'POST'){
      fs.writeFileSync('user.txt' , 'Divyanshu Chauhan');
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
  

});

// server.listen(3000);
const PORT  = 3000;
server.listen(PORT,()=>{
  console.log(`Server is running on address http://localhost:${PORT} `);
})