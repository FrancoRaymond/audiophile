import React from 'react'
import data from '../../assets/data/data.json'


const HeroSection = () => {

  return (
    <div className={`homeHeroSection min-h-screen bg-cover bg-center flex flex-col items-center justify-center`}>
        <h1 className='text-gray-400 text-lg tracking-widest'>NEW PRODUCT</h1>
        {
            console.log(data.find(item => item.name.includes('XX99 MARK ')))
        }
      
    </div>
  )
}

export default HeroSection

