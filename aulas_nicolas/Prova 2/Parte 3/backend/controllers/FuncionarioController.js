import { connection } from "../database/db.js"

export const getFuncionarios = (req, res) => {
    const users = connection.query("select * from funcionarios", (err, results) => {
        if (err) {
            return res.status(500).send({ response: "Ocorreu um erro ao resgatar os funcionários" })
        }

        return res.status(200).send(results)
    })
}

export const createFuncionario = (req, res) => {
    const { nome, sobrenome, setor, funcao } = req.body

    try {
        const inserir = connection.query(
            "insert into funcionarios (nome, sobrenome, setor, funcao) values (?,?,?,?);",
            [nome, sobrenome, setor, funcao]
        )

        return res.status(201).send({ response: "Funcionário registrado com sucesso" })
    } catch {
        return res.status(500).send({ response: "Erro ao registrar funcionário" })
    }
}

export const updateFuncionario = (req, res) => {
    const { nome, sobrenome, setor, funcao } = req.body
    const { id } = req.params

    try {
        const atualizar = connection.query(
            "UPDATE funcionarios SET nome = ?, sobrenome = ?, setor = ?, funcao = ? WHERE id = ?",
            [nome, sobrenome, setor, funcao, id]
        )

        return res.status(200).send({ response: "Funcionário atualizado com sucesso" })
    } catch {
        return res.status(500).send({ response: "Erro ao atualizar o funcionário" })
    }
}

export const deleteFuncionario = (req, res) => {
    const { id } = req.params

    try {
        const deletar = connection.query(
            "DELETE FROM funcionarios WHERE id = ?",
            [id]
        )

        return res.status(200).send({ response: "Funcionário deletado com sucesso" })
    } catch {
        return res.status(500).send({ response: "Erro ao deletar o funcionário" })
    }
}

export const findSetor = (req, res) => {
    const { setor } = req.params

    try {
        const user = connection.query(
            'select * from funcionarios where setor = ?;',
            [setor],
            (err, results) => {
                if (err) {
                    return res.status(500).json({ error: "Erro ao buscar funcionários" });
                }
                if (results.length === 0) {
                    return res.status(404).json({ error: "Funcionários não encontrados nesse setor" });
                }
                return res.json(results);
            }
        )
    } catch {
        return res.status(500).send({ response: "Erro ao achar o setor" })
    }
}