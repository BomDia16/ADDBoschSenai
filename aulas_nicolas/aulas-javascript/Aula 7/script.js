let x = [1, "2", {
    name: "fjsldfjs",
    fajsldkfj: "korfgjekogje"
}, true]
let container = document.getElementById("container")

const dados = []

dados.push(x)
console.log(dados)

dados[0].push(1)
console.log(dados)

dados[0][2]["rrrr"] = 4
console.log(dados)

const pessoas = []

const pessoa1 = {
    name: 'Art',
    idade: 19
}
const pessoa2 = {
    name: 'Gui',
    idade: 21
}
const pessoa3 = {
    name: 'Leticia',
    idade: 19
}
const pessoa4 = {
    name: 'Die',
    idade: 18
}
const pessoa5 = {
    name: 'Lud',
    idade: 23
}

pessoas.push(pessoa1)
pessoas.push(pessoa2)
pessoas.push(pessoa3)
pessoas.push(pessoa4)
pessoas.push(pessoa5)


filtro = pessoas.filter((p) => p.idade > 20)
console.log(filtro)

achar = pessoas.find((p) => p.name == "Leticia")
console.log(achar)

function createCard(pessoa) {
    let div = document.createElement('div')
    let span = document.createElement('span')
    span.innerHTML = `${pessoa.name} ${pessoa.idade}`
    div.appendChild(span)

    return div
}

filtro.forEach(pessoa => {
    const card = createCard(pessoa)
    container.appendChild(card)
})