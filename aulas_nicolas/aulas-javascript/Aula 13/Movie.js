import { Item } from "./Item.js";

export class Movie extends Item {
    #duration

    constructor(id, title, duration) {
        if (duration <= 0) {
            return console.error("A duração deve ser maior que 0")
        } else {
            super(id, title)
            this.#duration = duration
        }
    }
}