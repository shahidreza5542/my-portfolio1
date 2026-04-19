/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Marquee from './components/Marquee';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-surface selection:bg-primary selection:text-black">
      <CustomCursor />
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Marquee />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
