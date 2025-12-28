//functions ---> perform specific task 
// function definition
function Greet(){
  console.log("Hello, Good Moring!")
}
Greet();   // function call


// function printCounting(){
//     for(let i =1;i<=100;i++){
//         console.log(i)
//     }
// }
// printCounting();

// with parameter
 
// function table(num){
//     for(let i =1; i<=10;i++){
//         console.log(num ," * ",i," = ",num*i);
//     }
// }
// table(2);

// function getAvg(num1 , num2){
//     let avg = (num1 + num2)/2
//     console.log("Average : ", avg);
// }
// getAvg(4,8);

// return functions ---> jo mujh kchh return krta ho

// function getSum(a,b,c){
//     let sum = a+b+c;
//     return sum;
// }
// result = getSum(5,2,6);
// console.log(result);

// function getMyName(firstName , secondName){
//     let fullName = firstName + " " + secondName;
//     return fullName;
//     // all the statements below the return will be unreachable 

// }

// let myName = getMyName("Divyanshu", "Chauhan");
// console.log(myName)

// function in a variable 

const getMultiply = function(a,b){
    return a*b;
}

let ans = getMultiply(5,10);
console.log(ans)

const getSquare = function(num){
    return num**2;
}

let square = getSquare(5);
console.log(square)

// Arrow function ---> most wanted

const getExp = (x,y)=>{
  return x**y;
} 
let exp = getExp(5,2);
console.log(exp);
