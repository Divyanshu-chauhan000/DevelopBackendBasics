const http = require('http');
const fs = require('fs');
const { stringify } = require('querystring');
const { error } = require('console');

const route = ((req, res) =>{
  console.log("1. First check")
  let result ;
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
      // console.log(chunk);
      console.log("2. chunk came");
      body.push(chunk);
    });
   req.on("end" , ()=>{
          console.log("3. End event  came");

    const fullBody = Buffer.concat(body).toString();
    console.log(fullBody);
    const Params = new URLSearchParams(fullBody);
    const bodyObject = Object.fromEntries(Params);
    console.log(bodyObject);
     result = Number(bodyObject.val1) + Number(bodyObject.val2);
    console.log(result);
    // fs.writeFileSync("result.txt" , JSON.stringify(result) );   // jab tak ye kam krke nahi aayga tab tk sb kchh block ho jata ha

    fs.writeFile('result.txt' , JSON.stringify(result) , error =>{
      console.log("Data written successfully");
      res.statusCode =302;
      return res.end();
    })

   });
         console.log("4. Sending the response");

       res.setHeader('Content-type' , 'text/html');
    res.write(`<html >
<head>
  <title>Calculate</title>
</head>
<body>
    <h1>This is the Result Page</h1>
    <h3>Result is ${result}</h3>

   </body>
</html>`)
return res.end();

   }

   
})

module.exports = route;