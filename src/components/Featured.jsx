import { motion, useAnimation } from 'framer-motion'
import { Power4 } from 'gsap';
import React, { useState } from 'react'

function Featured() {
    const cards = [useAnimation(), useAnimation()];

    const handleHover=(index)=>{
        cards[index].start({y:"0"})
    }

    const handleHoverEnd=(index)=>{
        cards[index].start({y:"100%"})
    }

  return (
    <div className='w-full py-20 bg-zinc-600'>
        <div className='w-full px-20 border-b-[1px] pb-10 border-zinc-900'>
            <h1 className='text-7xl font-["Neue_Montreal"] tracking-tight'>Featured Projects</h1>
        </div>
        <div className='px-20'>
            <div className='Cards flex gap-10 cards w-full mt-10'>
                <motion.div onHoverStart={()=>handleHover(0)} onHoverEnd={()=> handleHoverEnd(0)} className='Cardcontainer relative w-1/2 h-[70vh]'>
                    <h1 className='absolute flex text-[#a4c724] overflow-hidden font-semibold left-full -translate-x-1/3 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tight text-8xl'>
                        {"FYDE".split('').map((item,index)=>(
                            <motion.span 
                                initial={{y:"100%"}} 
                                animate={cards[0]} 
                                transition={{ease: [0.22, 1, 0.36, 1], delay: index*.05}}
                                className='inline-block'
                            >
                                {item}
                            </motion.span>
                        ))}
                    </h1>
                    <div className='Card w-full h-full rounded-xl overflow-hidden'>
                        <img className='w-full h-full bg-cover' src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png' />
                    </div>
                </motion.div>
                <motion.div onHoverStart={()=>handleHover(1)} onHoverEnd={()=> handleHoverEnd(1)} className='Cardcontainer relative w-1/2 h-[70vh]'>
                <h1 className='absolute flex overflow-hidden text-[#a4c724] font-semibold right-full translate-x-1/3 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tight text-8xl'>
                    {"VISE".split('').map((item,index)=>(
                        <motion.span 
                        initial={{y:"100%"}} 
                        animate={cards[1]} 
                        transition={{ease: [0.22, 1, 0.36, 1], delay: index*.05}}
                        className='inline-block'
                    >
                        {item}
                    </motion.span>
                    ))}
                </h1>
                    <div className='Card w-full h-full rounded-xl overflow-hidden'>
                        <img className='w-full h-full' src='https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg' />
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Featured
