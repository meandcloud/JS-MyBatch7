var totalMarks = 500;
var course1 = parseInt(prompt("Enter marks of course 1: "));
var course2 = parseInt(prompt("Enter marks of course 2: "));
var course3 = parseInt(prompt("Enter marks of course 3: "));
var course4 = parseInt(prompt("Enter marks of course 4: "));
var course5 = parseInt(prompt("Enter marks of course 5: "));

var obtainedMarks = (course1 + course2 + course3 + course4 + course5);

var percentage = (obtainedMarks * 100 / totalMarks)

console.log("Obtained Marks: "+obtainedMarks)

console.log("Percentage: "+percentage)




var grade = percentage;

switch(true){
    case grade >=90 && grade <= 100:
        alert("Grade A+")
        break;
    
    case grade >=75 && grade <= 89:
        alert("Grade A")
        break;

    case grade >=60 && grade <= 74:
        alert("Grade B")
        break;
    
    case grade >=45 && grade <= 60:
        alert("Grade C")
        break;

    case grade >=30 && grade <= 44:
        alert("Grade D")
        break;

    case grade >=0 && grade <= 29:
        alert("Fail")
        break;

        default:
}

  


