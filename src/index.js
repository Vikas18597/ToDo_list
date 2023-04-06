import './styles/main.css'

function addnote() {
    //assigning values of input to variables
    const newTitle = document.getElementById('new-title').value
    const newDescription = document.getElementById('new-Description').value
    const newDate = document.getElementById('new-Date').value

    if (newTitle && newDescription && newDate){
        const list = document.createElement("li")
        list.innerHTML = "<a href = '#'> \
                        <h2>Title</h2> \
                        <p>Description</p> \
                        <p>Date</p>\
                    </a>"
        const ticket = document.querySelector(".tickets")
        ticket.insertBefore(list, ticket.firstElementChild)

        //adding values to elements 
        const addTitle = document.querySelector(".tickets h2")
        addTitle.innerHTML = newTitle 
        const addDescription = document.querySelector('.tickets :nth-child(2)')
        addDescription.innerHTML = newDescription 
        const addDate = document.querySelector('.tickets :nth-child(3)')
        addDate.innerHTML = newDate 
    }
}

const add = document.querySelector(".ticket-button")
// only when all three are non empty 
add.addEventListener("click", addnote)        

