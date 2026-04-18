import jwt from "jsonwebtoken"

export const loginRequest = async (req, res) => {
  try {
    const { email, password } = req.body

    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(
        { email },
        process.env.JWT_SECRET || "secret123",
        { expiresIn: "7d" }
      )

      return res.json({
        success: true,
        message: "Login successful",
        token
      })
    }

    return res.json({
      success: false,
      message: "Invalid credentials"
    })

  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}