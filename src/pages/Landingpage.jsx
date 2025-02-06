import React from 'react'
import YouMayAlsoLike from '../components/landingpage/YouMayAlsoLike'
import Gallery from '../components/landingpage/Gallery'
import Details from '../components/homepage/Details'
import Categories from '../components/homepage/Categories'


const Landingpage = () => {
  return (
    <div className=''>
      <YouMayAlsoLike />
      <Gallery />
      < Categories />
      < Details />
    </div> 
  )
}

export default Landingpage
