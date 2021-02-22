var fisrtName = prompt("Please enter your first name: ");
var lastName = prompt("Please enter your last name: ");
var age = parseInt(prompt("Enter your age: "))

alert("Hello "+fisrtName+" "+lastName+", "+"You are "+age+" year old")

//Added Improved Version:

function message(){
    var inputVal1 = document.getElementById("fname").value;
    var inputVal2 = document.getElementById("lname").value;
    var inputVal3 = document.getElementById("age").value;

    document.getElementById("displayMsg").innerHTML = "Hello "+ inputVal1 +" "+ inputVal2 +" You are "+ inputVal3+ " years old";
}