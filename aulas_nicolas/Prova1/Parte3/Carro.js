import { Veiculo } from "./Veiculo.js";

export class Carro extends Veiculo {
    #portas

    constructor(id, marca, modelo, preco, portas) {
        if (portas > 0) {
            super(id, marca, modelo, preco)
            this.#portas = portas
        } else {
            return console.error("Quantidade de portas deve ser um valor númerico maior que 0")
        }
    }
}