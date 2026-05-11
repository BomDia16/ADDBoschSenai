import mysql from 'mysql2'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const env = process.env

export const connection = mysql.createConnection({
    host: env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT
})