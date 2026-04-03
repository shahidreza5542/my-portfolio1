import React, { useRef } from 'react'
import logo from "/src/assets/Image_Ko_Animated_Eye_Movement_Banayein.mp4"
import { motion, useScroll, useTransform } from 'framer-motion';
import VideoSection from './component/VideoSection';

const About = () => {

  const textRef = useRef(null);

  // 🔥 Text Parallax
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start end", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], [60, -60]);

  const textX = {
    initial: { opacity: 0, x: 40 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const textYAnim = {
    initial: { opacity: 0, y: 40 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  return (
    <div
      id='about'
      className='w-full bg-[#0E0E0E] text-white flex flex-col lg:flex-row items-center gap-12 py-40 px-5 lg:px-20'
    >

      
      <div className='w-full lg:w-1/2'>
        <VideoSection logo={logo} />
      </div>

      
      <motion.div
        ref={textRef}
        style={{ y: yText }}
        className='w-full lg:w-1/2'
      >

        
        <motion.div
          variants={textX}
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
        >
          <p className='text-4xl md:text-5xl font-bold underline underline-offset-8'>
            USER_PROFILE
          </p>
        </motion.div>

        
        <motion.div
          variants={textX}
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          className='mt-10 space-y-3 text-[#C6C6C6]'
        >
          <p><span className='text-white'>NAME :</span> Shahid Reza</p>
          <p><span className='text-white'>ROLE :</span> Full-Stack Developer / UI Engineer</p>
          <p><span className='text-white'>STATUS :</span> Actively optimizing the web</p>
        </motion.div>

        {/* Description */}
        <motion.div
          variants={textYAnim}
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          className="mt-10 space-y-6 text-[#C6C6C6]"
        >

          {/* Quote */}
          <div className="flex gap-4 bg-black/40 p-5 items-center rounded-lg">
            <div className='w-0.5 h-full bg-white'></div>
            <p className="italic">
              "I approach every codebase as a living organism. My philosophy is rooted
              in technical precision, where minimalist design meets robust architecture."
            </p>
          </div>

          {/* Text */}
          <p>
            Specializing in high-performance backend systems and pixel-perfect frontend.
            I don’t just write code — I build experiences that feel fast, clean, and alive.
          </p>

        </motion.div>

      </motion.div>
    </div>
  )
}

export default About;