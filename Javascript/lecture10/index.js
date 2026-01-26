// common in bult objects in JS

// 1.Math object

// console.log( Math.PI);
// console.log(Math.max(10,11,0,12,56,34,81,27,16,33,52,19,98,82));
// console.log(Math.min(10,11,0,12,56,34,81,27,16,33,52,19,98,82));
// console.log(Math.round(2.6));
// console.log(Math.floor(1.9));
// console.log(Math.ceil(1.9));
// console.log(Math.abs(5));
// console.log(Math.abs(-5)); // abs negative value ko +ve kr deta ha or +ve ko +ve hi rkhta ha 
// console.log(Math.random(1,100));
// console.log(Math.sqrt(9));
// console.log(Math.pow(9,2));

//2. Date object

let curr = new Date(); 
console.log(curr)

let date = new Date('July 15 2003 03:15');
console.log(date);

let newDate = new Date(2003, 6, 15, 3);
console.log(newDate)

console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.setFullYear(2001));
console.log(newDate)