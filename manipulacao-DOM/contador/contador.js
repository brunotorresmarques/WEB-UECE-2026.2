let contador = 0

document.querySelector("span").textContent = contador

let menos = document.querySelector("#menos")
let mais = document.querySelector("#mais")

menos.addEventListener("click",()=> subtrair())


mais.addEventListener("click",()=> somar())


function somar() {
    contador += 1
    document.querySelector("span").textContent = contador
}

function subtrair() {
    if (contador > 0) {
        contador -= 1
        document.querySelector("span").textContent = contador
    }else {
        alert("O número não pode ser decrementado!")
    }

}


function trocarTema(){
    let div = document.querySelector("div")
    div.classList.toggle("tema")
}