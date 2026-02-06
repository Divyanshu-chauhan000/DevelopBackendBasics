// let Detailbtn = document.getElementById('Detailbtn');

// function changeText(event){
//     console.log(event);
//     let Detailbtn = document.getElementById('Detailbtn');
//     Detailbtn.textContent = "view more details"
// }

// Detailbtn.addEventListener('click' , changeText);
// // Detailbtn.removeEventListener('click' , changeText);


// let anchorElement = document.getElementById('fanchor');


// anchorElement.addEventListener('click' , (e)=>{
//     e.preventDefault();  // jo iska default behavior h link pr le jana bo remove ho jayga
//     anchorElement.textContent = " Click over me "  // ab jab link pr click kr rha hu to sirf content change ho rha ha , link render nhi  ho rhi ha
// })


//Avoiding too many EventListerners
//1 -
// let paras = document.querySelectorAll('p');

function  alertPara(event){
    if(event.target.nodeName === "SPAN") // jab sirf span pr click krke alert chahiye tb
    alert("You have clicked on para : " + event.target.textContent);
}

// for(let i =0 ; i< paras.length ; i++)
// {
//     let para = paras[i];
//     para.addEventListener('click' , alertPara);
// }

//2-


let mydiv = document.getElementById('wrapper');
document.addEventListener('click' , alertPara)
