
var books = [
    {
        id: 1,
        title: "JavaScript",
        author: "Mark Myers"
    },

    {
        id: 2,
        title: "HTML",
        author: "Jon Duckett"
    },

    {
        id: 3,
        title: "CSS",
        author: "Jon Duckett"
    },

    {
        id: 4,
        title: "Bootstrap",
        author: "Jack James"
    },

    {
        id: 5,
        title: "NodeJS",
        author: "Ethan Byers"
    },

]


var numElement = books.length;
console.log(numElement);

document.getElementById("listOfBook").innerHTML += numElement;


for(var i = 0; i < numElement; i++ ){
    console.log(books[i].id)

   tbody.innerHTML +=`
    
    <tr>
        <td>${books[i].id}</td>
        <td>${books[i].title}</td>
        <td>${books[i].author}</td>
        <td>
        <button class="btn btn-danger delete" onclick=del(event)>X</button>
        </td>

    </tr>
   
   `
}

function del(event){
    const table = document.querySelector('table');
    if(!event.target.classList.contains('delete')){
        return;
    }

    const myBtn = event.target;
    myBtn.closest('tr').remove();
    table.addEventListener('click, del')
}


// function addBook(){
    
//     const tbody = document.getElementById('tbody');
    
//     const id = document.getElementById('myid').value;
//     const title = document.getElementById('title').value;
//     const author = document.getElementById('author').value;

//     tbody.innerHTML += `
//         <tr>
//             <td>${id}</td>
//             <td>${title}</td>
//             <td>${author}</td>

//         </tr>
//     `

// }












