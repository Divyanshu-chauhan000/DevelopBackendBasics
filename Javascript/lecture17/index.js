/* Performance measurement 
performance.now();  ----> standard way to calculate the time taken by the code to run;

Reflow:-
process of calculating position/dimensions of element
It is a Comutationally intensive task ha 
It is a faster process

Repaint:-
process of displaying/painting / drawing  content/element pixel by pixel
It is a slower process


Document Fragment : -   Accha coder yhi use krta ha
lightweight doc object hota ha 
fayda:- jab addition krte h kisi element ko isme to na to ye koi repaint krta ha or na hi reflow krta
*/


// //code 1
// const t1 = performance.now();
// for(let i =1 ; i <= 100 ; i++)
// {
//     let para = document.createElement('p');
//     para.textContent = "This is the para " + i;   
//     document.body.appendChild(para);    // direct document ke body m add krdiya
// }
// const t2 = performance.now();

// console.log("total time taken by code 1 " , + (t2-t1));  // 0.5


// //code 2

// const t3 = performance.now();
// let mydiv = document.createElement('div');
// for(let i =1; i<= 100;i++)
//     {
//         let para = document.createElement('p');
//         para.textContent = "This is the para " + i;
//         mydiv.appendChild(para);   // phle mydiv m append kiya , then mydiv ko body m add kiya 
//     }
//     document.body.appendChild(mydiv);
//     const t4 = performance.now();
// console.log("total time taken by code 1 " , + (t4-t3));   //  0.1


// Best code
const t1 = performance.now();
let fragment  = document.createDocumentFragment();

for(let i = 1; i<=100; i++)
{
    let para = document.createElement('p');
    para.textContent="This is a para no " + i;
    //No reflow No repaint for this 
    fragment.appendChild(para);
}

document.body.appendChild(fragment);
    const t2 = performance.now();
    console.log("total time taken by code 1 " , + (t2-t1));