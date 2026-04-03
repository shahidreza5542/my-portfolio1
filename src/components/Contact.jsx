import React from 'react'
import GridPattern from './component/GridPattern'
import { easeIn, motion } from 'framer-motion'

const Contact = () => {

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
  return (
    <div id='contact' className='w-full flex justify-center items-center bg-[#131313] relative text-white py-20 px-4 md:px-10'>

      <GridPattern />

      <motion.div
        variants={fadeIn}
        initial='initial'
        whileInView="animate"
        viewport={{
          once: true,
        }}
        className='bg-[#131313]  relative border border-white/30 w-full max-w-3xl'>

        {/* Header */}
        <div className='border-b border-white/30 p-4 flex gap-2 items-center'>
          <div className='flex gap-2'>
            <div className='h-2 w-2 bg-red-500'></div>
            <div className='h-2 w-2 bg-yellow-500'></div>
            <div className='h-2 w-2 bg-green-500'></div>
          </div>
          <p className='text-xs font-thin text-white/90'>
            CONTACT_PROTOCOL.TERMINAL
          </p>
        </div>

        {/* Terminal Text */}
        <div className='mt-5 px-4 md:px-8'>
          <p className='font-medium flex flex-wrap gap-2 text-sm md:text-base tracking-widest font-mono'>
            shahid@terminal:~$
            <span className='text-white/80'>
              mail --to shahidreza660@gmail.com
            </span>
          </p>

          <p className='text-xs md:text-sm mt-2 text-white/80'>
            Initializing communication sequence...
          </p>
        </div>

        {/* Form */}
        <div className='px-4 md:px-8 py-6'>

          <form
            action="https://formsubmit.co/shahidreza660@gmail.com"
            method="POST"
            className='space-y-6'
          >

            {/* Hidden fields (important) */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Message from Portfolio" />

            {/* Name + Email */}
            <div className='flex flex-col md:flex-row gap-4'>

              <div className='flex flex-col w-full gap-2'>
                <label className='text-xs font-mono tracking-wider text-white/70'>
                  SENDER_NAME
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder='Your Name'
                  required
                  className='border border-white/30 bg-white/10 w-full h-10 px-3 text-sm focus:border-white outline-none'
                />
              </div>

              <div className='flex flex-col w-full gap-2'>
                <label className='text-xs font-mono tracking-wider text-white/70'>
                  SENDER_EMAIL
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder='email@example.com'
                  required
                  className='border border-white/30 bg-white/10 w-full h-10 px-3 text-sm focus:border-white outline-none'
                />
              </div>

            </div>

            {/* Message */}
            <div className='flex flex-col gap-2'>
              <label className='text-xs font-mono tracking-wider text-white/70'>
                ENCRYPTED_MESSAGE
              </label>

              <textarea
                name="message"
                placeholder='Type your message here...'
                required
                className='border border-white/30 bg-white/10 w-full h-32 p-3 text-sm resize-none focus:border-white outline-none'
              ></textarea>
            </div>

            {/* Button */}
            <button
              type='submit'
              className='uppercase w-full md:w-auto bg-white px-6 py-2 text-black text-sm font-medium hover:bg-gray-200 transition'
            >
              SEND MESSAGE
            </button>

          </form>

        </div>

      </motion.div>
    </div>
  )
}

export default Contact