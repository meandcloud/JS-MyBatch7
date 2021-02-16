
var name = prompt("Enter your name: ")

var dateOfBirth = parseInt(prompt("Enter the date: "))


var monthOfBirth = parseInt(prompt("Enter the month: "))


var yearOfBirth = parseInt(prompt("Enter the year: "))


var date1 = new Date();

var greetHour = date1.getHours();

var msg;

if(greetHour < 12){
    console.log("Good Morning "+ name)

}else if(greetHour == 12){
    console.log("Good afternoon "+ name)

}else if(greetHour >=12 && greetHour <=17){
    console.log("Good Evening "+ name)
}  

else if(greetHour = 18 && greetHour <= 24){
    console.log("Good Night "+ name)
}

console.log("Your DOB is: "+ name +" "+ dateOfBirth +"-"+ 
monthOfBirth +"-"+ yearOfBirth +" "+" in pakistan standard time")




var d1 = new Date("Aug 20 1984 16:20:25")

var d2 = new Date();

var timeDiff =  d2.getTime() - d1.getTime()


//console.log("This is time difference: "+timeDiff)




var days = timeDiff / (1000 * 60 * 60 * 24);


var yearDiff = d2.getFullYear() - d1.getFullYear()

//console.log("Your age in yours: "+yearDiff)

var monthDiff =  d1.getMonth() - d2.getMonth()

//console.log("Your month difference: "+monthDiff)

var dayDiff = d2.getDay() - d1.getDay()

var hourDiff = d2.getHours() - d1.getHours()

//console.log("Your hours difference: "+hourDiff)

var minDiff =  d2.getMinutes() - d1.getMinutes() 

//console.log("Your Minute difference: "+minDiff);

var secDiff =  d2.getSeconds() -  d1.getSeconds()

//console.log("Your seconds difference: "+secDiff)


console.log("You are "+yearDiff+" years "+ monthDiff + 
" month " + dayDiff + " day "+ hourDiff + " hours "+ minDiff + 
" min "+ secDiff + " sec ")

console.log("Your age in days: "+Math.ceil(days))





var d3 = new Date();

var d4 = new Date("Aug 20 2021 16:20:25")

var timeDifference = d4.getTime() - d3.getTime()

var hoursDifference = d4.getHours() - d3.getHours()

var minDifference = d4.getMinutes() - d3.getMinutes()

var secDifference = d4.getSeconds() - d3.getSeconds()

var nextBirthDay = timeDifference / (1000 * 60 * 60 *24);

console.log("Time left to next Birthday is: "+Math.ceil(nextBirthDay)+" days "+
hoursDifference+ " hours "+ minDifference+ " min "+secDifference+ " sec ")











//var d = new Date();


//console.log(d)

//var currentHour = d.getHours()

//console.log(currentHour)

//var currentMin = d.getMinutes()

//console.log(currentMin)

//var currentSec = d.getSeconds()

//console.log(currentSec)

//console.log(currentHour +":"+ currentMin +":"+ currentSec)



//Age in days



//console.log(d1)


//var timeInDay = 24 * 60 * 60 * 1000;

//console.log("Days: "+timeInDay)

//var myDayDiff = timeDiff / timeInDay;

//console.log("Days and days: "+myDayDiff);





//var d3 = new Date("08 20 1984 16:20:25")
//var d4 = new Date()










//console.log(Math.round(days))

//var age = d.getFullYear();

//console.log(age)




/*var date = new Date()

console.log(date)

var myDate = date.getHours()

console.log(myDate)

if(myDate = 00 && myDate <= 12){
    console.log("Good Morning")
}
else if(myDate = 13 && myDate <= 15){
   console.log("Good Afternoon")
}
else if(myDate = 16 && myDate <= 21){
    console.log("Good Evening")
}
else if(myDate = 22 && myDate <= 24){
    console.log("Good Night")
}


*/

