import React from 'react'

function Cards() {
  return (
    <div className='flex gap-6 w-full h-screen bg-zinc-600 items-center px-10'>
      <div className='cardcontainer h-[55vh] w-1/2 '>
        <div className='card relative w-full rounded-xl h-full bg-[#004D43] flex items-center justify-center'>
            <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg'/>
            <button class="absolute px-2 py-1 rounded-full border-2 border-[#CDEA68] left-6 bottom-6 text-[#CDEA68]">&copy;2019-2022</button>
        </div>
      </div>
      <div className='cardcontainer flex gap-6 h-[55vh] w-1/2 '>
        <div className='card flex relative items-center justify-center w-1/2 rounded-xl h-full bg-[#212121]'>
            <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg'/>
            <button class="absolute px-2 py-1 rounded-full border-2 left-6 bottom-6 uppercase">Rating 5.0 on clutch</button>
        </div>
        <div className='card relative flex items-center justify-center w-1/2 rounded-xl h-full bg-[#212121]'>
            <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo003.png'/>
            <button class="absolute px-2 py-1 rounded-full border-2 left-6 bottom-6 uppercase">Business Bootcamp Alumni</button>
        </div>
      </div>
    </div>
  )
}

export default Cards
