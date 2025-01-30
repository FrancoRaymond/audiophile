import React,{ useState} from 'react'
import Cart from '../components/Cart'

const Checkout = () => {

  const [formData, setFormData] = useState({
    name : '',
    email : '',
    phoneNumber : '',
    address : '',
    zipCode : '',
    city : '',
    country : '',
    paymentMethod : '',
    eMoneyNumber : '',
    eMoneyPin : ''
  })
  const [errors, setErros] = useState({
    name : false,
    email : false,
    phoneNumber : false,
    address : false,
    zipCode : false,
    city : false,
    country : false,
    paymentMethod : false,
    eMoneyNumber : false,
    eMoneyPin : false
  })
  return (
    <div className='text-black min-h-screen bg-gray-100 px-2 sm:px-5 md:px-10 lg:px-24 py-20'>
      <h1 className='text-gray-400 font-semibold text-lg cursor-pointer'>Go Back</h1>
      <form 
        action=""
        className=' flex flex-col gap-5 mt-5 md:flex-row md:justify-between place-items-start'
      >
        <div className='bg-white px-2 sm:px-5 md:px-10 w-full py-5 md:py-10 rounded-md flex flex-col gap-5'>
          <h2 className='text-3xl font-semibold'>CHECKOUT</h2>
          <h3 className='font-semibold text-[#d87c49]'>BILLING DETAILS</h3>
          <div className='flex gap-5 flex-col sm:flex-row'>
            <label htmlFor="" className='font-semibold sm:grow'>Name<br/>
              <input
                type="text"
                name='name'
                className='outline-none p-3 rounded-md border border-gray-400 sm:w-full'
                placeholder='Alexei Ward'
              /><br/>
              { errors.name && <span className='text-red-500 text-sm'>Enter your name</span>}
            </label>
            <label htmlFor="" className='font-semibold sm:grow'>Email Address<br/>
              <input 
                type="email"
                name='email'
                className='outline-none p-3 rounded-md border border-gray-400 sm:w-full'
                placeholder='Alexei@mail.com'
              /><br/>
              { errors.email && <span className='text-red-500 text-sm'>Enter a valid email</span>}
            </label>
          </div>
          <label htmlFor="" className='font-semibold'>Phone Number<br/>
            <input 
              type='tel'
              name='phoneNumber'
              className='outline-none p-3 rounded-md border border-gray-400'
              placeholder='+27 86-001-0111'
            /><br/>
            { errors.phoneNumber && <span className='text-red-500 text-sm'>Enter your phone number</span>}
          </label>

          {/* SHIPPING INFORMATION*/}

          <h3 className='font-semibold text-[#d87c49]'>SHIPPING INFO</h3>
          <label htmlFor="" className='font-semibold'>Address<br/>
            <input 
              type='text'
              name='address'
              className='outline-none p-3 rounded-md border border-gray-400 w-full'
              placeholder='11 ave william avenue'
            /><br/>
            { errors.address && <span className='text-red-500 text-sm'>Enter your address</span>}
          </label>
          <div className='flex gap-5 flex-col sm:flex-row'>
            <label htmlFor="" className='font-semibold w-full'>Zip Code<br/>
              <input 
                type='number'
                name='zipCode'
                className='outline-none p-3 rounded-md border border-gray-400 sm:w-full'
                placeholder='0200'
              /><br/>
              { errors.zipCode && <span className='text-red-500 text-sm'>Enter your zip code</span>}
            </label>
            <label htmlFor="" className='font-semibold w-full'>City<br/>
              <input 
                type='text'
                name='city'
                className='outline-none p-3 rounded-md border border-gray-400 sm:w-full'
                placeholder='Pretoria'
              /><br/>
              { errors.city && <span className='text-red-500 text-sm'>Enter your city</span>}
            </label>
          </div>
          <label htmlFor="" className='font-semibold'>Country<br/>
            <input 
              type='text'
              name='country'
              className='outline-none p-3 rounded-md border border-gray-400'
              placeholder='South Africa'
            /><br/>
            { errors.country && <span className='text-red-500 text-sm'>Enter your country</span>}
          </label>
          <h3 className='font-semibold text-[#d87c49]'>PAYMENT DETAILS</h3>
          <label htmlFor="" className='font-semibold flex flex-col gap-3'>Payment Method<br/>
            <div className='flex gap-3 p-3 rounded-md border border-gray-400'>
              <input type="radio" name='paymentMethod' value='e-money'/>
              <span className='font-semibold'>e-money</span>
            </div>
            <div className='flex gap-3 p-3 rounded-md border border-gray-400'>
              <input type="radio" name='paymentMethod' value='cashOnDelivery'/>
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
              /><br/>
              { errors.eMoneyNumber && <span className='text-red-500 text-sm'>Enter your e-money number</span>}
            </label>
            <label htmlFor="" className='font-semibold w-full'>e-money pin<br/>
              <input
                type='number'
                name='eMoneyPin'
                className='outline-none p-3 rounded-md border border-gray-400 w-full'
                placeholder='2468'
              /><br/>
              { errors.eMoneyPin && <span className='text-red-500 text-sm'>Enter your e-money pin</span>}
            </label>
          </div>
        </div>
        <Cart />
      </form>
    </div> 
  )
}

export default Checkout
