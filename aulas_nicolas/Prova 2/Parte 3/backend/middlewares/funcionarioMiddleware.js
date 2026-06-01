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