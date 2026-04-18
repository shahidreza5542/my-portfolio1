import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Skills from "./components/Skills"
import Admin from "./components/component/Admin"

function App() {
  return (
    <BrowserRouter>


      <Routes>
        <Route path="/admin" element={<Admin />} />

        <Route path="/" element={
          <>
            <Navbar />
            <Home />
            <About />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
          </>
        } />


      </Routes>

    </BrowserRouter>
  )
}

export default App