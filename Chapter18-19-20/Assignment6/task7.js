var courses = ["JavaScript", "HTML", "CSS", "Bootstrap", "NodeJS"]

var numElements = courses.length;

for(var i = 0; i < numElements; i++){
   console.log(courses[i])   
}

var removeCourse = parseInt (prompt("Enter number: "))

deleteCourse = courses.splice(removeCourse);


for(var i=0; i<courses.length; i++){
    console.log(courses[i])
}


