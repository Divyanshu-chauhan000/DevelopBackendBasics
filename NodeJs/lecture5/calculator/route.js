const http = require('http');
const fs = require('fs');
const { stringify } = require('querystring');

const route = ((req, res) =>{
  if(req.url === '/calculator'){
        res.write(` <h1>This is Calculator Page</h1>
          <form action="/calculator-result" method="POST">
          <input type="text" name="val1" placeholder="Enter 1st num">
          <br>
          <input type="text" name="val2" placeholder="Enter 2nd num">
          <br>
          <button type="submit">Sum</button>
          </form> `)
          return res.end();
        }
        
        else if(req.url.toLowerCase() === "/calculator-result" && req.method === 'POST') {
          // res.write(`<h1>This is the Result Page</h1>`)
          const body = [];
    req.on("data" , (chunk) =>{
      console.log(chunk);
      body.push(chunk);
    });
   req.on("end" , ()=>{
    const fullBody = Buffer.concat(body).toString();
    console.log(fullBody);
    const Params = new URLSearchParams(fullBody);
    const bodyObject = Object.fromEntries(Params);
    console.log(bodyObject);
    const result = Number(bodyObject.val1) + Number(bodyObject.val2);
    console.log(result);
    fs.writeFileSync("result.txt" , JSON.stringify(result) );
    res.setHeader('Content-type' , 'text/html');
    res.write(`<html >
<head>
  <title>Calculate</title>
</head>
<body>
    <h1>This is the Result Page</h1>
    <h3>Result is ${result}</h3>
    <h1>*********  :)  Assignment Done  (: **********)
   </body>
</html>`)
return res.end();
   })

   }

 

   
})

module.exports = route;