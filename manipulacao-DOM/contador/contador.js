let contador = 0

document.querySelector("span").textContent = contador


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