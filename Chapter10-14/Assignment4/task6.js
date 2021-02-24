function myFunc(){
    var totalMarks = 500;
    var course1 = document.getElementById("first").value;
    var course2 = document.getElementById("second").value;
    var course3 = document.getElementById("third").value;
    var course4 = document.getElementById("fourth").value;
    var course5 = document.getElementById("fifth").value;

    var obtainedMarks = parseInt(course1) + parseInt(course2) + parseInt(course3) + parseInt(course4) + parseInt(course5)

    document.getElementById("obtain").innerHTML = obtainedMarks;

    document.getElementById("percent").innerHTML = obtainedMarks * 100 / totalMarks+"%"

}

function myReset(){
    document.getElementById("first").value = "";
    document.getElementById("second").value = "";
    document.getElementById("third").value = "";
    document.getElementById("fourth").value = "";
    document.getElementById("fifth").value = "";
    
}