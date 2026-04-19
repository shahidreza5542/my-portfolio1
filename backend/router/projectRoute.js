import express from 'express'
import { addProject, removeProject } from '../controllers/projectsController.js'


const projectRouter = express.Router()

projectRouter.post('/add', addProject)
projectRouter.post('/remove', removeProject)
projectRouter.get('/', async (req, res) => {
  try {
    const projects = await ProjectModel.find()
    res.json({ success: true, data: projects })
  } catch (err) {
    res.status(500).json({ success: false, message: err.message })
  }
})

export default projectRouter