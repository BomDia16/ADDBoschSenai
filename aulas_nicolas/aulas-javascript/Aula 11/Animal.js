export class Animal {
    constructor(tipo, peso) {
        this.tipo = tipo
        this.peso = peso
    }

    andar() {
        console.log(this.nome + " está andando...")
    }

    comer() {
        console.log(this.nome + " está comendo...")
    }
}