import React from 'react'

const SkillCard = ({
  Title = '',
  Skills = [
    {
      skill: '',
      percent: ''
    }
  ]
}) => {
  return (
    <div className='bg-[#131313] md:w-full  h-full border-r border-b border-t  border-white/30 px-10 py-8'>
      
      <h1 className='text-xs font-mono tracking-widest text-white/60 uppercase'>
        {Title}
      </h1>

      {Skills.map((Skill, index) => (
        <div key={index} className='mt-4'>
          <div className='flex justify-between text-sm'>
            <p className='uppercase text-white/90'>{Skill.skill}</p>
            <p className='uppercase text-white/40'>{Skill.percent}</p>
          </div>
        </div>
      ))}

    </div>
  )
}

export default SkillCard