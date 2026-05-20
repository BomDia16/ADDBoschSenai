import { connection } from "../database/db.js"

export function validateCreatePeca(req, res, next) {
    const { nome_peca, codigo_peca, fornecedor, quantidade, preco_unitario, estoque } = req.body
    
    if (!nome_peca || (nome_peca.length < 100 && nome_peca > 3) || nome_peca.trim() == "") {
        return res.status(400).send({ response: "Nome de maneira incorreta" })
    }

    if (!codigo_peca || !fornecedor) {
        return res.status(400).send({ response: "Todos os campos são obrigatórios" })
    }

    if (!quantidade || quantidade <= 0) {
        res.status(400).send({ response: "Quantidade deve ser maior que 0" })
    }

    if (!preco_unitario || preco_unitario <= 0) {
        res.status(400).send({ response: "Preço deve ser maior que 0" })
    }

    if (!estoque || estoque <= 0) {
        res.status(400).send({ response: "Estoque deve ser maior que 0" })
    }

    const procurar = connection.query(
        "select count(nome_peca) from pecas where nome_peca = ?",
        [nome_peca]
    )

    if (procurar > 0) {
        res.status(400).send({ response: "Nome da peça já existe" })
    }

    next()
}

export function validateGetPecaById(req, res, next) {
    const { id } = req.params

    if (!id) {
        res.status(400).send({ response: "ID é obrigatório" })
    }

    next()
}

export function validateUpdatePeca(req, res, next) {
    const { nome_peca, codigo_peca, fornecedor, quantidade, preco_unitario, estoque } = req.body

    const { id } = req.params

    if (!id) {
        res.status(400).send({ response: "ID é obrigatório" })
    }
    
    if (!nome_peca || (nome_peca.length < 100 && nome_peca > 3) || nome_peca.trim() == "") {
        return res.status(400).send({ response: "Nome de maneira incorreta" })
    }

    if (!codigo_peca || !fornecedor) {
        return res.status(400).send({ response: "Todos os campos são obrigatórios" })
    }

    if (!quantidade || quantidade <= 0) {
        res.status(400).send({ response: "Quantidade deve ser maior que 0" })
    }

    if (!preco_unitario || preco_unitario <= 0) {
        res.status(400).send({ response: "Preço deve ser maior que 0" })
    }

    if (!estoque || estoque <= 0) {
        res.status(400).send({ response: "Estoque deve ser maior que 0" })
    }

    const procurar = connection.query(
        "select count(nome_peca) from pecas where nome_peca = ?",
        [nome_peca]
    )

    if (procurar > 0) {
        res.status(400).send({ response: "Nome da peça já existe" })
    }

    next()
}