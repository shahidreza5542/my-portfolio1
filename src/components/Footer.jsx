import React from 'react'

const Footer = () => {
  return (
    <section className='bg-[#0E0E0E] border-t-[0.5px] border-white/30 w-full py-10 px-5 text-white md:flex md:justify-between justify-center uppercase '>
      <div>
        <p className='text-xs text-white/80 tracking-wide font-mono'>© 2026 SHAHID REZA // COMPILED SUCCESSFULLY</p>
      </div>
      <div>
        <ul className='flex md:mt-0 mt-3 justify-center gap-5 underline underline-offset-7 text-xs text-white/80 hover:text-white/95'>
          <li><a href="#">GITHUB</a></li>
          <li><a href="#">LINKEDIN</a></li>
          <li><a href="#">TWITTER</a></li>
        </ul>
      </div>
    </section>
  )
}

export default Footer
