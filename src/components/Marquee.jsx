import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.02" className='w-full py-16 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
      <div className='text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap'>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{repeat:Infinity ,ease:"linear", duration:10}} className='text-[18vw] pr-5 leading-none font-["Founders_Grotesk_X-Condensed"] uppercase  font-semibold'>We are Ochi</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{repeat:Infinity ,ease:"linear", duration:10}} className='text-[18vw] pr-5 leading-none font-["Founders_Grotesk_X-Condensed"] uppercase  font-semibold'>We are Ochi</motion.h1>
      </div>
    </div>
  )
}

export default Marquee
