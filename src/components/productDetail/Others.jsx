import React from 'react'
import { useNavigate } from 'react-router-dom';

const Others = ({product}) => {
    const navigate = useNavigate();

    const handleNavigation = (productSlug) => {
        navigate(`/product/${productSlug}`);
    };
 
  return (
    <div className='flex flex-col py-8 gap-16'>
        <h2 className='text-xl font-semibold text-black text-left mx-auto sm:text-3xl'>YOU MAY ALSO LIKE</h2>
        <div className='flex flex-col gap-10 sm:flex-row'>
            {
                product.map(item => item.others.map(other => (
                    <div key={other.slug} className='flex flex-col gap-4 items-center'>
                        <img src={other.image.mobile} alt="" className='mx-auto max-w-[500px] w-full lg:mx-0'/>
                        <h3 className='text-lg font-semibold'>{other.name}</h3>
                        <button onClick={() => handleNavigation(other.slug)} className='text-white bg-[#d87c49] w-fit font-semibold px-8 py-2 cursor-pointer'>SEE PRODUCT</button>  
                    </div>
                )))
            }
        </div>
    </div>
  )
}

export default Others
