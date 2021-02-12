var courses = [];

var course1 = prompt("Enter Course_1: ");
var course2 = prompt("Enter Course_2: ");
var course3 = prompt("Enter Course_3: ");
var course4 = prompt("Enter Course_4: ");
var course5 = prompt("Enter Course_5: ");

courses.push(course1, course2, course3, course4, course5)

//var numElement = courses.length

for(var i = 0; i < 5; i++){
    alert(courses)
    break;
}



var removeCourse = parseInt (prompt("Enter number: "))

deleteCourse = courses.splice(removeCourse);


alert(courses)


console.log(courses)