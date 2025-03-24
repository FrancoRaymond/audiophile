import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import { useNavigate, useParams} from 'react-router-dom';
import { products } from '../../data/data.js';  
import Features from './Features.jsx';
import Gallery from './Gallery.jsx';
import Categories from '../homepage/Categories.jsx';
import Others from './Others.jsx';
import Details from '../homepage/Details.jsx';
import { useAppContext } from '../../context/context.jsx';
import ScrollTop from '../ScrollTop.jsx';

function ProductDetail() {
  const navigate = useNavigate();
  const { productSlug } = useParams(); 
  const [product, setProduct] = useState([])
  const { addToCart, formatCurrency  } = useAppContext()
  const [qtyCounter, setQtyCounter] = useState(1)

  useEffect(() => {
    const selectedProduct = products.find(item => item.slug === productSlug);
    if (selectedProduct) {
      setProduct([selectedProduct]);
    } 
  }, [productSlug]); 

  const handleQuantityAdujstment = (e) => {
    if(e.target.id === 'increment'){
      setQtyCounter((prevQty) => prevQty + 1)
    }
    if(e.target.id === 'decrement'){
      setQtyCounter((prevQty) => prevQty === 1 ? 1 : prevQty - 1)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9 }}  
      className="product-detail mt-14 px-2 sm:px-5 md:px-10 lg:px-24"
    >
      <ScrollTop />
      <button onClick={() => navigate(-1)} className='cursor-pointer my-7 text-gray-400 font-semibold text-lg'>
        Back
      </button>
      { 
        product.map(item => (
          <div key={item.id} className='md:grid md:grid-cols-2 md:gap-7'>
            <img src={item.image.mobile} alt="" className='mx-auto max-w-[500px] w-full'/>
            <div className='py-8 flex px-4 flex-col gap-3 items-center md:items-start md:gap-4 md:justify-center lg:px-10 lg:gap-6'>
              {item.new && <span className='text-[#d87c49] md:text-lg'>NEW PRODUCT</span>}
                <h1 className='text-xl font-semibold md:text-3xl max-w-80'>{item.name}</h1>
                <p className='text-gray-500 text-center max-w-[500px] md:text-left'>{item.description}</p> 
                <span className='font-semibold text-black text-lg'>{formatCurrency(item.price)}</span> 
                <div className='flex gap-5 items-center'>
                    <div className='flex gap-8 bg-gray-200 items-center px-3 h-fit py-2'>
                        <button 
                          onClick={(e) => handleQuantityAdujstment(e)}
                          id='decrement' 
                          className='text-gray-600 border-0 cursor-pointer font-bold'
                        >-
                        </button>
                        <span className='cursor-pointer font-bold text-black'>{qtyCounter}</span>
                        <button 
                          onClick={(e) => handleQuantityAdujstment(e)}
                          id='increment' 
                          className='text-gray-600 border-0 cursor-pointer font-bold'
                        >+
                        </button>
                    </div>
                    <button onClick={() => addToCart(item, qtyCounter)}  className='text-white bg-[#d87c49] w-fit font-semibold px-8 py-2 cursor-pointer'>ADD TO CART</button>
                </div>        
            </div>
          </div>
        ))
      }
      <Features product={product} /> 
      <Gallery product={product} />
      <Others product={product} />
      <Categories />
      <Details />
    </motion.div>
  );
}

export default ProductDetail;
