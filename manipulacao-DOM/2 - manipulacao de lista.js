let nomes = ["João", "Maria", "Ana", "Pedro"]


let lista = document.querySelector("ul")

nomes.forEach(aluno => {
    lista.innerHTML += `<li>${aluno}</li>`
   //lista.innerHTML += "<li>" + aluno + "</li>"
});
