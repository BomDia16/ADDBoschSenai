class Conta {
    #senha
    #agencia
    #n_conta
    #titular
    #saldo

    constructor(senha, agencia, n_conta, titular, saldo) {
        this.#agencia = agencia
        this.#n_conta = n_conta
        this.#saldo = saldo
        this.#senha = senha
        this.#saldo = saldo
        this.#titular = titular
    }

    get saldo() {
        return this.#saldo
    }

    depositar(n_conta, agencia, valor) {
        if (n_conta == this.#n_conta && agencia == this.#agencia) {
            if (valor <= 0) {
                return console.log("Valor insuficiente para depositar")
            }
            this.#saldo += valor
            console.log("Depositado " + valor + " reais, total é de " + this.#saldo);
        } else {
            console.log("Agência ou/e número da conta incorreto")
        }
    }

    sacar(n_conta, agencia, valor) {
        if (n_conta == this.#n_conta && agencia == this.#agencia) {
            if (valor > this.#saldo) {
                return console.log("Valor maior que o saldo")
            }
            this.#saldo -= valor
            console.log("Sacado " + valor + " reais, saldo é de " + this.#saldo);
        } else {
            console.log("Agência ou/e número da conta incorreto")
        }
    }
}

let artur = new Conta(123, 123, 123, "artur", 12)

artur.depositar(123,123,45)

console.log(artur.saldo)

artur.sacar(123,123,60)

console.log(artur.saldo)