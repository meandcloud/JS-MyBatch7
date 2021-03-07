function myfunc(){

    const info = document.getElementById("info");

    var fullName = document.getElementById("name").value;
    var dateElem = document.getElementById("date").value;
    var monthElem = document.getElementById("month").value;
    var yearElem = document.getElementById("year").value;
    

    info.innerHTML += `
        <p>${fullName}</p>
        <p>Date of Birth: ${dateElem}-${monthElem}-${yearElem}</p>
   
    `

var date2 = new Date();

var greetHour2 = date2.getHours();


if(greetHour2 < 12){
    document.getElementById("msg").innerHTML = "Good Morning " + fullName;
    document.getElementById("msg").style.backgroundColor = "#fff6cf";
    document.getElementById("msg").style.color = "white";
    document.getElementById("msg").style.padding = "10px";

    var myImg = document.createElement("img");
    myImg.setAttribute("src", "morning.jpg")
    document.getElementById("msg").appendChild(myImg)

} else if(greetHour2 == 12){
    document.getElementById("msg").innerHTML = "Good Afternoon " + fullName;
    document.getElementById("msg").style.backgroundColor = "#ffdb00";
    document.getElementById("msg").style.color = "white";
    document.getElementById("msg").style.padding = "10px";

    var myImg = document.createElement("img");
    myImg.setAttribute("src", "afternoon.jpg")
    document.getElementById("msg").appendChild(myImg)

} else if(greetHour2 >= 12 && greetHour2 <= 17){
    document.getElementById("msg").innerHTML = "Good Evening " + fullName;
    document.getElementById("msg").style.backgroundColor = "#1198BA";
    document.getElementById("msg").style.color = "white";
    document.getElementById("msg").style.padding = "10px";

    var myImg = document.createElement("img");
    myImg.setAttribute("src", "evening.jpg")
    document.getElementById("msg").appendChild(myImg)

} else if(greetHour2 = 18 && greetHour2 <= 24){
    document.getElementById("msg").innerHTML = "Good Night " + fullName
    document.getElementById("msg").style.backgroundColor = "#141852";
    document.getElementById("msg").style.color = "white";
    document.getElementById("msg").style.padding = "10px";

    var myImg = document.createElement("img");
    myImg.setAttribute("src", "night.jpg")
    document.getElementById("msg").appendChild(myImg)
}
}

function myTimeOnEarth(){
    
    var DOB = document.getElementById("myDOB").value;

    var d1 = new Date(DOB)

    var d2 = new Date();

    var timeDiff =  d2.getTime() - d1.getTime()

    var days = timeDiff / (1000 * 60 * 60 * 24);

    var yearDiff = d2.getFullYear() - d1.getFullYear()

    var diffByOne = yearDiff - 1;

    var monthDiff =  d1.getMonth() - d2.getMonth()

    var dayDiff = d2.getDay() - d1.getDay()

    var hourDiff = d2.getHours() - d1.getHours()

    var minDiff = d2.getMinutes() - d1.getMinutes()

    var secDiff = d2.getSeconds() - d1.getSeconds()

    document.getElementById("ageInDetail").innerHTML = "You are "+ diffByOne +" year "
    + monthDiff + " months " + dayDiff + " days " + hourDiff + " hours "
    + minDiff + " minutes " + secDiff + " seconds old "

    document.getElementById("daysOnEarth").innerHTML = Math.round(days) + " days"

}

function nextBirthDay(){
    var DOB = document.getElementById("myDOB").value;

    var d3 = new Date();

    var d4 = new Date(DOB)
    
    var timeDifference = d4.getTime() - d3.getTime()
    
    var hoursDifference = d4.getHours() - d3.getHours()
    
    var minDifference = d4.getMinutes() - d3.getMinutes()
    
    var secDifference = d4.getSeconds() - d3.getSeconds()
    
    var nextBirthDay = timeDifference / (1000 * 60 * 60 *24);

    document.getElementById("nextBirthDay").innerHTML = 
    "Days left to my next Birthday " + Math.ceil (nextBirthDay) + " days "
    + hoursDifference + " hours "
    + minDifference + " min " + secDifference + " sec "


}


