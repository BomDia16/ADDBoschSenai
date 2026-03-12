class Carro {
    constructor(nome, marca, ano) {
        this.nome = nome
        this.marca = marca
        this.ano = ano
    }

    andarFrente() {
        console.log(this.nome + " está andando para frente...")
    }

    andarTras() {
        console.log(this.nome + " está andando para trás...")
    }
}

const ferrari = new Carro("PuroSangue", "Ferrari", 2025)
const mustang = new Carro("Shelby", "Mustang", 2018)
const fiesta = new Carro("Fiesta", "Ford", 2013)

ferrari.andarFrente()
mustang.andarTras()