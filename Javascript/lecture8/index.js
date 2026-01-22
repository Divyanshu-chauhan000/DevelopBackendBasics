/*
1. Variable Scoping : 1. Global, Function, Block
*/

// global scope  same for all var,let,const;
// var age = 25;

// console.log(age)
// {
//     console.log(age)
// }
// if (true){
//     console.log(age)
// }
// for(let i=0;i<2;i++){
//     console.log(age);
// }

// function sayHello(){
//     console.log("hi",age)
// }

// sayHello();

//function scope 
// function sayHello(){
//     var fullName = "Earth";
//     console.log("Hello Duniya ",fullName);
// }

// // console.log("Hello Duniya ",fullName);  error kyuki var function scoped ha isiliye bhar acess nhi ho rha 
// sayHello();


// Block scope

// {
//     var height = 100;
//     // let xyz = "abc"
// }

// console.log(height) // var block scoped nahi hota ha isiliye bhr bhi access ho rha ha 
// console.log(xyz) // let block scoped hota ha isiliye error


  /*  temporal Dead zone   */

//   console.log(marks) // error let hoist nhi hota
//   console.log("Hello");
//   console.log("Hiii");
//   console.log("Tata");  // yha pr line 48 se 51 tak temporal dead zone h kyuki iski bjh s hm marks ko access nhi kr skte
//   let marks = 100;