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
    const { name, email, password } = req.body
    const { id } = req.params

    try {
        const atualizar = connection.query(
            "UPDATE user SET name = ?, email = ?, password = ? WHERE id = ?",
            [name, email, password, id]
        )

        return res.status(200).send({ response: "Usuário atualizado com sucesso" })
    } catch {
        return res.status(500).send({ response: "Erro ao atualizar o usuário" })
    }
}

export const deleteFuncionario = (req, res) => {
    const { id } = req.params

    try {
        const deletar = connection.query(
            "DELETE FROM user WHERE id = ?",
            [id]
        )

        return res.status(200).send({ response: "Usuário deletado com sucesso" })
    } catch {
        return res.status(500).send({ response: "Erro ao deletar o usuário" })
    }
}

export const findFuncionario = (req, res) => {
    const { id } = req.params

    try {
        const user = connection.query(
            'SELECT * FROM user WHERE id = ?',
            [id],
            (err, results) => {
                if (err) {
                    return res.status(500).json({ error: "Erro ao buscar usuário" });
                }
                if (results.length === 0) {
                    return res.status(404).json({ error: "Usuário não encontrado" });
                }
                return res.json(results[0]);
            }
        )
    } catch {
        return res.status(500).send({ response: "Erro ao achar o usuário" })
    }
}