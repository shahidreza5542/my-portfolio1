import express from 'express'
import { addProject, removeProject } from '../controllers/projectsController.js'


const projectRouter = express.Router()

projectRouter.post('/add', addProject)
projectRouter.post('/remove', removeProject)


export default projectRouter