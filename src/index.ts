import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import cors from 'cors'
import { employee } from './routes/employee'

dotenv.config()
const app = express()
app.use(cors())
app.use(bodyParser.json())

const PORT = process.env.PORT || 9000

// Configure routes
app.use('/api/v1/employee', employee)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
