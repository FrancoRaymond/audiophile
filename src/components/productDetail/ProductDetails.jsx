import React, { useState } from 'react';
import { useNavigate, useParams} from 'react-router-dom';
import { products } from '../../data/data.js';  // Import the products data
import Features from './Features.jsx';
import Gallery from './Gallery.jsx';
import Categories from '../homepage/Categories.jsx';

function ProductDetail() {
  const navigate = useNavigate();
  const { productId } = useParams(); // Get productId from the URL

  // Find the product from the products array based on the productId
  const [product, setProduct] = useState(products.filter(item => item.id === parseInt(productId) ))


  return (
    <div className="product-detail mt-14 px-2 sm:px-5 md:px-10 lg:px-24">
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
                <span className='font-semibold text-black text-lg'>R{item.price}</span> 
                <div className='flex gap-5 items-center'>
                    <div className='flex gap-8 bg-gray-200 items-center px-3 h-fit py-2'>
                        <button className='text-gray-600 border-0 cursor-pointer font-bold'>-</button>
                        <span className='cursor-pointer font-bold text-black'>1</span>
                        <button className='text-gray-600 border-0 cursor-pointer font-bold'>+</button>
                    </div>
                    <button  className='text-white bg-[#d87c49] w-fit font-semibold px-8 py-2 cursor-pointer'>ADD TO CART</button>
                </div>        
            </div>
          </div>
        ))
      }
      <Features product={product} /> 
      <Gallery product={product} />
      <Categories />
    </div>
  );
}

export default ProductDetail;
