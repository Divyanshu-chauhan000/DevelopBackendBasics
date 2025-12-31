/* hoisting ---> process ha jo variable declaration ya function declaration ko shift kr deta ha to the top of the scope
*/

//  *********Function hoisting*****

// showMyName("Divyanshu");  // allow in plain  function
 
// function showMyName(name){
//     console.log("My name is : ",name)
// }

// showMyName("Dev");  // no acess in case of function expression

// let showMyName = function (name){
//     console.log("My name is : ",name)
// }

//  **********Variable Hoisting ******

// console.log(age)  // undefined qki sirf declaration hi upr shift hogi , not the value 
// var age = 25;



// console.log(age)   // no acess in case of let
// let age = 25;

// console.log(age)   // no acess in case of const
// const age = 25;


// *******class hoisting ********

// const object1 = new Human();  // no access in case of class and objects 
// class Human{


// }

/*function call  stack
let hm bht sare function call kr rhe ha to unka record bhi to rkha pdega . For each function call there is an entry in stack.
when function ends or finished , remove the entry from the stack.

functions ---> first class citizen since :- 

assign to variable
as argument
return function
use function in DS
as property like greet in object
*/
//1. assign to variable

// let greet = function(){
//   console.log("Greetings of the day");
// }
// greet();

//2. pass function as an argument
// function greetME(greet, fullname){
// console.log("Hello !", fullname);
// greet();
// }


// function greet(){
//    console.log("Greetings of the day");
//  }

// greetME(greet, "Divyanshu")

// 3. return function

// function solve(){
//     return function(number){
//         return number*number;
//     }
// }

// let ans = solve(5);
// let finalAns = ans(10);
// console.log(finalAns)

// 4. use function in DS


// const arr = [
//     function(a,b){
//         return a+b;
//     },
//     function(a,b){
//         return a*b;
//     },
// function(a,b){
//         return a-b;
//     },
// ];
// let first = arr[1];
// let ans = first(5,10);
// console.log(ans);

//5.   as a property in obj

// let obj = {
//     age : 25,
//     weight:64,
//     ht: 180,
// greet:()=>{
//     console.log("hello Everyone!");
// }
// }
// console.log(obj.age);
// obj.greet();


// console.log(greet)

// var greet = function(){
//     console.log("Namaste Duniya");
// }
 