//Define object Constructor & Object storage(Array)
const library = []

function book(name, author, page, read){
    this.name = name
    this.author = author
    this.page = page
    this.read = read
}
//DOM elements
    //On page:
let openFormBtn = document.querySelector('#open-form')
let loginBtn = document.getElementById("login-btn")
let displayBtn = document.querySelectorAll('#dp-btn')
let removeDialog = document.querySelectorAll('#remove-dialog')
let updateBtn = document.querySelectorAll('#upd-btn')

    //On dialog
let addDialog = document.getElementById("add-dialog")
let addForm = document.getElementById("add-form")
let removeCf = document.getElementById("rm-dialog")
let addBtn = document.getElementById("add-btn")
let closeBtn = document.querySelectorAll("#close-btn")
let removeBtn = document.getElementById("rm-btn")

    //Functionality
let container = document.querySelector(".container")

    //On Form
let nameInput = document.getElementById("name")
let authorInput = document.getElementById("author")
let pageInput = document.getElementById("page")
let readStatus = document.querySelectorAll('input[name="readStatus"]')


//Function to fill a form to add new Object to the Array
function add(a, b, c, d){
    return library.push(new book(a, b, c, d))
}
//Function to display each Book Object
function display(index){
}
//Function to Remove 
function remove(index){
    return library.splice(index)
}
//Function to change read Status of each Object
function update(index, status){
    return library[index].read = status
}
//Function to get random color for book image
function getRandomColor() {
    const randomIndexR = Math.round(Math.random() * 256)
    const randomIndexG = Math.round(Math.random() * 256)
    const randomIndexB = Math.round(Math.random() * 256)
    return `rgba(${randomIndexR},${randomIndexG},${randomIndexB})`
}

//Into action: Books are displayed in container with grid system

    //Read click event - Open form - Close form
let isDialogOpen = false
openFormBtn.addEventListener("click", ()=>{
    addDialog.showModal()
    isDialogOpen = true
})
closeBtn.forEach(btn => btn.addEventListener("click", ()=> {
    addForm.removeAttribute("novalidate")
    addDialog.close("canceled")
    addForm.setAttribute("novalidate","true")
    isDialogOpen = false
}))
    //Read form input then assign values to create new object
function checkStatus(){//To check whether the book is read or not read
    let result = ""
    for(const status of readStatus){
        if(status.checked){
            result = status.value
        }
    }
    return result
}
addBtn.addEventListener('click', (e)=> {
    if(isDialogOpen == true && !addForm.checkValidity()){
        e.preventDefault()
    }
    add(nameInput.value, authorInput.value, pageInput.value, checkStatus())
    modal.close("canceled")
})
    //Loop through array to display everything as cards
function display(){
    library.forEach(book => {
        let card = document.createElement('div[class="book-card"')
        

        
    });
}
    //Read click event - display each book's card

    //Read click event - remove 

    //Read click event > Slide input value > Read status change
    
