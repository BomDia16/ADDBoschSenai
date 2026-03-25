export class Veiculo {
    #id
    #marca
    #modelo
    #preco
    #disponivel

    constructor(id, marca, modelo, preco) {
        if (new.target != Veiculo) {
            this.#id = id
            this.#marca = marca
            this.#modelo = modelo
            this.#preco = preco
            this.#disponivel = true
        } else {
            return console.log("Essa classe não pode ser instanciada diretamente")
        }
    }

    getId() {
        return this.#id
    }

    getMarcaModelo() {
        return this.#marca, this.#modelo
    }

    getPreco() {
        return this.#preco
    }

    setPreco(value) {
        if (
            this.#disponivel &&
            !isNaN(value) &&
            value > 0
        ) {
            return this.#preco = value
        }

        return console.log("Valor não permitido ou o carro não está disponível para", this.#modelo)
    }

    getDisponivel() {
        return this.#disponivel
    }

    vender() {
        if (this.#disponivel) {
            this.#disponivel = false
        } else {
            console.log("Carro indisponível para venda")
        }
    }

    retornarAoEstoque() {
        if (!this.#disponivel) {
            this.#disponivel = true
        } else {
            console.log("Carro já está no estoque")
        }
    }

    exibirDados() {
        let dados = {
            id: this.#id,
            marca: this.#marca,
            modelo: this.#modelo,
            preco: this.#preco,
            disponivel: this.#disponivel,
        }

        return dados
    }
}