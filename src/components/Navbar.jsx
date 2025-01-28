import React,{useState, useEffect} from 'react'
import iconCart from '../assets/icon-cart.svg'
import menu from '../assets/icon-menu.svg'
import close from '../assets/icon-menu-close.svg'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [size, setSize] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth)
      if(size > 640){
        setMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  },[])


  return (
    <div className='text-white relative bg-black flex justify-between items-center py-3 px-2 sm:px-5 md:px-10 lg:px-24'>
      <a href='#' className='text-2xl font-bold'>audiophile</a>
      <nav className={`${size < 640 ? menuOpen ? 'absolute block bg-black top-14 p-7 left-1/2 w-full -translate-x-[50%]' : 'hidden' : ''} `}>
        <ul className={`flex gap-8 ${size < 640 ? 'flex-col items-center' : 'flex-row'}`}>
            <li><a href="/">HOME</a></li>
            <li><a href="/headphones">HEADPHONES</a></li>
            <li><a href="/speakers">SPEAKERS</a></li>
            <li><a href="/earphones">EARPHONES</a></li>
        </ul>
      </nav>
      <div className='flex gap-5'>
        <a href="/checkout"><img src={iconCart} alt="cart" /></a>
        <img src={menu} alt="menu" onClick={() => setMenuOpen(true)} className={`${menuOpen ? 'hidden' : ''} size-6 cursor-pointer ${size > 640 ? 'hidden' : ''}`}/>
        <img src={close} alt="close" onClick={() => setMenuOpen(false)} className={`${menuOpen ? 'block' : 'hidden'} size-6 cursor-pointer ${size > 640 ? 'hidden' : ''}`}/>
      </div>
    </div> 
  )
}

export default Navbar