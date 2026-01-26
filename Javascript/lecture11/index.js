/*object cloning and garbage collector
  
Dynamic nature of object :- mtlb hm object ki properties ko runtime pr change kr skte ha

object clonning :-
1. using spread operator --> "..."
2. Assign method  ----> dest = object.assign({} , src)
3. using iterations

** garbage collector ** always run in bg 
garbage collector ek asa tool ha jo memory management k liy use hota ha .
 jiska kam unused allocated memory in program ko free krna hota ha

*/

// let obj ={
//     age: 22,
//     wt: 68,
//     ht: 180
// }
// console.log(obj);
// obj.color = "white";
// console.log(obj);


// cloning using spread op;
// let src ={
//     age: 22,
//     wt: 68,
//     ht: 180
// };

// let dest = {...src};
// src.age= 19;
// console.log("src : ",src);
// console.log("dest: ",dest);

//cloning using Assign method;

// let src ={
//     age: 22,
//     wt: 68,
//     ht: 180
// };
// let src2 = {
//     FullName : "dev",
//     Id : 2,
//     age : 22
// }
// let dest = Object.assign({}, src , src2);
// src.age= 19;
// console.log("src : ",src);
// console.log("dest: ",dest);


// cloning using iteration method
let src ={
    age: 22,
    wt: 68,
    ht: 180
};
let dest = {};

for(let key in src){
    let newKey = key;
    let newVal = src[key];
    //Insert newkey and vaue in dest and create a clone
    dest[newKey] = newVal;
}
src.age= 19;

console.log("src : ",src);
console.log("dest: ",dest);