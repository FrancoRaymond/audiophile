import React from 'react'

const Features = ({product}) => {
  return (
    <div>
      {
        product.map(item => (
            <div key={item.id} className='py-7 '>
              <div>
                <h2 className='text-xl font-semibold text-black text-left'>FEATURES</h2>
                <p className='text-gray-500 mt-5'>{item.features}</p>
              </div>
                <div className='mt-12'>
                    <h2 className='text-xl font-semibold text-black text-left mb-5'>IN THE BOX</h2>
                    {
                      item.includes.map((addon, i) => (
                          <div key={i} className=''>
                              <div className='flex gap-5 mt-1.5'>
                                  <span className='text-[#d87c49] font-semibold'>{addon.quantity}x</span>
                                  <span className='text-gray-500'>{addon.item}</span>
                              </div>
                          </div>
                      ))
                    }
                </div>
            </div>
        ))
      }
    </div>
  )
}

export default Features
