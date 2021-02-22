var firstName = "Amar";
var lastName = "Shabbir"
var age = 20;

alert("Hello"+" "+ firstName+" " + lastName+" You are "+age+" year old.")

function studentRecord(){
    var inputVal1 = document.getElementById("rollNumber").value 
    var inputVal2 = document.getElementById("program").value 
    var inputVal3 = document.getElementById("fname").value 
    var inputVal4 = document.getElementById("lname").value 
    var inputVal5 = document.getElementById("email").value 
    var inputVal6 = document.getElementById("phone").value 

    document.getElementById("showRoll").innerHTML = inputVal1
    document.getElementById("pro").innerHTML = inputVal2
    document.getElementById("firstname").innerHTML = inputVal3
    document.getElementById("lastname").innerHTML = inputVal4
    document.getElementById("myemail").innerHTML = inputVal5
    document.getElementById("num").innerHTML = inputVal6

}

