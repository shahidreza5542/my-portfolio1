import React, { useState } from 'react'
import axios from 'axios'

const Admin = () => {
    const [dark, setDark] = useState(true)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [token, setToken] = useState(null)

    const [form, setForm] = useState({
        Title: "",
        Discreption: "",
        TopTitle: "",
        Image: "",
        link: "",
        tags: ""
    })

    const [id, setId] = useState("")

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const login = async () => {
        try {
            const res = await axios.post(`${import.meta.env.VITE_BACKEND_PATH}/api/auth/login`, {
                email,
                password
            })

            if (res.data.success) {
                setToken(res.data.token)
                alert("Login Success 🚀")
            } else {
                alert(res.data.message)
            }

        } catch (error) {
            console.log(error)
        }
    }

    const addProject = async () => {
        try {
            const res = await axios.post(
                `${import.meta.env.VITE_BACKEND_PATH}/api/projects/add`,
                {
                    ...form,
                    tags: form.tags.split(",").map(tag => tag.trim())
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )

            alert("Project Added 🚀")
            console.log(res.data)

        } catch (error) {
            console.log(error)
        }
    }

    const deleteProject = async () => {
        try {
            const res = await axios.post(
                `$${import.meta.env.VITE_BACKEND_PATH}/api/projects/remove`,
                { id },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )

            alert("Project Deleted 🗑️")
            console.log(res.data)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={`${dark ? "bg-black text-white" : "bg-white text-black"} min-h-screen transition-all duration-300 px-6 py-8`}>

            {/* HEADER */}
            <div className="flex justify-between items-center mb-10">
                <h1 className="text-xl font-light tracking-widest">ADMIN</h1>

                <button
                    onClick={() => setDark(!dark)}
                    className="border px-4 py-2 text-xs tracking-widest hover:opacity-70 transition"
                >
                    {dark ? "LIGHT" : "DARK"}
                </button>
            </div>

            {/* LOGIN */}
            {!token && (
                <div className="max-w-md mx-auto space-y-4">

                    <input
                        className="w-full bg-transparent border border-gray-500/30 p-3 text-sm outline-none focus:border-white transition"
                        placeholder="EMAIL"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        className="w-full bg-transparent border border-gray-500/30 p-3 text-sm outline-none focus:border-white transition"
                        placeholder="PASSWORD"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                        onClick={login}
                        className="w-full border border-white/20 py-3 text-sm tracking-widest hover:bg-white hover:text-black transition"
                    >
                        LOGIN
                    </button>

                </div>
            )}

            {/* DASHBOARD */}
            {token && (
                <div className="grid md:grid-cols-2 gap-10 mt-10">

                    {/* ADD */}
                    <div className="space-y-3 border border-white/10 p-6">

                        <h2 className="text-sm tracking-widest mb-4">ADD PROJECT</h2>

                        {Object.keys(form).map((key) => (
                            <input
                                key={key}
                                name={key}
                                placeholder={key.toUpperCase()}
                                onChange={handleChange}
                                className="w-full bg-transparent border border-white/10 p-3 text-xs outline-none focus:border-white transition"
                            />
                        ))}

                        <button
                            onClick={addProject}
                            className="w-full mt-3 border border-white/20 py-2 text-xs tracking-widest hover:bg-white hover:text-black transition"
                        >
                            ADD
                        </button>

                    </div>

                    {/* REMOVE */}
                    <div className="space-y-3 border border-white/10 p-6">

                        <h2 className="text-sm tracking-widest mb-4">REMOVE PROJECT</h2>

                        <input
                            placeholder="PROJECT ID"
                            onChange={(e) => setId(e.target.value)}
                            className="w-full bg-transparent border border-white/10 p-3 text-xs outline-none focus:border-white transition"
                        />

                        <button
                            onClick={deleteProject}
                            className="w-full border border-red-500/30 py-2 text-xs tracking-widest hover:bg-red-500 hover:text-black transition"
                        >
                            DELETE
                        </button>

                    </div>

                </div>
            )}

        </div>
    )
}

export default Admin