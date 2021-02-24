var num1 = parseInt(prompt("Enter first number"));

var num2 = parseInt(prompt("Enter second number"));

alert(num1 + num2);

//Improved Version

function myFunc(){
    var inputVal1 = document.getElementById("firstNumber").value 
    var inputVal2 = document.getElementById("secondNumber").value
    document.getElementById("result").innerHTML = parseInt(inputVal1) + parseInt(inputVal2)

}

function myReset(){
    document.getElementById("myForm").reset();
}