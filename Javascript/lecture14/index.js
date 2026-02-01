// let fElement = document.getElementById('name');
// console.log(fElement);
// console.log(fElement.style);

// fElement.style.backgroundColor = 'lightgreen';


// let sElement = document.getElementById('role');
// console.log(sElement);
// console.log(sElement.style);
// sElement.style.cssText = "background-color: black ; color : blue;"



// let firstElement = document.querySelector('#name');
// console.log(firstElement);

// firstElement.setAttribute('class' , 'name-class');
// // firstElement.setAttribute('style', 'margin : 2rem');
// console.log(firstElement)


// let fname = document.querySelector('#name');
// console.log(fname)
// fname.className = " efg uvw"

// console.log(fname)


let fname = document.querySelector('#name');
fname.classList.add('uvw');
console.log(fname.classList);
fname.classList.remove('xyz');
console.log(fname.classList);

fname.classList.toggle('abc');
console.log(fname.classList);
fname.classList.toggle('abc');
console.log(fname.classList)

let ans = fname.classList.contains('xyz');
console.log(ans)