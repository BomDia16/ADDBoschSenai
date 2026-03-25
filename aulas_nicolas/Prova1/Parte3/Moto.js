import { Veiculo } from "./Veiculo.js";

export class Moto extends Veiculo {
    #cilindradas

    constructor(id, marca, modelo, preco, cilindradas) {
        if (cilindradas > 50 && cilindradas < 2000) {
            super(id, marca, modelo, preco)
            this.#cilindradas = cilindradas
        } else {
            return console.error("Cilindradas deve estar no intervalo de 50 e 2000")
        }
    }
}