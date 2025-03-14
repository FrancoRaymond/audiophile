import React from 'react'
import HeroSection from '../components/homepage/HeroSection'
import Categories from '../components/homepage/Categories'
import Products from '../components/homepage/Products'
import Details from '../components/homepage/Details'


const Home = () => {
  return (
    <div className='min-h-screen'>
      <HeroSection />
      <Categories />
      <Products />
      <Details />  
    </div> 
  )
}

export default Home
