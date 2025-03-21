import React from 'react'
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleNavigation = (productSlug) => {
    navigate(`/product/${productSlug}`);
};

  return (
    <div className={`homeHeroSection min-h-screen bg-cover bg-center justify-center flex flex-col px-2 sm:px-5 md:px-10 lg:px-24`}>
      <div className='md:text-left text-center md:mx-0 mx-auto'>
        <h1 className='text-gray-400 text-lg tracking-widest '>NEW PRODUCT</h1>
        <h2 className='text-5xl font-bold text-white flex mt-5 max-w-80'>XX99 MARK || HEADPHONE</h2>
        <p className='text-gray-300  text-lg mt-4 max-w-80'>Experience natural, lifelike audio and exceptionl build quality made for the passionate music enthusiast.</p>
        <button onClick={() => handleNavigation('xx99-mark-two-headphones')} className='text-white bg-[#d87c49] font-semibold px-12 py-3 mt-4 cursor-pointer'>SEE PRODUCT</button>  
      </div>
    </div>
  )
}

export default HeroSection