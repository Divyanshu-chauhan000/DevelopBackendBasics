const http = require('http');
const fs = require('fs');

const server =  http.createServer((req, res) =>{
  // console.log(req.url);


//   console.log("1. Start of script");

//   //Synchronous (blocking ) op:
//   console.log("2. Reading File Synchronous");
//   const dataSync =  fs.readFileSync("user-details.txt" , 'utf8');
//   console.log("3. Synchronous read complete")
 

//  //Asynchronous (non-blocking) op:
//  console.log("4. Reading File Asynchronously");
//  fs.readFile('user-details.txt' , 'utf8' , (err , dataAsync) =>{
//   if(err){
//     throw err;
//   }
//   console.log("5. Asynchronous read complete ")
//  });

//  console.log("6. End of Script");



//***********2nd Run and Observe ********** */
 console.log('1. Start of Script');

 Promise.resolve().then(()=> console.log('2. Microtas 1'));

 setTimeout(()=>{
  console.log("3. Timer 1" )
 }, 0)

 fs.readFile('user-details.txt' , () => console.log("4. I/O operation"));

 setImmediate(() => console.log("5. Immediate 1"));

 process.on('exit' , (code) =>{
  console.log('6. Exit Event');
 })

 console.log("7. End of Script");

 })

const PORT = 3000;
server.listen(PORT , ()=>{
  console.log(`Server is running on port http://localhost:${PORT}`)
})