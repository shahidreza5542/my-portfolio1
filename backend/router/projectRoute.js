import express from 'express'
import { addProject, removeProject } from '../controllers/projectsController.js'


const projectRouter = express.Router()

projectRouter.post('/add', addProject)
projectRouter.post('/remove', removeProject)
router.get("/", async (req, res) => {
  const data = await ProjectModel.find()
  res.json({ success: true, data })
})

export default projectRouter