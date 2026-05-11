// const people = ["Ar", "Ney", "Ra", "He"]
import { connection } from "../database/db.js"

// export const getPeople = (req, res) => {
//     res.status(200).send(people)
// }

// export const createUser = (req, res) => {
//     const { name } = req.body

//     try {
//         people.push(name)
//         return res.status(200).send({ response: "Usuário registrado" }) 
//     } catch {
//         return res.status(500).send({ response: "Erro ao registrar usuário" })
//     }
// }

export const getPeople = (req, res) => {
    const users = connection.query("select * from user", (err, results) => {
        if (err) {
            return res.status(500).send({ response: "Ocorreu um erro10" })
        }

        return res.status(200).send(results)
    })
}

export const createUser = (req, res) => {
    const { name, email, password } = req.body

    try {
        const inserir = connection.query(
            "insert into user (name, email, password) values (?,?,?);",
            [name, email, password]
        )

        return res.status(200).send({ response: "Usuário registrado" }) 
    } catch {
        return res.status(500).send({ response: "Erro ao registrar usuário" })
    }
}