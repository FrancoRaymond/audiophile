import React from 'react'

const ShippingInfo = ({formData, handleChange, errors}) => {
  return (
    <div className='flex flex-col gap-5'>
        <h3 className='font-semibold text-[#d87c49]'>SHIPPING INFO</h3>
        <label htmlFor="address" className='font-semibold'>Address<br/>
        <input 
            id='address'
            type='text'
            name='address'
            value={formData.address}
            onChange={handleChange}
            className='outline-none px-3 py-2 rounded-md border border-gray-400 w-full'
            placeholder='11 ave william avenue'
        /><br/>
        { errors.address && <span className='text-red-500 text-sm'>Enter your address</span>}
        </label>
        <div className='flex gap-5 flex-col sm:flex-row'>
        <label htmlFor="zipcode" className='font-semibold w-full'>Zip Code<br/>
            <input 
                id='zipCode'
                type='number'
                name='zipCode'
                value={formData.zipCode}
                onChange={handleChange}
                className='outline-none px-3 py-2 rounded-md border border-gray-400 sm:w-full'
                placeholder='0200'
            /><br/>
            { errors.zipCode && <span className='text-red-500 text-sm'>Enter your zip code</span>}
        </label>
        <label htmlFor="city" className='font-semibold w-full'>City<br/>
            <input 
                id='city'
                type='text'
                name='city'
                value={formData.city}
                onChange={handleChange}
                className='outline-none px-3 py-2 rounded-md border border-gray-400 sm:w-full'
                placeholder='Pretoria'
            /><br/>
            { errors.city && <span className='text-red-500 text-sm'>Enter your city</span>}
        </label>
        </div>
        <label htmlFor="country" className='font-semibold'>Country<br/>
            <input 
                id='country'
                type='text'
                name='country'
                value={formData.country}
                onChange={handleChange}
                className='outline-none px-3 py-2 rounded-md border border-gray-400'
                placeholder='South Africa'
            /><br/>
        { errors.country && <span className='text-red-500 text-sm'>Enter your country</span>}
        </label>
    </div>
  )
}

export default ShippingInfo
