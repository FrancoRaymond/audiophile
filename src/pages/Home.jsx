import React from 'react'
import HeroSection from '../components/homepage/HeroSection'
import Categories from '../components/homepage/Categories'
import Products from '../components/homepage/Products'
import Details from '../components/homepage/Details'


const Home = () => {
  return (
    <div className='min-h-screen'>
      <HeroSection />
      <div className='px-2 sm:px-5 md:px-10 lg:px-24'>
        <Categories />
        <Products />
        <Details />
      </div>     
    </div> 
  )
}

export default Home
