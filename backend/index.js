import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/connectDB.js'
import projectRouter from './router/projectRoute.js'
import authRouter from './router/authRoute.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

connectDB()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// routes
app.use('/api/projects', projectRouter)
app.use('/api/auth', authRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})