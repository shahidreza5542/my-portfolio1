import React from 'react'
import { TbPointFilled } from "react-icons/tb";
import SkillCard from './component/SkillCard';
import { easeIn, motion } from 'framer-motion';


const Skills = () => {
  const skills = [
    {
      title: "// FRONTEND",
      items: [
        { skill: "REACT_JS", percent: "95%" },
        { skill: "NEXT_JS", percent: "90%" },
        { skill: "TAILWIND", percent: "98%" },
        { skill: "TYPESCRIPT", percent: "85%" },
        { skill: "WEBGL", percent: "70%" }
      ]
    },
    {
      title: "// BACKEND",
      items: [
        { skill: "NODE_JS", percent: "92%" },
        { skill: "PYTHON", percent: "88%" },
        { skill: "GO_LANG", percent: "75%" },
        { skill: "POSTGRES", percent: "90%" },
        { skill: "REDIS", percent: "80%" }
      ]
    },
    {
      title: "// DEVOPS",
      items: [
        { skill: "DOCKER", percent: "85%" },
        { skill: "KUBERNETES", percent: "65%" },
        { skill: "AWS_CLOUD", percent: "80%" },
        { skill: "CI_CD", percent: "90%" },
        { skill: "TERRAFORM", percent: "70%" }
      ]
    },
    {
      title: "// TOOLS",
      items: [
        { skill: "NEOVIM", percent: "99%" },
        { skill: "GIT_CLI", percent: "95%" },
        { skill: "TMUX", percent: "85%" },
        { skill: "FIGMA", percent: "75%" },
        { skill: "POSTMAN", percent: "90%" }
      ]
    }
  ]

  const fadeIn = {
    initial: {
      opacity: 0,
      y: 100,
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

  const textY = {
    initial: {
      opacity: 0,
      y: 40
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

  return (
    <div id='skills' className='w-full py-40 bg-[#0E0E0E] text-white md:px-25 px-8'>
      <motion.div
        variants={textY}
        initial='initial'
        whileInView="animate"
        viewport={{
          once: true,
        }}
      >
        <h1 className='uppercase md:text-5xl text-3xl font-bold'>SKILL_STACK</h1>
        <p className='flex items-center gap-1 mt-3 text-xs tracking-tighter text-white/70'><span className='text-white text-lg'><TbPointFilled /></span> LIVE_SYSTEM_READOUT: 100% OPERATIONAL</p>
      </motion.div>
      <motion.div
        variants={fadeIn}
        initial='initial'
        whileInView="animate"
        viewport={{
          once: true,
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-15 border-l border-white/30">
        {skills.map((group, index) => (
          <SkillCard
            key={index}
            Title={group.title}
            Skills={group.items}
          />
        ))}
      </motion.div>

    </div>
  )
}

export default Skills
