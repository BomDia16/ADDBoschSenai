let data = []

async function fetchData(url) {
    const response = await fetch(url)
    return await response.json()
}

async function setData() {
    data = await fetchData('https://servicodados.ibge.gov.br/api/v1/localidades/distritos')
    const distritos = document.getElementById('distritos')

    const reduceData = data.reduce((acc, value) => {
        if (value.municipio?.microrregiao?.mesorregiao?.UF?.sigla == "PR") {
            return acc + 1
        } else {
            return acc
        }
    }, 0)

    distritos.innerHTML = reduceData

    console.log(reduceData)
}
setData()

let dados = []
async function apiJson() {
    dados = await fetchData('https://jsonplaceholder.typicode.com/users')

    console.log(dados)
}