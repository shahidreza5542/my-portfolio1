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
      Title: "SYNAPSE DASHBOARD",
      Discreption: "A high-performance visualization tool for real-time neural network monitoring and optimization logic.",
      TopTitle: "NEURAL_NET_V1.EXE",
      tags: ["React", "DC.JS", "NODE"],
      Image: first
    },
    {
      Title: 'CRYPTX PROTOCOL',
      Discreption: 'End-to-end encrypted communication layer for decentralized applications with zero-knowledge proofs.',
      TopTitle: 'CIPHER_PROTOCOL.SH',
      tags: ['rust', 'wasam', 'grpc'],
      Image: sec
    },
    {
      Title: 'ONYX CORE OS',
      Discreption: 'A custom micro-kernel designed for low-latency IoT devices with a modular plugin architecture.',
      TopTitle: 'CIPHER_PROTOCOL.SH',
      tags: ['PYTHON', 'C++', 'DOCKER'],
      Image: third
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
      <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10 px-2'>
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
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects
