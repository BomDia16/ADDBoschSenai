class Animal {
    #nome_cientifico
    #peso
    #alimentacao
    #locomocao

    constructor(nome_cientifico, peso, alimentacao, locomocao) {
        this.#nome_cientifico = nome_cientifico
        this.#peso = peso
        this.#alimentacao = alimentacao
        this.#locomocao = locomocao
    }

    emitirSom() {
        console.log("Emitindo som...")
    }

    locomover() {
        console.log("Locomovendo...")
    }
}

class Cachorro extends Animal {

    constructor(nome_cientifico, peso, alimentacao, locomocao) {
        super(nome_cientifico, peso, alimentacao, locomocao)
    }

    emitirSom() {
        console.log("Cachorro está latindo")
    }
}

class Gato extends Animal {

}

let cachorro = new Cachorro("canis", 4, "pássaro", "4 patas")

cachorro.emitirSom()