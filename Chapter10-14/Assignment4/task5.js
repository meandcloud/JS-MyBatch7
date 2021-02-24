var course1 = parseInt(prompt("Enter marks for course 1: "));
var course2 = parseInt(prompt("Enter marks for course 2: "));
var course3 = parseInt(prompt("Enter marks for course 3: "));
var course4 = parseInt(prompt("Enter marks for course 4: "));
var course5 = parseInt(prompt("Enter marks for course 5: "));
totalMarks = 500;
var obtainedMarks = (course1 + course2 + course3 + course4 + course5)
var percentage = obtainedMarks * 100 / totalMarks
console.log(obtainedMarks)
console.log(percentage)
alert("Obtained Marks: "+ obtainedMarks +" Percentage: "+ percentage+"%")

// function myFunc(){
//     var totalMarks = 500;
//     var course1 = document.getElementById("first").value;
//     var course2 = document.getElementById("second").value;
//     var course3 = document.getElementById("third").value;
//     var course4 = document.getElementById("fourth").value;
//     var course5 = document.getElementById("fifth").value;

//     var obtainedMarks = parseInt(course1) + parseInt(course2) + parseInt(course3) + parseInt(course4) + parseInt(course5)

//     document.getElementById("obtain").innerHTML = obtainedMarks;

//     document.getElementById("percent").innerHTML = obtainedMarks * 100 / totalMarks+"%"

// }

// function myPercent(){
//     var totalMarks = 500
//     obtainedMarks 
// }