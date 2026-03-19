import { Admin } from './Admin.js'
import { Client } from './Client.js'

let admin = new Admin(1, "ijf9wejf", "jhnfge@omkj", "titiohjr")
let artur = new Client(2, "Artur", "artur@gkdlsfgma", "joskgjoeijrg")
console.log(admin.id)

export let users = []

users.push(admin)
users.push(artur)

users.forEach(element => {
    console.log(element.exibirDados())
});

admin.showAllUsers().forEach(element => {
    console.log(element.exibirDados())
});