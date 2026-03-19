export class User {
    #id
    #name
    #email
    #password
    #active

    constructor(id, name, email, password) {
        if (new.target !== User) {
            if (name &&
                email.includes("@") &&
                password.length >= 6
            ) {
                this.#id = id
                this.#name = name
                this.#email = email
                this.#password = password
                this.#active = true
            } else {
                console.error("Dados inválidos, nome não pode ser vazio, email deve ter @ e password deve ter no mínimo 6 digitos")
            }
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
        if (valor != "") return this.#name = valor
        return "O nome não pode ser vazio"
    }

    set password(valor) {
        if (valor.includes("@")) return this.#password = valor
        return "O email deve conter @"
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

    set senha(valor) {
        if (valor.lenght >= 6) return this.#password = valor
        return "A senha deve ter mais de 6 digitos"
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