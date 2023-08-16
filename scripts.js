const button = document.getElementById("calcular")

const mostrarResultado = () => {
    const valor1 = parseInt(document.getElementById("input-1").value)
    const valor2 = parseInt(document.getElementById("input-2").value)
    const operacao = document.getElementById("input-3").value
    const text = document.getElementById("resultado")
    
    if (operacao == 1) {
        text.innerHTML = valor1 + valor2
    } else if (operacao == 2) {
        text.innerHTML = valor1 - valor2
    } else if (operacao == 3){
        text.innerHTML = valor1 * valor2
    } else if (operacao == 4) {
        text.innerHTML = valor1 / valor2
    } else {
        text.innerHTML="Escolha um valor: 1, 2, 3 e 4 para o campo operação."
    }

}

button.addEventListener('click', mostrarResultado)