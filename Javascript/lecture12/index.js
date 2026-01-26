/*
Error Handling:-
1. compile time error :- code execution se phle hi pta lg jata ha (during parsing stage)
2. Runtime error: :- error occurs during the run time or execution of the program

handling:-
try-catch block

finally block - always execute chahe error aay ya na ay

throw ki help se hm apna custom error bna skte ha
*/

// try{
//     console.log("Try block starts here");
//     console.log(x);
//     console.log("Try block starts here");
// }
// catch(e){
// // here , error k sath kya kr skte ha 
// // retry logic
// // fallback mechanism
// //logging 
// // custom error
// console.log("I am inside the catch block");
// // console.log("Your error is here ",e); // reference error
// }
// finally{
//     console.log("Program ends here !")
// }


// try{
//     console.log(x);
    
// }
// catch(e){
//     throw new Error("Reference error ha yha qki declare nahi kiya usko");
// }

// let errorCode = 100;
// if(errorCode == 100){
//     throw new Error("Invalid Json");
// }