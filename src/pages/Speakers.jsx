import React,{ useState } from 'react'
import { products } from '../data/data.js'

const Speakers = () => {
  const [items, setItems] = useState(products.filter(items => items.category === "speakers"))
  return (
    <div className=' min-h-screen py-16 flex flex-col gap-10 px-2 sm:px-5 md:px-10 lg:px-24'>
      {
        items.map(item => (
          <div key={item.id} className='md:grid md:grid-cols-2 md:gap-7'>
            <img src={item.image.mobile} alt="" className='mx-auto max-w-[500px] w-full'/>
            <div className='py-8 flex px-4 flex-col gap-3 items-center md:items-start md:gap-4 md:justify-center lg:px-10 lg:gap-6'>
              {item.new && <span className='text-[#d87c49] md:text-lg'>NEW PRODUCT</span>}
              <h1 className='text-xl font-semibold md:text-3xl max-w-80'>{item.name}</h1>
              <p className='text-gray-500 text-center max-w-[500px] md:text-left'>{item.description}</p>
              <button  className='text-white bg-[#d87c49] w-fit font-semibold mt-2 px-8 py-2 cursor-pointer'>SEE PRODUCT</button>
            </div>
          </div>
        ))
      }
    </div> 
  )
}

export default Speakers