const dados = require("./dados.json").vehicles

const totalPreco = dados.reduce((acc, valor) => {
    return acc + valor.price_brl
}, 0)

console.log("Total dos preços: " + totalPreco)

const avgHorsePower = dados.reduce((acc, valor) => {
    return acc + valor.horsepower / dados.length
}, 0)

console.log("Média de cavalos: " + avgHorsePower)

const avgKmL = dados.reduce((acc, valor) => {
    return acc + valor.city_km_l / dados.length
}, 0)

console.log("Média de km por litro: " + avgKmL)

const avgPrice = dados.reduce((acc, valor) => {
    return acc + valor.price_brl / dados.length
}, 0)

console.log("Média de preço: " + avgPrice)

const gasolina = dados.filter((p) => p.fuel === "Gasoline").length
console.log("Carros a gasolina: " + gasolina)

const eletrico = dados.filter((p) => p.fuel === "Electric").length
console.log("Carros elétricos: " + eletrico)

const flex = dados.filter((p) => p.fuel === "Flex").length
console.log("Carros flex: " + flex)

const bestCarPrice = dados.reduce((acc, value) => {
    if (value.price_brl > acc) {
        return acc = value.price_brl
    } else {
        return acc
    }
}, 0)
const bestCar = dados.find((p) => p.price_brl === bestCarPrice)
console.log("Carro mais caro: " + bestCar.brand + " " + bestCar.model)

const worstCarPrice = dados.reduce((acc, value) => {
    if (value.price_brl < acc) {
        return acc = value.price_brl
    } else {
        return acc
    }
}, dados[0].price_brl)
const worstCar = dados.find((p) => p.price_brl === worstCarPrice)
console.log("Carro mais barato: " + worstCar.brand + " " + worstCar.model)

const bestPower = dados.reduce((acc, value) => {
    if (value.horsepower > acc) {
        return acc = value.horsepower
    } else {
        return acc
    }
}, 0)
const bestPowerCar = dados.find((p) => p.horsepower === bestPower)
console.log("Carro mais potente: " + bestPowerCar.brand + " " + bestPowerCar.model)

const button = document.getElementById("enviar")

button.addEventListener("click", function() {
    let cep = document.getElementById("cep_input").value
    const fetchData = async () => {
        const people = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const data = await people.json()
        console.log(data)
        return data
    }
    fetchData()
})