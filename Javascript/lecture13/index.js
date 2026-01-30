/*
JS DOM Manipulation:-
window object is global object ----> object heirarchy me sbse upr aata ha window object
it is created by browser

DOM: Document object model

    --------------------------------------------
    |             converted                    |
    |  Html code -------------> JS object      |  --- this whole is known as DOM-->tree like structure
    |                                |         |
    |          this is known as document       |
    -------------------------------------------



BOM : Browser object model :- jo bhi interaction  browser k sath ho rhi ha bo sb BOM k andr aata ha 


access Methods:-
getElementById,
getElementByClassName,
getElementByTagName


querySelectors: // first occurence of the class content will be returned
queryselector(#idname)
queryselector(.className)
queryselector(p)

querySelectorAll se sabhi resources ko access kiya ja skta ha  

Updating Methods:
InnerHtml  get/set 
OuterHtml   The outerHTML property sets or returns the HTML element, including attributes, start tag, and end tag.
text-content  sare enter , spaces show krega. Sbhi content print kra deta ha 
innerText  jaisa hm UI pr render krte ha baisa hi console. show hoga 


Add element
createElement
.appendChild() child hmesha end m append hota ha 
kya custom jgh pr child add ho skta ha ? 
Ha , using insertAdjacentElement(position, HTMLContent)
position : beforebegin


Removal
oppsite of appendChild()
parent.removeChild(child);


ques: kya sirf child object ka use krke parent findOut kiya ja skta ha 
*/

let mydiv = document.querySelector('#fdiv');


// let newElement =document.createElement('span');
// newElement.textContent = "Divyanshu Chauhan is my name";

// mydiv.insertAdjacentElement('beforebegin', newElement);
// mydiv.insertAdjacentElement('afterbegin', newElement);  
// mydiv.insertAdjacentElement('beforeend', newElement);
// mydiv.insertAdjacentElement('afterend', newElement);


// let mydiv = document.querySelector('#mydiv')

// let mydiv = document.getElementById('fdiv')34
// let parent = mydiv.parentElement;
// parent.removeChild(mydiv);
// let parent = document.querySelector('#mydiv');
// let child =  document.querySelector('#fdiv');
// parent.removeChild(child);
