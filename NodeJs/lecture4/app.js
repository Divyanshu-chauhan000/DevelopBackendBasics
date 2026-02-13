//Simple Node.js Server

const http = require('http'); 

const server = http.createServer(function (req, res){
  console.log(req.headers, req.method , req.url);
  //Routing requests --->
  
  if(req.url === '/'){
  res.setHeader('Content-type', 'text-html');
  res.write('<html>');
  res.write('<head><title> Complete Node Js course </title></head>');
  res.write('<body><h1>Hello , this is the Home page of routing request class</h1></body>');
  res.write('</html>');
  return res.end(); 
  }else if(req.url === '/products'){
  res.setHeader('Content-type', 'text-html');
  res.write('<html>');
  res.write('<head><title> Complete Node Js course </title></head>');
  res.write('<body><h1>Hello , this is the product page of routing request class</h1></body>');
  res.write('</html>');
  return res.end();

  }else if(req.url === '/about'){
  res.setHeader('Content-type', 'text-html');
  res.write('<html>');
  res.write('<head><title> Complete Node Js course </title></head>');
  res.write('<body><h1>Hello , this is the about page of routing request class</h1></body>');
  res.write('</html>');
  return res.end();

  }
  
  res.setHeader('Content-type', 'text-html');
  res.write('<html>');
  res.write('<head><title> Complete Node Js course </title></head>');
  res.write('<body><h1>Hello , this is the basic nodejs class</h1></body>');
  res.write('</html>');
  res.end();
  
  
  // sending response
  // res.setHeader('Content-type', 'text-html');
  // res.write('<html>');
  // res.write('<head><title> Complete Node Js course </title></head>');
  // res.write('<body><h1>Hello , this is the basic nodejs class</h1></body>');
  // res.write('</html>');
  // res.end();
  // process.exit();   // stop the server
});

// server.listen(3000);
const PORT  = 3000;
server.listen(PORT,()=>{
  console.log(`Server is running on address http://localhost:${PORT} `);
})