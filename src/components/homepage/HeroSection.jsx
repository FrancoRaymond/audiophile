import React from 'react'

const HeroSection = () => {

  return (
    <div className={`homeHeroSection min-h-screen bg-cover bg-center flex flex-col items-center px-2 sm:px-5 md:px-10 lg:px-24 justify-center`}>
        <h1 className='text-gray-400 text-lg tracking-widest'>NEW PRODUCT</h1>
        <h2 className='text-5xl font-bold text-white flex text-center mt-5'>XX99 MARK || HEADPHONE</h2>
        <p className='text-gray-300 max-w-[330px] text-center text-lg mt-4'>Experience natural, lifelike audio and exceptionl build quality made for the passionate music enthusiast.</p>
        <button className='text-white bg-[#d87c49] font-semibold px-12 py-3 mt-4 cursor-pointer'>SEE PRODUCT</button>
    </div>
  )
}

export default HeroSection

