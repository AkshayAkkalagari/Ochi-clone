import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
      <div className='textstructure mt-40 px-20'>
        {["We Create","Eye Opening","Presentations"].map((item,index)=>{
            return <div className='masker'>
            <div className='w-fit flex items-center'>
                {index === 1 && (
                  <motion.div 
                    initial={{width:0}} 
                    animate={{width:"10vw"}} 
                    transition={{ease:[0.76, 0, 0.24, 1], duration:1}} 
                    className="mr-[1vw] rounded-md w-[10vw] h-[5vw] relative">
                      <img className='rounded-md' src='https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg'/>
                  </motion.div>
                )}
                <h1 className='flex items-center uppercase text-[6vw] leading-[6.5vw] tracking-tighter font-["Founders_Grotesk_X-Condensed"] font-light'>
                  {item}
                </h1>
            </div>
        </div>
        })}
      </div>
      <div className='border-t-2 border-zinc-800 mt-28 flex justify-between items-center py-5 px-20'>
        {["For Public and Private Companies","From The First Pitch To IPO"].map((item,index)=>(
            <p className='text-md font-light tracking-tight leading-none'>{item}</p>
        ))}
        <div className='start flex items-center gap-5'>
            <div className='px-5 py-2 border-[1px] border-zinc-400 font-light text-md uppercase rounded-full'>Start The Project</div>
            <div className='w-10 h-10 flex items-center justify-center border-[1px] border-zinc-400 rounded-full'>
                <span className='rotate-[45deg]'>
                <FaArrowUpLong/>
                </span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
