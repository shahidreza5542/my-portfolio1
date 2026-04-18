import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema({
    Title: { type: String, required: true },
    Discreption: { type: String, required: true },
    TopTitle: { type: String, required: true },
    Image: { type: String, required: true },
    link: { type: String, required: true },
    tags: { type: [String], required: true }
})

const ProjectModel = mongoose.model("Project", projectSchema)

export default ProjectModel