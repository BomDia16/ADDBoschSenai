import express, { response, Router } from 'express'
import { getFuncionarios, createFuncionario, updateFuncionario, deleteFuncionario, findSetor } from '../controllers/FuncionarioController.js';
import { validateDelete, validateFindSetor, validateRegister, validateUpdate } from "../middlewares/funcionarioMiddleware.js"

const router = express.Router();

router

    .put('/:id', validateUpdate, updateFuncionario)
    .get('/', getFuncionarios)
    .post('/', validateRegister, createFuncionario)
    .delete("/:id", validateDelete, deleteFuncionario)
    .get('/:setor', validateFindSetor, findSetor)

export default router