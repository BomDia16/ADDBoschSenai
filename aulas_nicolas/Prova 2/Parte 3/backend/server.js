import initRoutes from './routes/routes.js'
import express from 'express'
import mysql from 'mysql2'
import cors from 'cors'

const app = express()

const port = 8000

app.use(cors())

initRoutes(app)

app.listen(port, () => console.log(`Acesse: http://localhost:${port}/`))