import React from 'react'
import det from '../../assets/shared/image-best-gear.jpg'

const Details = () => {
  return (
    <div className='flex flex-col gap-10 py-10 px-2 sm:px-5 md:px-10 pb-20 lg:px-24 text-center md:flex-row-reverse md:items-center md:justify-evenly'>
        <img src={det} alt="" className='max-w-80 mx-auto md:mx-0 rounded-md md:max-w-96'/>
        <div className='max-w-96 md:text-left mx-auto md:mx-0 md:max-w-lg'>
            <h1 className='text-black font-semibold text-3xl md:text-5xl'>BRINGING YOU THE <span className='text-[#d87c49]'>BEST</span> AUDIO GEAR</h1>
            <p className='text-gray-400 mt-10'>
              Located at the heart of New York City, Audiophile is the 
              premier store for high end headphones, earphones, speakers, and audio accessories. 
              We have a large showroom and luxury demonstration rooms available for you to browse and 
              experience a wide range of our products. Stop by our store to meet some of the fantastic 
              people who make Audiophile the best place to buy your portable audio equipment.
            </p> 
        </div>
    </div>
  )
}

export default Details
