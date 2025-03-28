import React from 'react'
import { useAppContext } from '../context/context'

const CheckoutCart = () => {
  const { cart, formatCurrency } = useAppContext()
  const total = cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0)
  const vatRate = 0.15;
  const vatAmount = total * vatRate;
  const shipping = 250

  return (
    <div className='md:max-w-72 w-full bg-white min-h-fit rounded-md p-5'>
      <h1 className='font-semibold'>SUMMARY</h1>
      <div>
        <div className='flex flex-col gap-3 mt-5'>
          {
            cart.map(item => (
              <div key={item.id} className='flex gap-4 items-center justify-between'>
                <img src={item.image.mobile} alt="" className='h-14 w-14 rounded-md'/>
                <div className='grow'>
                  <h1 className='font-semibold'>{item.name}</h1>
                  <h2 className='text-gray-400 font-medium'>{formatCurrency(item.price)}</h2>
                </div>
                <p className='text-gray-400 font-medium'>x{item.quantity}</p>
              </div>
            ))
          }
        </div>
        <div className='flex justify-between items-center mt-5 font-medium'>
          <span className='text-gray-400'>TOTAL</span>
          <span className='font-semibold'>{formatCurrency(total)}</span>
        </div>
        <div className='flex justify-between items-center mt-1'>
          <span className='text-gray-400'>SHIPPING</span>
          <span className='font-semibold'>{formatCurrency(shipping)}</span>
        </div>
        <div className='flex justify-between items-center mt-1'>
          <span className='text-gray-400'>VAT (INCLUDED)</span>
          <span className='font-semibold'>{formatCurrency(vatAmount)}</span>
        </div>
        <div className='flex justify-between items-center mt-5'>
          <span className='text-gray-400'>GRAND TOTAL</span>
          <span className='font-semibold text-[#d87c49]'>{formatCurrency(shipping + total) }</span>
        </div>
        <button type='submit' className='text-white bg-[#d87c49] w-full mt-7 text-center p-2 font-semibold cursor-pointer'>CONTINUE & PAY</button>
      </div>
    </div>
  )
}

export default CheckoutCart
