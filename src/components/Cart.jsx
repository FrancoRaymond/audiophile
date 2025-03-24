import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/context'
import close from '../assets/icon-close.svg'


const Cart = () => {
    const { cart, setCart, setIsCartActive, quantityAdjustment, formatCurrency} = useAppContext()
    const total = cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0)
    const cartQuantity = cart.reduce((acc, curr) => acc + curr.quantity, 0)

  return (
    <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="cart fixed flex top-0 left-0 z-50 w-full min-h-screen px-2 sm:px-5 md:px-10 lg:px-24"
        >
        <div className='max-w-sm h-fit max-h-[500px] overflow-y-auto bg-white w-full p-5 ml-auto mt-14 rounded-sm flex flex-col'>
            <button onClick={() => setIsCartActive(false)} className='border-0 ml-auto mb-3 cursor-pointer'><img src={close} alt="" /></button>
            {
                cart.length === 0 ? 
                <div className=' pt-5 pb-10 text-center px-5 flex flex-col gap-4'>
                    <h1 className='text-gray-400 font-semibold text-lg'>Cart empty</h1>
                    <span className='text-gray-400'>Added items will appear here</span>
                </div> :
                <div>
                    <div className='flex justify-between items-center mb-5'>
                        <h2 className='font-semibold text-black'>CART ({cartQuantity}))</h2>
                        <button onClick={() => setCart([])} className='text-gray-400 underline cursor-pointer border-0'>Remove All</button>
                    </div>
                    {
                        cart.map(item => (
                        <div key={item.id} className='flex gap-4 items-center justify-between mt-2'>
                            <img src={item.image.mobile} alt="" className="h-14 w-14 rounded-md"/>
                            <div className='grow'>
                                <h1 className='font-semibold text-black'>{item.slug}</h1>
                                <h2 className=' font-medium text-gray-400'>{formatCurrency(item.price)}</h2>
                            </div>
                            <div className='flex gap-4 bg-gray-200 items-center px-3 py-1'>
                                <button onClick={(e) => quantityAdjustment(e, item.id)} id='decrement' className='text-gray-600 border-0 cursor-pointer font-bold'>-</button>
                                <span className='cursor-pointer font-bold text-black'>{item.quantity}</span>
                                <button onClick={(e) => quantityAdjustment(e, item.id)} id='increment' className='text-gray-600 border-0 cursor-pointer font-bold'>+</button>
                            </div>
                        </div>
                        ))
                    }
                    <div className='flex justify-between items-center mt-5 font-medium'>
                        <span className='text-gray-400'>TOTAL</span>
                        <span className='font-semibold text-black'>{formatCurrency(total)}</span>
                    </div>
                    <Link to="/checkout"><button onClick={() => setIsCartActive(false)} type='submit' className='text-white bg-[#d87c49] w-full mt-7 text-center p-2 font-semibold cursor-pointer'>CHECKOUT</button></Link>
                </div>
            }
        </div>
    </motion.div>
  )
}

export default Cart
