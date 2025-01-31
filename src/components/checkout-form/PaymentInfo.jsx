import React from 'react'

const PaymentInfo = ({formData, handleChange, errors}) => {
  return (
    <div className='flex flex-col gap-5'>
        <h3 className='font-semibold text-[#d87c49]'>PAYMENT DETAILS</h3>
        <label htmlFor="" className='font-semibold flex flex-col gap-3'>Payment Method<br/>
        <div className='flex gap-3 p-3 rounded-md border border-gray-400'>
            <input 
            type="radio" 
            name='paymentMethod' 
            onChange={handleChange}
            checked={formData.paymentMethod === "e-money"}
            value='e-money'
            />
            <span className='font-semibold'>e-money</span>
        </div>
        <div className='flex gap-3 p-3 rounded-md border border-gray-400'>
            <input 
            type="radio" 
            name='paymentMethod' 
            value='cashOnDelivery'
            onChange={handleChange}
            checked={formData.paymentMethod === "cash on delivery"}
            />
            <span className='font-semibold'>Cash on delivery</span>
        </div><br/>
            { errors.paymentMethod && <span className='text-red-500 text-sm -mt-4'>Select a payment method</span>}
        </label>
        <div className='flex gap-5 flex-col sm:flex-row'>
        <label htmlFor="" className='font-semibold w-full'>e-money number<br/>
            <input
            type='number'
            name='eMoneyNumber'
            className='outline-none p-3 rounded-md border border-gray-400 w-full'
            placeholder='125589'
            value={formData.eMoneyNumber}
            onChange={handleChange}
            /><br/>
            { errors.eMoneyNumber && <span className='text-red-500 text-sm'>Enter your e-money number</span>}
        </label>
        <label htmlFor="" className='font-semibold w-full'>e-money pin<br/>
            <input
            type='number'
            name='eMoneyPin'
            className='outline-none p-3 rounded-md border border-gray-400 w-full'
            placeholder='2468'
            value={formData.eMoneyPin}
            onChange={handleChange}
            /><br/>
            { errors.eMoneyPin && <span className='text-red-500 text-sm'>Enter your e-money pin</span>}
        </label>
        </div>
    </div>
  )
}

export default PaymentInfo
