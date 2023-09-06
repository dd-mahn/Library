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
let openRemoveBtn = document.querySelectorAll('#open-remove')
let loginBtn = document.getElementById("login-btn")
let updateBtn = document.querySelectorAll('#update-btn')

    //On dialog
let addDialog = document.getElementById("add-dialog")
let removeDialog = document.getElementById('rm-dialog')
let addForm = document.getElementById("add-form")
let addBtn = document.getElementById("add-btn")
let closeFormBtn = document.getElementById("close-form")
let cancelRemoveBtn = document.getElementById('cancel-remove')
let removeBtn = document.getElementById("rm-btn")

    //Functional
let container = document.querySelector(".container")
let cards = document.querySelectorAll('.book-card')
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
//Function to redefine node-lists of element whenever a new node is created
function reDefine(){
    openRemoveBtn = document.querySelectorAll('#open-remove')
    updateBtn = document.querySelectorAll('#update-btn')
    cards = document.querySelectorAll('.book-card')
}
//Function to reset form when the form is closed
function resetForm(input){
    if(input.value!='')input.value=''
}
function resetRadio(){
    
}

//Into action: Books are displayed in container with grid system

    //Read click event - Open form - Close form
let isDialogOpen = false
openFormBtn.addEventListener("click", ()=>{
    addDialog.showModal()
    isDialogOpen = true
})
closeFormBtn.addEventListener("click", () => {
    addForm.removeAttribute("novalidate")
    addDialog.close("canceled")
    addForm.setAttribute("novalidate","true")
    isDialogOpen = false
})


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
    addDialog.close("submitted")

    display(library[library.length-1])
    //Redefine node list
    reDefine()
    //To make button functional
    openRemove()
    //To reset the form
    resetForm(nameInput) 
    resetForm(authorInput)
    resetForm(pageInput)
    resetRadio()
})


    //Display books as cards whenever add button is clicked
function display(book){
        //Create pre-styled cards
    let card = document.createElement('div')
    card.classList.add('book-card')
    card.setAttribute('data-name',book.name)

    let bg = document.createElement('div')
    bg.classList.add('card-bg')

    let name = document.createElement('div')
    name.classList.add('name','align-center')

    let author = document.createElement('div')
    author.classList.add('author','align-center')

    let page = document.createElement('div')
    page.classList.add('page','align-center')

    let status = document.createElement('button')
    status.classList.add('status','center','button')
    status.setAttribute('id','update-btn')
    if(book.read == 'read')status.classList.add('read')
    

    let remove = document.createElement('button')
    remove.classList.add('button','center')
    remove.setAttribute('id','open-remove')
    remove.setAttribute('data-name',book.name)

    let removeIcon = document.createElement('i')
    removeIcon.classList.add('fa-regular','fa-trash-can')

        //Add elements to html
    container.appendChild(card)
    card.appendChild(bg)
    card.appendChild(name)
    card.appendChild(author)
    card.appendChild(page)
    card.appendChild(status)
    card.appendChild(remove)
    remove.appendChild(removeIcon)

        //Show info
    name.innerText = '. ' + book.name
    author.innerText = '.author: ' + book.author
    page.innerText = '.page: ' + book.page
    status.innerText = book.read
    
}
    //Read click event - open remove dialog
function openRemove(){
    openRemoveBtn.forEach(button => button.addEventListener('click', () => {
        //show dialog
        console.log(button.dataset)
        removeDialog.showModal()
        //cancel button control
        cancelRemoveBtn.addEventListener('click', () => {
            removeDialog.close()
        })
        //remove 
        removeBtn.addEventListener('click', () => {
            removeDialog.close()
        })
    }))
}

    //Read click event - remove a book card

    //Read click event - change Read status 
    
