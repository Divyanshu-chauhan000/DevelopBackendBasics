/*reference type ----->no fixed memory
storage :-
1. stack , 2. Heap

objects --> just a collection of key value pairs
*/

// let obj = {
//     fullName : "Divyanshu",
//     age : 22,
//     weight : 63,
//     height : "5ft 6inches",
//     greet: function greet(){
//         console.log("hello family");
//     }
// };
// console.log(obj)
// obj.greet();

// let obj2 = obj;  // shallow copy  --> koi alg object nahi bnega same object ke data ko koi or reference(obj2) se refer ya point kra rhe ha 


/*
Array:-collection of heterogenous data items
can be accessed using index
*/
// let arr = [1,2,3,4,5];
// console.log(arr)
// console.log(typeof(arr))

//using array construction

// let brr = new Array('Divyanshu', 'naman', 'suman', 'rohan',1, true)
// console.log(brr)
// console.log(typeof(brr))

// console.log(brr[0])
// console.log(brr[1])


/*Built-in methods in array */

// let fruits =  ["Apple", "Banana", "Mango","Papaya", "Date", "WaterMelon"];
// // fruits.push("Grapes");
// // fruits.pop();
// // fruits.shift();
// // fruits.unshift("Grapes");
// // // console.log(fruits.slice(2,5));
// // fruits.splice(1,2,"BlackBerry")   //index 1 se 2 value remove kro and blackberry add kro 
// console.log(fruits)


// let numbers = [10,20,30,40,50];   // har value ko uthayga or uspe function logic lgakr return krdega ---->Map method
// let squareArray = numbers.map((number)=>{
//     return number*number;
// })

// console.log(squareArray)


// let num = [2,12,32,7,9,6,1,10,11,14,13];  // fiter value deta ha function logic k hisaab se ----->Filter method
// let evenArray = num.filter((number)=>{
//     // if(number % 2===0){
//     //     return true;
//     // }
//     // else{
//     //     return false;
//     // }
//     return number%2==0;
// })

// console.log(evenArray)


// let arr = [1,2,"love",'kunal',null];
// let getStr = arr.filter((value)=>{
//     if(typeof(value) === 'string'){
//         return true;
//     }
//     else{
//         return false;
//     }
// })
// console.log(getStr)


/*Reduce
complex calculation k baad ek simple single value nikalna ---->(accumulator, current)
*/

// let arr = [10,20,30,40];
// let sum = arr.reduce((acc, curr)=>{
// return acc+curr
// },0)

// console.log(sum)


/*
sort :- js me sort() default lexicographical hota ha , mtlb by default .
numbers ko string maan ke sort krta ha ,numerice order m nhi 
*/
// let num = [2,12,32,7,9,6,1,10,11,14,13];
// num.sort();
// console.log(num);

// accending sort
// let num = [2,12,32,7,9,6,1,10,11,14,13];
// num.sort((a,b)=>a-b);
// console.log(num)

// //descending sort
// num.sort((a,b)=>b-a);
// console.log(num);

/*
indexOf: kisi bhi value ka index deta ha 
*/

// let num = [2,12,32,7,9,6,1,10,11,14,13];
// console.log(num.indexOf(14));



/*
for each: har ek single value k liy operation perform krna ho kisi bhi array k liye then we use for each
*/

// let num = [2,12,32,7,9,6,1,10,11,14,13];

// let len = num.length;
// console.log("length: ",len)

// for(let i =0;i<len ; i++){
//     console.log(num[i]);
// }

// num.forEach((value, index)=>{
//     console.log("Number: ", value , " Index: ",index);
// })


/*
for in :- enumerable properties of object
*/

// for(let key in obj){
//     console.log(key, " ",obj[key]);
// }


// for of : iterable objects

// let num = [2,12,32,7,9,6,1,10,11,14,13];
// for(let val of num){
//     console.log(val);
// }

// let fullName = "DivyanshuChauhan"
// for(let val of fullName){
//     console.log(val)
// }


//  ******* Array with functions *********

let num = [2,12,32,7,9,6,1,10,11,14,13];

function getSum(num) {
    // let len = num.length;
    // let sum =0;
    // for(let i =0;i<len;i++){
    //     sum = sum + num[i];
    // }
    // return sum;

   let sum = 0;
   num.forEach(element => {
      sum = sum +element;
   });
    return sum

}
let totalSum  = getSum(num);
console.log(totalSum);