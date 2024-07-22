import React from 'react'

const About = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.02" className='w-full bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4.5vw] tracking-tight p-20'>
        Ochi is a strategic partner for fast-growing tech businesses that need to raise funds,
        sell products, explain complex ideas, and hire great people.
      </h1>
      <div className="w-full flex border-t-[3px] pt-7 mt-0 border-[#b2bd87]">
        <div className='w-1/2 p-20'>
          <h1 className='text-6xl -mt-24'>Our approach:</h1>
          <button className='flex uppercase gap-10 items-center  px-8 py-5 mt-5 bg-zinc-900 rounded-full text-white'>Read More
            <div className='w-2.5 h-2.5 mt-1 bg-zinc-100 rounded-full'></div>
          </button>
        </div>
        <div className='w-2/4 mr-20 mb-10 h-[70vh] rounded-2xl bg-[#bad264]'>
          <img className='rounded-2xl' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" />
        </div>
      </div>
    </div>
  )
}

export default About
