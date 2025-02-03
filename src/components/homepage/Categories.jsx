import React from 'react'
import { Link } from 'react-router-dom';
import arrow from '../../assets/shared/icon-arrow-right.svg'
import headp from '../../assets/shared/image-headphones.png'
import earp from '../../assets/shared/image-earphones.png'
import speakers from '../../assets/shared/image-speakers.png'

const Categories = () => {

  return (
    <div className='flex py-24 flex-col gap-22 px-2 sm:px-5 md:px-10 lg:px-24 sm:flex-row sm:gap-10'>
        <div className='relative pt-24 bg-gray-100 mx-auto w-full pb-5 mt-7 rounded-md'>
            <img src={headp} alt="" className='absolute w-52 -top-22 -translate-x-1/2 left-1/2'/>
            <h1 className='font-semibold text-center'>HEADPHONES</h1>
            <Link to="/headphones" className='text-gray-400 font-semibold flex gap-2 items-center mt-3 justify-center'>SHOP <img src={arrow} alt="" className='h-3'/></Link>
        </div>
        <div className='relative pt-24 bg-gray-100 mx-auto w-full pb-5 mt-7 rounded-md'>
            <img src={speakers} alt="" className='absolute w-52 -top-22 -translate-x-1/2 left-1/2'/>
            <h1 className='font-semibold text-center'>SPEAKERS</h1>
            <Link to="/speakers" className='text-gray-400 font-semibold flex gap-2 items-center mt-3 justify-center'>SHOP <img src={arrow} alt="" className='h-3'/></Link>
        </div>
        <div className='relative pt-24 bg-gray-100 mx-auto w-full pb-5 mt-7 rounded-md'>
            <img src={earp} alt="" className='absolute w-52 -top-22 -translate-x-1/2 left-1/2'/>
            <h1 className='font-semibold text-center'>EARPHONES</h1>
            <Link to="/earphones" className='text-gray-400 font-semibold flex gap-2 items-center mt-3 justify-center'>SHOP <img src={arrow} alt="" className='h-3'/></Link>
        </div>
    </div>
  )
}

export default Categories
