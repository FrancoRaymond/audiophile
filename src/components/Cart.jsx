import React from 'react'
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/context'
import close from '../assets/icon-close.svg'


const Cart = () => {
    const { cart, setIsCartActive } = useAppContext()
    const total = cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0)
  return (
    <div className="cart fixed flex top-0 left-0 z-50 w-full min-h-screen px-2 sm:px-5 md:px-10 lg:px-24">
        <div className='max-w-sm bg-white w-full p-5 ml-auto h-fit mt-14 rounded-sm flex flex-col'>
            <button onClick={() => setIsCartActive(false)} className='border-0 ml-auto mb-3 cursor-pointer'><img src={close} alt="" /></button>
            <div className='flex justify-between items-center mb-5'>
                <h2 className='font-semibold text-black'>CART (0)</h2>
                <span className='text-gray-400 underline cursor-pointer'>Remove All</span>
            </div>
            {
                cart.map(item => (
                <div key={item.id} className='flex gap-4 items-center justify-between mt-2'>
                    <div className={`h-12 w-12 ${item.image} rounded-md`}></div>
                    <div className='grow'>
                        <h1 className='font-semibold text-black'>{item.name}</h1>
                        <h2 className=' font-medium text-gray-400'>R{item.price}</h2>
                    </div>
                    <div className='flex gap-4 bg-gray-200 items-center px-3 py-1'>
                        <button className='text-gray-600 border-0 cursor-pointer font-bold'>-</button>
                        <span className='cursor-pointer font-bold text-black'>1</span>
                        <button className='text-gray-600 border-0 cursor-pointer font-bold'>+</button>
                    </div>
                </div>
                ))
            }
            <div className='flex justify-between items-center mt-5 font-medium'>
                <span className='text-gray-400'>TOTAL</span>
                <span className='font-semibold text-black'>R{total}</span>
            </div>
            <Link to="/checkout"><button onClick={() => setIsCartActive(false)} type='submit' className='text-white bg-[#d87c49] w-full mt-7 text-center p-2 font-semibold cursor-pointer'>CHECKOUT</button></Link>
        </div>
    </div>
  )
}

export default Cart
