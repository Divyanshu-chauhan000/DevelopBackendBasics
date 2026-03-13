const http = require('http');

const home  = ((req,res) =>{
  console.log(req.url , req.method) 


 

  res.setHeader('Content-type' , 'text-html');
  res.write(`
    <html >
<head>
  <title>Calculate</title>
</head>
<body>
   <h1>Hello Everyone , Welcome to tha Home Page  </h1>
    <a href="/calculator">
      <li>Go to Calculator Page</li>
    </a>
   </body>
</html>`)
res.end();

  });
  
  module.exports = home;
