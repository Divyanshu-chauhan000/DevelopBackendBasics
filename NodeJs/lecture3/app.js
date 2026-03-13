//Simple Node.js Server

const http = require('http'); 

const server = http.createServer(function (req, res){
  console.log(req);
});

// server.listen(3000);
const PORT  = 3000;
server.listen(PORT,()=>{
  console.log(`Server is running on address http://localhost:${PORT} `);
})
