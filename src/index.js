import './styles/main.css'

const addnote = () => {
    const list = document.createElement("li")
    
    document.querySelector(".tickets").appendChild(list);
    const link = document.createElement("a")
    list.appendChild(link)
}