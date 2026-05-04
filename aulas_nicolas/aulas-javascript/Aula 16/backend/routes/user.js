import express, { response, Router } from 'express'

const router = express.Router();
const users = ['fgkjnd']

router
    .get('/users', (req, res) => {
        res.send(users)
    })
    .post('/users', (req, res) => {
        const { name, lastname } = req.body
        users.push({ name, lastname })
        return res.status(200).send({response: `Usuário ${name} ${lastname} registrado com sucesso!`})
    })

export default router