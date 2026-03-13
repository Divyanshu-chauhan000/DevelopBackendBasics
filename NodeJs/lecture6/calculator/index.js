const http = require('http');
const home = require('./home')
const  route = require('./route')

const server = http.createServer((req, res) =>{
  if(req.url == '/'){
    home(req, res)
  }
  else{
    route(req , res)
  }
});

const PORT = 3000;
server.listen((PORT) , () =>{
  console.log(`Server is running on port http://localhost:${PORT}`);
})