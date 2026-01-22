/*
Classes: basically a Blueprint :- 
class Human{
 1. state/ properties like age , weight , hgt;
 2. Behaviour/ functionality like walking , eating ;
}
 acess krne k liy object bnana pdega 

*/

// class Human {
//     //properties 
//     age = 13; // by def public  -> can be used inside as well as outside the class
//     #wgt = 40;// private  cannot be accessed ouside the class
//     hgt= 180;

//     constructor(newAge, newHeight, newWeight){
//         this.age = newAge;
//         this.hgt= newHeight;
//         this.#wgt= newWeight;
//     }

//     //behaviour  behavior ko bhi private bnaya ja skta ha # ki help se 
//     walking(){
//         console.log("I can walk 14km in a day", this.#wgt)  // this ka use krte ha private field ko access krne k liye i.e current obj ko dkha rha ha 
//     }

//     running(){
//         console.log("I can run 5km continuously")
//     }

//     get fetchWeight (){
//         return this.#wgt
//     }

//     set modifyWeight(val){
//         this.#wgt=val;
//     }
// }

// let obj = new Human(50, 190 ,100); // object create krdiya   // parameters pass ho rhe ha constructor ko value ko update krne k liyee
// console.log(obj.fetchWeight);
// obj.walking();

//private field ko bhr access krna :-  1. getters 2. setters function


/*
Default Parameters :- it allows to usee function with default value
*/

// yha pr Dev as a default parameter kam kr rha ha jab bhi koi parameter pass nhi krenge 
// by default dev aajayga 

// function sayName(myName = "Dev"){
//  console.log("My Name is :",myName);
// }

// sayName();
// function sayName(fName = "Dev" , lname = fName.toUpperCase()){
//  console.log("My Name is :",fName ," ", lname);
// }
// sayName("Divyanshu");

// array bhi pass kr skte ha jaise obj kiya ha 
// function solve(value = {
//     age: 15,
//     wgt: 49,
//     hgt: 180
// }){
//     console.log("Hello :" , value)
// }
// solve();
// function solve(value = {
//     age: 15,
//     wgt: 49,
//     hgt: 180
// }){
//     console.log("Hello :" , value)
// }
// solve(null); // output m null dedega 
// solve(undefined); // default value aaygi opt m
function getAge(){
    return 190;
}
function utility(name = "Dev", age = getAge()){
    console.log(name , " ", age);
}

utility()