import React from 'react'

const SkillCard = ({ Title = '', Skills = [] }) => {
  return (
    <div className=' border-y border-l border-white/20 px-8 py-6 transition duration-300'>

      <h1 className='text-xs font-mono tracking-widest text-white/50 uppercase mb-4'>
        {Title}
      </h1>

      {Skills.map((Skill, index) => (
        <div key={index} className='mb-4 mt-10'>
          
          <div className='flex justify-between text-sm mb-1'>
            <p className='uppercase text-white/90'>{Skill.skill}</p>
            <p className='text-white/40'>{Skill.percent}</p>
          </div>

          {/* Progress Bar */}
          <div className='w-full h-1 bg-white/10 rounded mt-3'>
            <div
              className='h-0.5 bg-white rounded'
              style={{ width: Skill.percent }}
            />
          </div>

        </div>
      ))}

    </div>
  )
}

export default SkillCard