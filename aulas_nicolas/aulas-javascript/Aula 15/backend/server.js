const express = require('express')
const mysql = require("mysql2")
const cors = require("cors")

const app = express()

const port = 8090

app.use(express.json())

app.use(cors({
    origin: "*"
}))

const connection = mysql.createConnection({
    user: "root",
    password: "",
    host: "localhost",
    database: "aula_add",
    port: 3307
})

console.log(connection)

app.get('/', (req, res) => {
    return res.send('Servidor funcionando')
})

app.listen(port, () => {
    console.log("Servidor rodando em http://localhost:8090")
})