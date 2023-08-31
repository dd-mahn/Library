//Define object Constructor & Object storage(Array)
const library = []

function book(name, author, page, read){
    this.name = name
    this.author = author
    this.page = page
    this.read = read
}
//DOM elements
let addBtn = document.querySelectorAll('#add-btn')
let displayBtn = document.querySelectorAll('#dp-btn')
let removeBtn = document.querySelectorAll('#rm-btn')
let updateBtn = document.querySelectorAll('#upd-btn')
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

    //Read click event - Add new grid item > Get 3 random colors to make gradient image

    //Loop through array to display everything as cards

    //Read click event - display each book's card

    //Read click event - remove 

    //Read click event > Slide input value > Read status change
    
