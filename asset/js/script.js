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
//Function to Remove 
function remove(index){
    return library.splice(index)
}
//Function to change read Status of each Object
function update(name, status){
    for(var i = 0; i < library.length; i++){
        if(library[i].name === name){
            library[i].read = status
        }
    }
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

//Into action: Books are displayed in container with grid system

    //Read click event - Open form - Close form
openFormBtn.onclick = () => {
    addDialog.showModal() 
}
closeFormBtn.onclick = () => {
    addForm.removeAttribute("novalidate")
    addDialog.close("canceled")
    addForm.setAttribute("novalidate","true")
}

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

function newBook(){
    addBtn.onclick = (e) => {
        if(!addForm.checkValidity()){
            e.preventDefault()
        }else{
            add(nameInput.value, authorInput.value, pageInput.value, checkStatus())
            createCard(library[library.length - 1])
            //Redefine node list
            reDefine()
            //To reset the form
            resetForm(nameInput) 
            resetForm(authorInput)
            resetForm(pageInput)
            //Close
            addDialog.close("submitted")
        }
    }
}

    //Display books as cards whenever add button is clicked
function createCard(book){
        //Create pre-styled cards
    let card = document.createElement('div')
    card.classList.add('book-card')
    card.setAttribute('data-name',book.name)

    let bg = document.createElement('div')
    bg.classList.add('card-bg')
    bg.style.background = `linear-gradient(90deg, ${getRandomColor()} 0%, ${getRandomColor()} 0%, ${getRandomColor()} 100%)`

    let name = document.createElement('div')
    name.classList.add('name','align-center')

    let author = document.createElement('div')
    author.classList.add('author','align-center')

    let page = document.createElement('div')
    page.classList.add('page','align-center')

    let status = document.createElement('button')
    status.classList.add('status','center','button')
    status.setAttribute('id','update-btn')
    status.setAttribute('data-name', book.name)
    if(book.read == 'read'){
        status.classList.add('read')
    }
    status.onclick = () => changeStatus(status)

    let remove = document.createElement('button')
    remove.classList.add('button','center')
    remove.setAttribute('id','open-remove')
    remove.setAttribute('data-name',book.name)
    remove.onclick = () => openRemove(remove)

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
function openRemove(button){
    removeDialog.showModal()
    //cancel button control
    cancelRemoveBtn.onclick = () => {
        removeDialog.close()
    }
    ////Read click event - remove a book card
    removeBtn.onclick = () => {
        for(var i = 0; i < cards.length; i++){
            if(cards[i].dataset.name === button.dataset.name){
                container.removeChild(cards[i])
                remove(i)
                removeDialog.close()
            }
        }
    }
}

    //Read click event - change Read status 
function changeStatus(button){
        let dataName = button.dataset.name
        if(button.innerHTML === "not read"){
            button.classList.add("read")
            button.innerHTML = "read"
            update(dataName,"read")
        }else{
            button.classList.remove("read")
            button.innerHTML = "not read"
            update(dataName,"not read")
        }
}

newBook()