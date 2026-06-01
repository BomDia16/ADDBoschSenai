import express, { response, Router } from 'express'
import { getFuncionarios, createFuncionario, updateFuncionario, deleteFuncionario, findFuncionario } from '../controllers/FuncionarioController.js';
import { validateRegister } from "../middlewares/funcionarioMiddleware.js"

const router = express.Router();

router

    .put('/update/:id', updateFuncionario)
    .get('/', getFuncionarios)
    .post('/', validateRegister, createFuncionario)
    .delete("/delete/:id", deleteFuncionario)
    .get('/find/:id', findFuncionario)

export default router