import React from 'react'
import GridPattern from './component/GridPattern'
import Card from './component/Card'
import first from "/src/assets/1.png"
import sec from "/src/assets/2.png"
import third from "/src/assets/3.png"
import { easeIn, motion } from 'framer-motion'

const Projects = () => {
  const Cards = [
    {
      Title: "ZYRO AI BUILDER",
      Discreption: "An AI-powered SaaS platform that generates modern websites instantly using intelligent prompts and dynamic UI rendering.",
      TopTitle: "AI_WEB_GEN_V1.EXE",
      tags: ["React", "AI API", "Tailwind", "PayPal"],
      Image: first,
      link: "https://zyro-gamma.vercel.app/"
    },
    {
      Title: "DEVHIVE BLOG",
      Discreption: "A scalable developer-focused blogging platform with seamless content management and fast, responsive UI experience.",
      TopTitle: "CONTENT_ENGINE.SYS",
      tags: ["React", "Appwrite", "Tailwind"],
      Image: sec,
      link: "https://devhive.qzz.io/"
    },
    {
      Title: "TUBEIQ ANALYTICS",
      Discreption: "An AI-powered YouTube optimization tool for generating thumbnails, descriptions, and deep performance insights.",
      TopTitle: "AI_ANALYTICS_CORE.AI",
      tags: ["React", "Gemini API", "AI APIs", "Tailwind"],
      Image: third,
      link: "https://tubeiq.qzz.io/"
    }
  ]
  const fadeIn = {
    initial: {
      opacity: 0,
      y: 100
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05,
        ease: "easeOut",
        duration: 0.8
      }
    }
  }

  const textX = {
    initial: {
      opacity: 0,
      x: -40
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.05,
        ease: "easeOut",
        duration: 0.8
      }
    }
  }

  const textplusX = {
    initial: {
      opacity: 0,
      x: 40
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.05,
        ease: "easeOut",
        duration: 0.8
      }
    }
  }



  return (
    <div id='projects' className='relative w-full py-30 md:px-5 lg:px-20 px-2 bg-[#131313] text-white'>
      <GridPattern />
      <div>

        <div className='flex justify-between'>
          <motion.div
            variants={textX}
            initial='initial'
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className='flex flex-col gap-2'>
            <h1 className='uppercase md:text-5xl text-3xl font-bold'>PROJECT_LOGS</h1>
            <p className='text-sm tracking-widest text-white/70 font-mono uppercase'>Listing: 03 Active Repositories</p>
          </motion.div>

          <motion.div
            variants={textplusX}
            initial='initial'
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            <h1 className='upercase md:flex hidden mt-14 text-[#7D7D7D] tracking-widest text-sm font-mono'>TIMESTAMP: 2024.11.08_14:22:01</h1>
          </motion.div>
        </div>

        <div className='border-b border-white/40 mt-5'></div>

      </div>
      <div className='sm:flex md:grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10 px-2 flex flex-col justify-center items-center'>
        {Cards.map((card, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            initial='initial'
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            <Card
              Title={card.Title}
              Discreption={card.Discreption}
              TopTitle={card.TopTitle}
              Image={card.Image}
              tags={card.tags}
              link={card.link}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects
