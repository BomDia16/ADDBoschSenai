import express, { response, Router } from 'express'
import { getPeople, createUser, updateUser, deleteUser, findUser } from '../controllers/PecaController.js';
import { validateCreatePeca, validateGetPecaById, validateUpdatePeca } from '../middlewares/pecaMiddleware.js';

const router = express.Router();

router
    .put('/update/:id', validateUpdatePeca, updateUser)
    .get('/list', getPeople)
    .post('/create', validateCreatePeca, createUser)
    .delete("/delete/:id", validateGetPecaById, deleteUser)
    .get('/find/:id', validateGetPecaById, findUser)

export default router