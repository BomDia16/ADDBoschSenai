import initRoutes from './routes/routes.js'
import express from 'express'
import mysql from 'mysql2'
import cors from 'cors'
// const express = require('express')
// const mysql = require("mysql2")
// const cors = require("cors")

const app = express()

const port = 8080

// app.use(express.json())

initRoutes(app)

app.use(cors({
    origin: "*"
}))

app.listen(port, () => console.log(`Acesse: http://localhost:${port}/`))

// app.get('/', (req, res) => {
//     res.send("sfjsokjgojgk")
// })

// const connection = mysql.createConnection({
//     user: "root",
//     password: "root",
//     host: "localhost",
//     database: "loja",
//     port: 3307
// })

// if(connection){
//     console.log("Banco de dados conectado!")
// }

app.get('/', (req, res) => {
    return res.send("Servidor funcionando corretamente!")
})

app.get('/vendas', (req, res) => {
    connection.query("SELECT * FROM vendas", (err, results) => {
        if(err){
            return
        }
        console.log(results)
        res.status(200).send(results)
    })
})

app.get('/vendas/:id', (req, res) => {
    const { id } = req.params
    connection.query("SELECT * FROM vendas WHERE id = ?", 
        [id], 
        (err, results) => {
            if(err){
                return
            }
            return res.status(200).send(results[0])
    })
})

app.post('/registro', (req, res) => {
    const { produto, quantidade, preco_unitario, forma_pagamento, responsavel, categoria_produto } = req.body
    const valor_total = parseFloat(quantidade) * parseFloat(preco_unitario)
    // quantidade = parseFloat(quantidade)
    // preco_unitario = parseFloat(preco_unitario)

    connection.query("INSERT INTO vendas (produto, quantidade, preco_unitario, valor_total, forma_pagamento, responsavel, categoria_produto, data_venda) VALUES (?,?,?,?,?,?,?,CURDATE())",
        [produto, parseFloat(quantidade), parseFloat(preco_unitario), valor_total, forma_pagamento, responsavel, categoria_produto]
    )

    return res.status(201).send({ response: "Venda registrada com sucesso!"})
})

app.delete('/deletar/:id', (req, res) => {
    const { id } = req.params
    
    try {
        connection.query('delete from vendas where id = ?', [id])
        return res.status(200).send({message: 'Usuário deletado com sucesso!'})
    }
    catch (e) {
        return res.status(500).send({error: e})
    }
})

app.put('/atualizar/:id', (req, res) => {
    const { id } = req.params
    const { nome, email } = req.body
    try {
        connection.query('update usuario set nome = ?, email = ? where id = ?',
            [nome, email, id]
        )
        return res.status(200).send({ message: "Usuário atualizado com sucesso" })
    }
    catch (e) {
        return res.status(500).send({ error: e })
    }
})