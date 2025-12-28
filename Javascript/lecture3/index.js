// Arithmatic Operator
//1. Binary -----> two operands  +,-,*,/,%,**
//2. Unary -------> single operand ++, --

// let a = 10;
// let b= 20;
// console.log(a+b)
// console.log(a-b)
// console.log(a**2)

// console.log(a++)
// console.log(a--)
// console.log(++a)
// console.log(--a)

//Assignment opertor --> =,+=,-=,/=,*=,%=

// let a=2;
// a+=2;
// console.log(a) // output = 4


//comparision operators 

// console.log(10>=5)
// console.log(10<=5)

// "===" strict equality value bhi same honi chahiye and type bhi same hona chahiye

//"==" loose equality value same honi chahiye ---> type can be different

// console.log(5===5); //true
// console.log('5'==5); //true

// console.log('5'===5); // false ---> type of data different ha

//ternary operator ?:

// let age = 5
// let status1 = (age>=18)?"I can vote": "I cannot Vote";
// console.log(status1)

// logical operator use hota ha two or more expression ya condition ko connect/merge  krne k liy---> AND(&&) OR(||) NOT(!)

let ans = true && true
console.log(ans)

//Falsy and Truthy  
// falsy :- undefined , null, 0, false, NAN , ()
// truthy :- anything which is not falsy 

//falsy && Truthy ---> falsy   ----
//Falsy || Truthy ----> Truthy    |---> short-circuiting
//Falsy || Falsy ----> Falsy   ---


//console.log(false || "Divyanshu") // Divyanshu is a truthy value

// Bitwise operator --> Work on Bits --> AND , OR , Not , >> , <<, ^