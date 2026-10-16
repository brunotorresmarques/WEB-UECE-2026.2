let lista = document.querySelector("ul")

let elemento = document.createElement("li")
elemento.textContent = "teste"
lista.appendChild(elemento)


lista.innerHTML += "<li>Qualquer coisa</li>"


console.log(elemento)