function cadastrar(){
    // Pegar o valor digitado no formulário
    let valor = document.querySelector("input").value

    // Pegar o h1 e coloca o texto nele
    let h1 = document.querySelector("h1")
    h1.textContent = `O nome digitado foi: ${valor}`
}