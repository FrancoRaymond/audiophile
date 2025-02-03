import React from 'react'
import { Link } from 'react-router-dom'
import facebook from '../assets/shared/icon-facebook.svg'
import twitter from '../assets/shared/icon-twitter.svg'
import instagram from '../assets/shared/icon-instagram.svg'

const Footer = () => {
  return (
    <div className='text-white w-full bg-black flex flex-col gap-10 justify-center text-center items-center py-10 px-2 sm:px-5 md:px-10 lg:px-24'>
    <Link to="/" className="text-2xl font-bold">audiophile</Link>
    <div className='flex flex-col gap-4 mx-auto font-semibold'>
        <Link to="/">HOME</Link>
        <Link to="/headphones">HEADPHONES</Link>
        <Link to="/speakers">SPEAKERS</Link>
        <Link to="/earphones">EARPHONES</Link>
    </div>
    <p className='text-gray-400'>Audiophile is an all in one stop to fulfill audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week</p>
    <p className='text-gray-400'>copyright {new Date().getFullYear()}. All Right Reserved</p>
    <div className='flex gap-5'>
        <img src={facebook} alt="fb" />
        <img src={twitter} alt="twit" />
        <img src={instagram} alt="insta" />
    </div>
  </div>
  )
}

export default Footer
