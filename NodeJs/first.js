// console.log("Hello");

//creating file
const fs = require('fs');
fs.writeFile("output.txt", "Writing file ", (err)=>{
  if (err) console.log("error occure");
  else console.log("file written");

})