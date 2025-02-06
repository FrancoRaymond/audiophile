import React from 'react'
import image1 from '../../assets/shared/desktop/image-xx99-mark-one-headphones.jpg'
import image2 from '../../assets/shared/desktop/image-xx59-headphones.jpg'
import image3 from '../../assets/shared/desktop/image-zx9-speaker.jpg'

const YouMayAlsoLike = () => {
  return (
    <div className='py-24 px-2 sm:px-5 md:px-10 lg:px-24'>
        <h1 className='text-2xl font-semibold mb-10 text-center'>YOU MAY ALSO LIKE</h1>
        <div className='flex flex-col gap-10 md:flex-row sm:justify-between items-center'>
            <div className='flex flex-col gap-7 w-fit'>
                <img src={image1} alt="" className='md:w-[80vw]'/>
                <div className='text-center'>
                    <h1 className='text-xl font-semibold'>XX99 MARK |</h1>
                    <button className='text-white bg-[#d87c49] font-semibold px-9 py-2 mt-4 cursor-pointer'>SEE PRODUCT</button>  
                </div>
            </div>
            <div className='flex flex-col gap-7 w-fit'>
                <img src={image2} alt="" className='md:w-[80vw]'/>
                <div className='text-center'>
                    <h1 className='text-xl font-semibold'>XX59</h1>
                    <button className='text-white bg-[#d87c49] font-semibold px-9 py-2 mt-4 cursor-pointer'>SEE PRODUCT</button>  
                </div>
            </div>
            <div className='flex flex-col gap-7 w-fit'>
                <img src={image3} alt="" className=' md:w-[80vw]'/>
                <div className='text-center'>
                    <h1 className='text-xl font-semibold'>ZX9 SPEAKER</h1>
                    <button className='text-white bg-[#d87c49] font-semibold px-9 py-2 mt-4 cursor-pointer'>SEE PRODUCT</button>  
                </div>
            </div>
        </div>
    </div>
  )
}

export default YouMayAlsoLike
