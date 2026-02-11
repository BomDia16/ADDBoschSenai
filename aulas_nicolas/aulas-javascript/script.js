const input = document.getElementById('texto');
const resultado = document.getElementById('resultado');
const numero1 = document.getElementById('n1')
const numero2 = document.getElementById('n2')
const aparecer_resultado = document.getElementById('resultado-soma')
let quadrado = document.getElementById('q1')
const input_color = document.getElementById('input-color')
let botao = document.getElementById('botao')
let todo = document.getElementById('todo')
let tarefa = document.getElementById('tarefa')

input.addEventListener('input', function(event) {
    // 'event.target.value' pega o valor atual do input
    resultado.textContent = 'Você digitou: ' + event.target.value;
    console.log(event.target.value); // Exibe no console a cada letra
});

numero1.addEventListener('input', function() {
    let soma = somar()
    aparecer_resultado.textContent = soma
})

numero2.addEventListener('input', function() {
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

input_color.addEventListener('input', function() {
    mudar_cor(input_color.value)
})

function mudar_cor(color) {
    quadrado.style.backgroundColor = color
}

botao.addEventListener('click', adicionar_item)

function adicionar_item() {
    let new_item = document.createElement('li')
    new_item.innerHTML = tarefa.value
    tarefa.value = ""
    todo.appendChild(new_item)
}
