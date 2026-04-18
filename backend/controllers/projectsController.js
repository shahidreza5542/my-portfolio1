import ProjectModel from '../models/projectModel.js'

// ADD project
export const addProject = async (req, res) => {
    try {
        const { Title, Discreption, TopTitle, Image, link, tags } = req.body

        const project = new ProjectModel({
            Title,
            Discreption,
            TopTitle,
            Image,
            link,
            tags
        })

        const savedProject = await project.save()

        res.status(201).json({
            success: true,
            data: savedProject
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

// REMOVE project
export const removeProject = async (req, res) => {
    try {
        await ProjectModel.findByIdAndDelete(req.body.id)

        res.json({
            success: true,
            message: "Project removed"
        })

    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            message: error.message
        })
    }
}