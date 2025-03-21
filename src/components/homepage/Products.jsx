import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/context'
import img from '../../assets/images/pattern-circles.svg'
import zx7 from '../../assets/images/mobile/image-speaker-zx7.jpg'
import zx7D from '../../assets/images/image-speaker-zx7.jpg'
import zx9 from '../../assets/home/mobile/image-speaker-zx9.png'
import earphones from '../../assets/home/mobile/image-earphones-yx1.jpg'
import earphonesD from '../../assets/home/desktop/image-earphones-yx1.jpg'

const Products = () => {
    const navigate = useNavigate();
    const { size } = useAppContext()

    const handleNavigation = (productSlug) => {
        navigate(`/product/${productSlug}`);
        console.log(productSlug)
    };

  return (
    <div className='flex flex-col gap-10'>
        <div 
            className='circlesDiv h-fit w-full py-10 md:flex-row bg-[#d87c49] bg-center bg-cover rounded-xl px-5 md:justify-evenly flex flex-col gap-7 items-center text-center'
            style={{ backgroundImage: `url(${img})`}}
        >
            <img src={zx9} alt="" className='max-w-40 md:max-w-56 md:mb-0'/>
            <div className='max-w-80 flex flex-col gap-7 md:text-left'>
                <h1 className='text-3xl md:text-4xl font-semibold text-white md:max-w-48'>ZX9 SPEAKER</h1>
                <span className='text-gray-100'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</span>
                <button  onClick={() => handleNavigation('zx9-speaker')} className='text-white cursor-pointer bg-black py-2 px-7 w-fit mx-auto md:mx-0'>SEE PRODUCT</button>
            </div>    
        </div>
        <div className='flex flex-col py-22 gap-10 px-5 rounded-xl bg-center bg-cover md:px20' style={{ backgroundImage: `url(${size > 640 ? zx7D : zx7})` }}>
            <h1 className='text-2xl font-semibold'>ZX7 SPEAKER</h1>
            <button onClick={() => handleNavigation('zx7-speaker')}  className='text-black cursor-pointer border-2 border-black font-semibold py-2 px-7 w-fit'>SEE PRODUCT</button>
        </div>
        <div className='flex flex-col gap-5 sm:flex-row'>
            <img src={size > 640 ? earphonesD : earphones} alt="" className='rounded-xl sm:w-1/2'/>
            <div className='bg-gray-100 py-10 flex flex-col gap-10 rounded-xl px-5 sm:w-1/2'>
                <h1 className='text-2xl font-semibold'>YX1 EARPHONES</h1>
                <button onClick={() => handleNavigation('yx1-earphones')} className='text-black cursor-pointer border-2 w-fit border-black font-semibold py-2 px-7'>SEE PRODUCT</button>
            </div>
        </div>
    </div>
  )
}

export default Products