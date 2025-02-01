import React from 'react'

const BillingInfo = ({formData, handleChange, errors}) => {
  return (
    <div className='flex flex-col gap-5'>
        <h3 className='font-semibold text-[#d87c49]'>BILLING DETAILS</h3>
        <div className='flex gap-5 flex-col sm:flex-row'>
            <label htmlFor="name" className='font-semibold sm:grow'>Name<br/>
                <input
                id='name'
                type="text"
                name='name'
                value={formData.name}
                onChange={handleChange}
                className='outline-none px-3 py-2 rounded-md border border-gray-400 sm:w-full'
                placeholder='Alexei Ward'
                /><br/>
                { errors.name && <span className='text-red-500 text-sm'>Enter your name</span>}
            </label>
            <label htmlFor="email" className='font-semibold sm:grow'>Email Address<br/>
                <input 
                id='email'
                type="email"
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='outline-none px-3 py-2 rounded-md border border-gray-400 sm:w-full'
                placeholder='Alexei@mail.com'
                /><br/>
                { errors.email && <span className='text-red-500 text-sm'>Enter a valid email</span>}
            </label>
        </div>
        <label htmlFor="phoneNumber" className='font-semibold'>Phone Number<br/>
        <input 
            id='phoneNumber'
            type='tel'
            name='phoneNumber'
            value={formData.phoneNumber}
            onChange={handleChange}
            className='outline-none px-3 py-2 rounded-md border border-gray-400'
            placeholder='+27 86-001-0111'
        /><br/>
        { errors.phoneNumber && <span className='text-red-500 text-sm'>Enter your phone number</span>}
        </label>
    </div>
  )
}

export default BillingInfo
