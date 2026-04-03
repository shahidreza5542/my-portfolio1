import React from 'react'
import GridPattern from './component/GridPattern'
import { IoMdArrowForward } from "react-icons/io";

const Home = () => {
  return (
    <div id='home' className='relative w-full flex justify-between md:py-40 py-40 md:px-15 px-5  bg-[#131313] text-white'>
      <GridPattern
        className="stroke-white/20 opacity-40"
      />
      <div>
        <div className='h-5 text-center w-74 bg-white/20 flex gap-2'>
          <div className='bg-white'>|</div>
          <p className='text-sm flex tracking-widest font-light uppercase font-mono'>System.Initialize(Developer)</p>
        </div>

        <div className='flex flex-col'>
          <h1 className='md:text-9xl text-7xl font-bold mt-5'>SHAHID <br /> REZA</h1>
          <div className='mt-7 flex gap-4 items-center md:text-2xl text-lg tracking-widest text-gray-300'> 
            <p><span className='text-gray-600'>//</span>  Building the future, one line at a time. </p>
            <div className='w-20 md:flex hidden bg-white outline-1'></div>
          </div>
          <button className='mt-20 hover:bg-white/80 flex gap-2 items-center bg-white w-60 h-15 text-md justify-center font-medium text-black text-center'><a href="#projects" className='w-full h-full p-0 text-center flex justify-center items-center gap-2'>EXECUTE_PROJECTS <IoMdArrowForward /> </a></button>
        </div>
      </div>

      <div className='absolute md:right-10 md:flex hidden'>
        <p className='text-[350px] font-bold text-white/10 left-1 right-0'>01</p>
      </div>
    </div>
  )
}

export default Home
