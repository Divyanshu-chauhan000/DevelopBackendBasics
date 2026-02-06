// let firstPromise = new Promise((resolve, reject)=>{
// console.log("dev");
// resolve(1001);
// reject(new Error("Internal Server Error"));
// });



// let firstPromise = new Promise((resolve , reject)=>{
// setTimeout(function sayMyName()
// {
//     console.log("My name is Divyanshu Chauhan");
// },15000);
// resolve(1);
// })


// let promise1 = new Promise((resolve, reject)=>{
// let sucess = false ;
// if(sucess)
// {
//     resolve("Promise Fulfilled");
// }
// else{
//     reject("Internal Server Error");
// }
// });


// promise1.then((message)=>{
//     console.log("first message is " + message);
//     return "promise fulfilled second message";
// }).then((message)=>{
//     console.log("second message is " + message);
//     return "promise fulfilled third message";
// }).then((message)=>{
//     console.log("Third message is " + message);
// })
// .catch((error)=>{
//     console.error("catch ka error is : " + error);
// }).finally((message)=>{
//     console.log("i will always execute");
// })


// let promise1 = new Promise((resolve, reject)=>{
// setTimeout(resolve , 1000, "First");
// });
// let promise2 = new Promise((resolve, reject)=>{
// setTimeout(resolve , 3000, "Second");
// });
// let promise3 = new Promise((resolve, reject)=>{
// setTimeout(resolve , 5000, "Third");
// });

// Promise.all([promise1,promise2,promise3])
// .then((values)=>{
//     console.log(values);
// })