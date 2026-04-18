import express from "express"
import { loginRequest } from "../controllers/authController.js"

const router = express.Router()

router.post("/login", loginRequest)

export default router