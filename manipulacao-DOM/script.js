const { createElement } = require("react")

function adicionar(){
    let valor = document.querySelector("input").value
    let lista = document.querySelector("ul")
    let item = document.createElement("li")
    
    item.innerHTML = valor

    let excluir = document.createElement("button")
    excluir.textContent = "Excluir "

    excluir.addEventListener("click", ()=> item.remove())

    item.append(excluir)

    lista.appendChild(item)
}