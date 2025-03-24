import React from 'react'
import {motion} from 'framer-motion'
import HeroSection from '../components/homepage/HeroSection'
import Categories from '../components/homepage/Categories'
import Products from '../components/homepage/Products'
import Details from '../components/homepage/Details'


const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9 }} 
      className='min-h-screen'
    >
      <HeroSection />
      <div className='px-2 sm:px-5 md:px-10 lg:px-24'>
        <Categories />
        <Products />
        <Details />
      </div>     
    </motion.div> 
  )
}

export default Home
