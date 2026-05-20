import express, { response, Router } from 'express'
import { getPeople, createUser, updateUser, deleteUser, findUser } from '../controllers/UserController.js';
import { validateRegister } from "../middlewares/userMiddleware.js"

const router = express.Router();
const users = ['Gui', 'Ar', "He", 'Ra']

router
    // .get('/users', (req, res) => {
    //     res.send(users)
    // })
    // .post('/users', (req, res) => {
    //     const { name, lastname } = req.body

    //     try {
    //         users.push({ name, lastname })
    //         return res.status(200).send({response: `Usuário ${name} ${lastname} registrado com sucesso!`})
    //     } catch {
    //         return res.status(500).send({response: `Erro ao registrar o usuário!`})
    //     }
    // })
    // .delete('/users/:id', (req, res) => {
    //     const { id } = req.params

    //     try {
    //         users.splice(parseInt(id), 1)
    //         return res.status(200).send({response: `Usuário com id ${id} deletado com sucesso!`})
    //     } catch {
    //         return res.status(500).send({response: `Erro ao deletar o usuário!`})
    //     }
    // })
    // .put('/users/:id', (req, res) => {
    //     const { id } = req.params
    //     const { name } = req.body
        
    //     try {
    //         users[parseInt(id)] = name
    //         return res.status(200).send({response: `Usuário com id ${id}, ${name} atualizado com sucesso!`})
    //     } catch {
    //         return res.status(500).send({response: `Erro ao atualizar o usuário!`})
    //     }
    // })

    .put('/update/:id', updateUser)
    .get('/users', getPeople)
    .post('/users', validateRegister, createUser)
    .delete("/delete/:id", deleteUser)
    .get('/find/:id', findUser)

export default router