import React from 'react'
import { useAppContext } from '../../context/context';

const Gallery = ({product}) => {
  const { size } = useAppContext();
  return (
    <div className='my-10'>
      {
        product.map(item => (
          <div key={item.id} className='flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:grid-rows-2'>
            <img src={size > 640 ? item.gallery.first.mobile : item.gallery.first.desktop} alt="" loading="lazy" className=' h-full rounded-md'/>
            <img src={item.gallery.third.mobile} alt="" loading="lazy" className=' sm:row-span-2 rounded-md'/>
            <img src={size > 640 ? item.gallery.second.mobile : item.gallery.first.desktop} alt="" loading="lazy" className='rounded-md h-full'/>
          </div>  
        ))
      }
    </div>
  )
}

export default Gallery
