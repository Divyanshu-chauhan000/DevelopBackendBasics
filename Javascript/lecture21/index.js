function outerFunction()
{
    let name = "Mozilla"; // name local variable ha jo init n create kiya ha
    function innerFunction(){
        console.log(name);  
    }
    innerFunction();
}
outerFunction();