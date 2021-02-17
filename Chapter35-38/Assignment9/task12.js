var num = parseInt(prompt("Enter number: "))


function factorial(num){
    return(num != 1) ? num * factorial(num - 1) : 1; 
}

console.log(factorial(num))