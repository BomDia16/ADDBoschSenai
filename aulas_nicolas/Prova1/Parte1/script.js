let produtos = []

function adicionarProduto() {
    const nome = document.getElementById("nome").value
    const preco = parseInt(document.getElementById("preco").value)
    const quantidade = parseInt(document.getElementById("quantidade").value)

    let produto = {
        "nome": nome,
        "preco": preco,
        "quantidade": quantidade
    }

    produtos.push(produto)

    console.log(produtos)

    document.getElementById("nome").value = ""
    document.getElementById("preco").value = ""
    document.getElementById("quantidade").value = ""

    // maior preco

    let maiorPreco = produtos.reduce((acc, value) => {
        if (value.preco > acc) {
            return acc = value.preco
        } else {
            return acc
        }
    }, 0)

    let maisCaro = produtos.filter(p => p.preco == maiorPreco)

    let pMaiorPreco = document.getElementById("maisCaro")
    pMaiorPreco.innerHTML = maisCaro[0].nome

    // maior quantidade

    let maiorQuantidade = produtos.reduce((acc, value) => {
        if (value.quantidade > acc) {
            return acc = value.quantidade
        } else {
            return acc
        }
    }, 0)

    let produtoMaiorQuantidade = produtos.filter(p => p.quantidade == maiorQuantidade)

    let pMaiorQuantidade = document.getElementById("maiorQuantidade")
    pMaiorQuantidade.innerHTML = produtoMaiorQuantidade[0].nome

    // valor total

    let valorTotal = produtos.reduce((acc, value) => {
        return parseInt(acc) + (parseInt(value.preco) * parseInt(value.quantidade))
    }, 0)

    let pValorTotal = document.getElementById("valorTotal")
    pValorTotal.innerHTML = "R$ " + valorTotal
}