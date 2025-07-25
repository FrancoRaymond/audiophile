import React, { useState } from 'react'
import { motion } from "framer-motion";
import { products } from '../data/data.js'
import { Link } from 'react-router-dom';

const Headphones = () => {
  const [items, setItems] = useState(products.filter(items => items.category === "headphones"))

  return (
    <div className='mt-14'>
      <h1 className='text-white font-bold text-center py-5 text-lg md:text-2xl bg-black md:py-8 lg:text-4xl lg:py-14'>HEADPHONES</h1>
      <div className=' min-h-screen py-16 flex flex-col gap-10 px-2 sm:px-5 md:px-10 lg:px-24'>
        {
          items.map((item, index) => (
            <motion.div 
              key={item.id} 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9 }} 
              className={`items-center ${ index % 2 !== 0 ? 'evenItem md:flex md:flex-row-reverse' : 'md:grid md:grid-cols-2 md:gap-7' }`}
            >
              <img src={item.image.mobile} alt="" loading="lazy" className='mx-auto max-w-[500px] w-full lg:mx-0'/>
              <div className='py-8 flex flex-col gap-3 items-center md:items-start md:gap-4 md:justify-center lg:px-10 lg:gap-6'>
                {item.new && <span className='text-[#d87c49] md:text-lg'>NEW PRODUCT</span>}
                <h1 className='text-xl font-semibold md:text-3xl max-w-80'>{item.name}</h1>
                <p className='text-gray-500 text-center max-w-[500px] md:text-left'>{item.description}</p>
                <Link to={`/product/${item.slug}`}>
                  <button className='text-white bg-[#d87c49] w-fit font-semibold mt-2 px-8 py-2 cursor-pointer'>SEE PRODUCT</button>
                </Link>
              </div>
            </motion.div>
          ))
        }
      </div> 
    </div>
  )
}

export default Headphones
