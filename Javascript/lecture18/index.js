/*
Event loop :
1. synchronous code:- jo bhi piece of code jo same time pr hi execute hojata ha usko m synchronous code khta hu
2. Asynchronous code :-  asa code jo same time pr execute nhhi hota 
   setTimeout function & setInterval function

   Asynchronous code ko handle krne k liy we have -------======> Event Loops
   i--> call Stack -- jab bhi koi function bnta ha call stack m entry bnegi , jab execute ho jata ha to call stack se entry remove ho jati ha
   ii--> Broswer--jase hi call stack m koi asynchronous code aata ha then wo jata ha browser k pss brower duration k according delay krta ha then code ko Stack queue m bhj deta ha
   iii-> callback Queue / TaskQueue -- jaise hi mera call stack khali hota ha event loop code ko Queue se call stack m assign kr deta ha  ha or code execute hojata ha 

*/