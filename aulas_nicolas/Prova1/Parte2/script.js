let dados = require("./dados.json")

/////// transformacao dos dados

// nomes produtos
let nomes = dados.map((value) => {
    return value.nome
})

console.log(nomes)

// preco total
let precoTotal = dados.map((value) => {
    return {
        "nome": value.nome,
        "preco": value.preco,
        "valorTotalIndividual": value.preco * value.quantidade
    }
})

console.log(precoTotal)

// preco acima de 500
let acima500 = dados.filter((p) => p.preco > 500)
console.log(acima500)

// quantidade menor que 5
let quantidadeMenor5 = dados.filter((p) => p.quantidade < 5)
console.log(quantidadeMenor5)

/////// analise de dados

// valor total em estoque
let valorTotal = dados.reduce((acc, value) => {
    return acc + value.preco
}, 0)

console.log(valorTotal);

// valor total em estoque eletronicos
let eletronicos = dados.filter((p) => p.categoria == "Eletronico")
let valorTotalEletronico = eletronicos.reduce((acc, value) => {
    return acc + value.preco
}, 0)

console.log(valorTotalEletronico);

// valor total em estoque quantidade > 10
let qMaior10 = dados.filter((p) => p.quantidade > 10)
let valorTotalQMaior10 = qMaior10.reduce((acc, value) => {
    return acc + value.preco
}, 0)

console.log(valorTotalQMaior10);

// produto maior valor total
let maiorValorTotal = precoTotal.reduce((acc, value) => {
    if (value.valorTotalIndividual > acc) {
        return acc = value.valorTotalIndividual
    } else {
        return acc
    }
}, 0)

let pMaiorValorTotal = precoTotal.filter((p) => p.valorTotalIndividual == maiorValorTotal)
console.log(pMaiorValorTotal[0].nome);


// produto menor valor total
let menorValorTotal = precoTotal.reduce((acc, value) => {
    if (value.valorTotalIndividual < acc) {
        return acc = value.valorTotalIndividual
    } else {
        return acc
    }
}, Infinity)

let pMenorValorTotal = precoTotal.filter((p) => p.valorTotalIndividual == menorValorTotal)
console.log(pMenorValorTotal[0].nome);

// produto mais caro
let maiorValor = precoTotal.reduce((acc, value) => {
    if (value.preco > acc) {
        return acc = value.preco
    } else {
        return acc
    }
}, 0)

let pMaiorValor = precoTotal.filter((p) => p.preco == maiorValor)
console.log(pMaiorValor[0].nome);

// produto mais barato
let menorValor = precoTotal.reduce((acc, value) => {
    if (value.preco < acc) {
        return acc = value.preco
    } else {
        return acc
    }
}, Infinity)

let pMenorValor = precoTotal.filter((p) => p.preco == menorValor)
console.log(pMenorValor[0].nome);

// produto maior quantidade
let maiorQuantidade = dados.reduce((acc, value) => {
    if (value.quantidade > acc) {
        return acc = value.quantidade
    } else {
        return acc
    }
}, 0)

let pMaiorQuantidade = dados.filter((p) => p.quantidade == maiorQuantidade)
console.log(pMaiorQuantidade[0].nome);

// produto menor quantidade
let menorQuantidade = dados.reduce((acc, value) => {
    if (value.quantidade < acc) {
        return acc = value.quantidade
    } else {
        return acc
    }
}, Infinity)

let pMenorQuantidade = dados.filter((p) => p.quantidade == menorQuantidade)
console.log(pMenorQuantidade[0].nome);

// media preco dos produtos
let somaPreco = dados.reduce((acc, value) => {
    return acc + value.preco
}, 0)

let mediaPreco = somaPreco / dados.length
console.log(mediaPreco)

// media dos precos totais dos produtos por estoque
let somaPrecoTotal = precoTotal.reduce((acc, value) => {
    return acc + value.valorTotalIndividual
}, 0)
let somaQuantidade = dados.reduce((acc, value) => {
    return acc + value.quantidade
}, 0)

let mediaPrecoTotal = somaPrecoTotal / somaQuantidade
console.log(mediaPrecoTotal)