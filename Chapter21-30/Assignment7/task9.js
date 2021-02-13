var number = parseFloat(prompt("Enter a decimal number: "))

console.log(Math.ceil(number))

var text = "This is my dummy text";

console.log(text.slice(0,4))

var newText1 = "This"
var newText2 = "This"
var newText3 = "This"
var newText4 = "This"

    console.log(newText1.slice(-1,4))
    console.log(newText2.slice(-2,3))
    console.log(newText3.slice(-3,2))
    console.log(newText4.slice(-4,1)) 


for(var i = 0; i < 4; i++){
    console.log(newText1.slice(-1,4) + newText2.slice(-2,3) + newText3.slice(-3,2) + newText4.slice(-4,1))
}


//Second Assignment

var inputValue="cloud native computing"

var firstChar = inputValue.slice(0,1)

var secondChar = inputValue.slice(1,5)

var thirdChar = inputValue.slice(6,7)

var fourthChar = inputValue.slice(7,12)

var fifthChar = inputValue.slice(13,14)

var sixthChar = inputValue.slice(14,22)


console.log(firstChar.toUpperCase() + secondChar + " "+ 

thirdChar.toUpperCase() + fourthChar + " "+ fifthChar.toUpperCase() + sixthChar)


