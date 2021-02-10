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