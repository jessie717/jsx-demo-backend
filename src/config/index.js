import mysql from 'mysql'
import dotEnv from 'dotenv'

dotEnv.config({ path: '.env.local' })

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME
})

connection.connect((err) => {
  if (err) {
    throw new Error(err)
  }
  console.log('db connect successful')
})

export default connection
