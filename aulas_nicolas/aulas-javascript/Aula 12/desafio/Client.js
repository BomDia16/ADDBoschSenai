import { User } from "./User.js";

export class Client extends User {
    constructor(id, name, email, password) {
        super(id, name, email, password)
    }
}