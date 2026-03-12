import { Animal } from './Animal.js'

class Pessoa extends Animal {
    constructor(nome, idade, email, peso) {
        super("Mamífero", peso)
        this.nome = nome
        this.idade = idade
        this.email = email
    }

    correr() {
        console.log(this.nome + " está correndo...")
    }
}

const tony_stark = new Pessoa("Tony Stark", 40, "tonystark@gmail.com", 90)
const neymar = new Pessoa("Neymar", 40000000000, "neymar@gmail.com", 95)
const cebolinha = new Pessoa("Cebolinha", 20, "cebolinha@gmail.com", 60)
tony_stark.andar()
console.log(cebolinha.idade)
neymar.correr()
neymar.comer()