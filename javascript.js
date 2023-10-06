var num1, num2;
function getNumber(){
    num1 = parseInt(window.prompt("Enter first number: "));
    num2 = parseInt(window.prompt("Enter second number: "));
    //window.alert(num1 + num2)
    findSum(num1, num2);
}

function findSum(num1, num2){
    var result = num1 + num2;
    //window.alert("Result" + num1 + num2);
    window.alert("Result: " + result);
}