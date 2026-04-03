import React from 'react'
import { TbPointFilled } from "react-icons/tb";
import SkillCard from './component/SkillCard';
import { motion } from 'framer-motion';

const Skills = () => {

  const skills = [
    {
      title: "// FRONTEND CORE",
      items: [
        { skill: "HTML", percent: "95%" },
        { skill: "CSS", percent: "90%" },
        { skill: "JavaScript", percent: "98%" }
      ]
    },
    {
      title: "// FRAMEWORKS",
      items: [
        { skill: "React JS", percent: "75%" },
        { skill: "Next JS", percent: "60%" },
        { skill: "Tailwind CSS", percent: "90%" }
      ]
    },
    {
      title: "// UI & ANIMATION",
      items: [
        { skill: "Framer Motion", percent: "85%" },
        { skill: "Responsive Design", percent: "95%" },
        { skill: "UI/UX Basics", percent: "80%" }
      ]
    },
    {
      title: "// TOOLS",
      items: [
        { skill: "Git", percent: "90%" },
        { skill: "GitHub", percent: "95%" },
        { skill: "Figma", percent: "50%" }
      ]
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

  return (
    <div id='skills' className='w-full py-32 bg-[#0E0E0E] text-white md:px-20 px-6'>

      {/* Heading */}
      <motion.div
        variants={textX}
        initial='initial'
        whileInView="animate"
        viewport={{
          once: true,
        }}
      >
        <h1 className='uppercase md:text-5xl text-3xl font-bold'>
          Skill_stack
        </h1>

        <p className='flex items-center gap-1 mt-3 text-xs text-white/60'>
          <span className='text-white text-lg'><TbPointFilled /></span>
          Crafting clean & interactive UI experiences
        </p>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={fadeIn}
        initial='initial'
        whileInView="animate"
        viewport={{
          once: true,
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-12 border-r border-white/20"
        >
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