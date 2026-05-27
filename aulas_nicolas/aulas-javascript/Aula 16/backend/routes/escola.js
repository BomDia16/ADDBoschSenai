import express from 'express'
import { getPeople, createUser, updateUser, deleteUser, findUser } from '../controllers/EscolaController.js';
import { validateCreatePeca, validateGetPecaById, validateUpdatePeca } from '../middlewares/pecaMiddleware.js';

const router = express.Router();

router
    .put('/update/:id', updateUser)
    .get('/list', getPeople)
    .post('/create', createUser)
    .delete("/delete/:id", validateGetPecaById, deleteUser)
    .get('/find/:id', validateGetPecaById, findUser)

export default router