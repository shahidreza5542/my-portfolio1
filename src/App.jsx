import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Lenis from 'lenis';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // smoothness
      smoothWheel: true,
      smoothTouch: false,
      easing: (t) => 1 - Math.pow(1 - t, 4), // extra smooth
    });

    let rafId;

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // 🔥 Sync with browser scroll (important for framer)
    lenis.on('scroll', () => {
      // force update scroll-based animations
      document.documentElement.style.scrollBehavior = "auto";
    });

    // cleanup
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Navbar />

      <div className='relative'>
        <Home />
      </div>

      <div>
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App;