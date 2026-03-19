import { Item } from "./Item.js";

export class Book extends Item {

    #author

    constructor(id, title, author) {
        if (!author) {
            return console.error("O autor não pode ser vazio")
        } else {
            super(id, title)
            this.#author = author
        }
    }
}