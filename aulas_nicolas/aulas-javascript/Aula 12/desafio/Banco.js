import { Admin } from './Admin.js'
import { User } from './User.js'

let admin = new Admin(1, "ijf9wejf", "jhnfge@omkj", "titiohjr")
console.log(admin.id)

let users = []

users.push(admin)

users.forEach(element => {
    console.log(element.exibirDados())
});