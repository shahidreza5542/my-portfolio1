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

router.get('/', async (req, res) => {
  try {
    const projects = await ProjectModel.find()
    res.json({ success: true, data: projects })
  } catch (err) {
    res.status(500).json({ success: false, message: err.message })
  }
})

// routes
app.use('/api/projects', projectRouter)
app.use('/api/auth', authRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})