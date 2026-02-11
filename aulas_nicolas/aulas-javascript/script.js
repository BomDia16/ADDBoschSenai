const input = document.getElementById('texto');
const resultado = document.getElementById('resultado');
const numero1 = document.getElementById('n1')
const numero2 = document.getElementById('n2')
const aparecer_resultado = document.getElementById('resultado-soma')

input.addEventListener('input', function(event) {
    // 'event.target.value' pega o valor atual do input
    resultado.textContent = 'Você digitou: ' + event.target.value;
    console.log(event.target.value); // Exibe no console a cada letra
});

numero1.addEventListener('input', function(evento) {
    let soma = somar()
    aparecer_resultado.textContent = soma
})

numero2.addEventListener('input', function(evento) {
    let soma = somar()
    aparecer_resultado.textContent = soma
})

function somar() {
    let num1 = Number(numero1.value)
    let num2 = Number(numero2.value)

    let resultado_soma = num1 + num2

    return resultado_soma
}

function transformar_gato() {
    let gato = document.getElementById('gato')
    let miado = document.getElementById('miado')

    gato.setAttribute('src', 'https://cdn.awsli.com.br/31/31979/produto/29095759/c530bedfc7.jpg')
    miado.textContent = 'RAAAAAAAAAAAAAAAAAAAAR'

    console.log(gato)
}
