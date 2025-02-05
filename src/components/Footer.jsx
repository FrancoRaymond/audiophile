import React from 'react'
import { Link } from 'react-router-dom'
import facebook from '../assets/shared/icon-facebook.svg'
import twitter from '../assets/shared/icon-twitter.svg'
import instagram from '../assets/shared/icon-instagram.svg'

const Footer = () => {
  return (
    <div className='text-white w-full bg-black flex flex-col gap-10 py-10 px-2 sm:px-5 md:px-10 lg:px-24'>
      <div className='flex flex-col gap-10 md:flex-row md:items-center justify-between mx-auto text-center sm:mx-0 sm:text-left'>
        <Link to="/" className="text-2xl font-bold">audiophile</Link>
        <div className='flex flex-col gap-4 font-semibold sm:flex-row '>
          <Link to="/">HOME</Link>
          <Link to="/headphones">HEADPHONES</Link>
          <Link to="/speakers">SPEAKERS</Link>
          <Link to="/earphones">EARPHONES</Link>
        </div>
      </div>
      <p className='text-gray-400 text-center sm:text-left max-w-xl'>Audiophile is an all in one stop to fulfill audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week</p>
      <div className='flex flex-col gap-10 mx-auto text-center sm:flex-row sm:text-left sm:justify-between sm:w-full'>
        <p className='text-gray-400'>copyright {new Date().getFullYear()}. All Right Reserved</p>
        <div className='flex gap-5 mx-auto sm:mx-0'>
            <img src={facebook} alt="fb" />
            <img src={twitter} alt="twit" />
            <img src={instagram} alt="insta" />
        </div>
      </div>   
  </div>
  )
}

export default Footer
