export function validateRegister(req, res, next) {
    const { nome, sobrenome, setor, funcao } = req.body

    if (!nome || nome.length < 3 || nome.trim() == "") {
        return res.status(400).send({ response: "Nome não pode ser menor do que 3 caracteres" })
    }

    if (!sobrenome || sobrenome.length < 3 || sobrenome.trim() == "") {
        return res.status(400).send({ response: "Sobrenome não pode ser menor do que 3 caracteres" })
    }

    if (!setor || setor.length < 3 || setor.trim() == "") {
        return res.status(400).send({ response: "Setor não pode ser menor do que 3 caracteres" })
    }

    if (!funcao || funcao.length < 3 || funcao.trim() == "") {
        return res.status(400).send({ response: "Funcao não pode ser menor do que 3 caracteres" })
    }

    next()
}

export function validateDelete(req, res, next) {
    const { id } = req.params

    if (!id || id.trim() == "") {
        return res.status(400).send({ response: "Parâmetro id obrigatório para deletar usuário" })
    }

    next()
}

export function validateUpdate(req, res, next) {
    const { nome, sobrenome, setor, funcao } = req.body
    const { id } = req.params

    if (!nome || nome.length < 3 || nome.trim() == "") {
        return res.status(400).send({ response: "Nome não pode ser menor do que 3 caracteres" })
    }

    if (!sobrenome || sobrenome.length < 3 || sobrenome.trim() == "") {
        return res.status(400).send({ response: "Sobrenome não pode ser menor do que 3 caracteres" })
    }

    if (!setor || setor.length < 3 || setor.trim() == "") {
        return res.status(400).send({ response: "Setor não pode ser menor do que 3 caracteres" })
    }

    if (!funcao || funcao.length < 3 || funcao.trim() == "") {
        return res.status(400).send({ response: "Funcao não pode ser menor do que 3 caracteres" })
    }

    if (!id || id.trim() == "") {
        return res.status(400).send({ response: "Parâmetro id obrigatório para atualizar usuário" })
    }

    next()
}

export function validateFindSetor(req, res, next) {
    const { setor } = req.params

    if (!setor || setor.trim() == "") {
        return res.status(400).send({ response: "Parâmetro setor obrigatório para atualizar usuário" })
    }

    next()
}