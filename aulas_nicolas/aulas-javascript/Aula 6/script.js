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
let id = 1
let botao_remover = document.getElementById('botao-remover')
let input_remover = document.getElementById('input-remover')
let thead = document.getElementById('thead')

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
    thead.style.backgroundColor = color
}

botao.addEventListener('click', adicionar_item)
tarefa.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        adicionar_item()
    }
})

function adicionar_item() {
    // let new_item = document.createElement('li')
    // new_item.innerHTML = id + " " + tarefa.value
    // new_item.id = id
    // id++
    // tarefa.value = ""
    // todo.appendChild(new_item)

    if (tarefa.value != "") {
        let row = document.createElement('tr')
        let id_tabela = document.createElement('td')
        let tarefa_tabela = document.createElement('td')
        let remover_tabela = document.createElement('td')
        let remover_item_tabela = document.createElement('button')

        id_tabela.innerHTML = id
        tarefa_tabela.innerHTML = tarefa.value
        row.id = id
        id++
        tarefa.value = ""
        remover_item_tabela.innerHTML = "Remover item"
        remover_item_tabela.onclick = function() {
            remover_item(row)
        }
        row.appendChild(id_tabela)
        row.appendChild(tarefa_tabela)
        remover_tabela.appendChild(remover_item_tabela)
        row.appendChild(remover_tabela)
        todo.appendChild(row)
    }
}

// botao_remover.addEventListener('click', remover_item)
// input_remover.addEventListener('keydown', function(event) {
//     if (event.key == 'Enter') {
//         remover_item()
//     }
// })

function remover_item(row) {
    // let item_remover = document.getElementById(input_remover.value)
    // item_remover.remove()
    // input_remover = ""

    // let item_remover = document.getElementById(id_remover)
    row.remove()
    input_remover.value = ""
}

let botao_card = document.getElementById('adicionar-card')
botao_card.addEventListener('click', adicionar_card)
let cards = document.getElementById('cards')

function adicionar_card() {
    let link = document.getElementById('link')
    let descricao = document.getElementById('descricao')

    let div = document.createElement('div')
    let img = document.createElement('img')
    let desc = document.createElement('p')
    img.setAttribute('src', link.value)
    desc.innerHTML = descricao.value

    div.appendChild(img)
    div.appendChild(desc)

    cards.appendChild(div)
}
