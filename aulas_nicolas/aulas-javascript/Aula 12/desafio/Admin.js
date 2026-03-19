import { User } from "./User.js";
import {users} from './Banco.js'

export class Admin extends User {
    constructor(id, name, email, password) {
        super(id, name, email, password)
    }

    showAllUsers() {
        return users
    }
}