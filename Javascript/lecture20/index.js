// async function getData (){
//     setTimeout(function (){
//         console.log("I am inside of the setTimeout block");
//     },3000);
// }

//  let output = getData();


async function getData(){
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    // let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data =  await response.json();
    console.log("get data response : ",data);
}
async function postData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts' ,
        {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body : JSON.stringify({
                title : "Divyanshu Chauhan ---> I am in  love with someone.",
                userId : 5,
            })
        }
    );
    

    let data =  await response.json();
    console.log("post data response : ", data);
}

async function processData(){
    await postData();
    await getData();
}

processData();