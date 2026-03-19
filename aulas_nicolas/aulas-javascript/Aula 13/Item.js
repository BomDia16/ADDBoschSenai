export class Item {
    #id
    #title
    #available

    constructor(id, title) {
        if (new.target != Item) {
            if (!title) return console.error("Título não pode ser vazio")
            
            this.#id = id
            this.#title = title
            this.#available = true
        } else {
            return console.error("Essa classe não pode ser instanciada diretamente")
        }
    }

    getId() {
        return this.#id
    }

    getTitle() {
        return this.#title
    }

    setTitle(valor) {
        if (valor) {
            return this.#title = valor
        }
        return console.error("Título não pode ser vazio")
    }

    verifyAvailable() {
        return this.#available == true ? true : false
    }

    changeAvailable() {
        return this.#available == true ? this.#available = false : this.#available = true
    }

    showData() {
        return {
            id: this.#id,
            title: this.#title,
            available: this.#available
        }
    }
}