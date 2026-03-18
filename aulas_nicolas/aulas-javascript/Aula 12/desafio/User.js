export class User {
    #id
    #name
    #email
    #password
    #active

    constructor(id, name, email, password) {
        if (new.target !== User) {
            this.#id = id
            this.#name = name
            this.#email = email
            this.#password = password
            this.#active = true
        } else {
            console.error("Não pode instanciar esse classe diretamente")
        }
    }

    get id() {
        return this.#id
    }

    get name() {
        return this.#name
    }

    set name(valor) {
        return this.#name = valor
    }

    set password(valor) {
        return this.#password = valor
    }

    verificarSenhas(valor) {
        let valido = this.#password == valor ?  true : false

        return valido
    }

    get email() {
        return this.#email
    }

    set email(valor) {
        return this.#email = valor
    }

    setInactive() {
        return this.#active = false
    }

    setActive() {
        return this.#active = true
    }

    verificarAtivo() {
        let verificar = this.#active == true ? true : false
        return verificar
    }

    exibirDados() {
        return [this.#id, this.#name, this.#email, this.#active]
    }
}