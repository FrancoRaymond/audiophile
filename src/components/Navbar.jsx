import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/context';
import iconCart from '../assets/icon-cart.svg'
import menu from '../assets/icon-menu.svg'
import close from '../assets/icon-menu-close.svg'
import Cart from './Cart';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { size, setSize, isCartActive, setIsCartActive} = useAppContext();

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

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <div className='text-white w-full border-b border-gray-400 bg-black z-50 flex justify-between items-center py-3 px-2 sm:px-5 md:px-10 lg:px-24 fixed top-0'>
      <Link onClick={closeMenu} to="/" className="text-2xl font-bold">audiophile</Link>
      <nav className={`${size < 640 ? menuOpen ? 'absolute block bg-black top-14 p-7 left-0 right-0 mx-auto max-w-[90%]' : 'hidden' : ''}`}>
        <ul className={`flex gap-8 ${size < 640 ? 'flex-col items-center' : 'flex-row'}`}>
          <li><Link onClick={closeMenu} to="/">HOME</Link></li>
          <li><Link onClick={closeMenu} to="/headphones">HEADPHONES</Link></li>
          <li><Link onClick={closeMenu} to="/speakers">SPEAKERS</Link></li>
          <li><Link onClick={closeMenu} to="/earphones">EARPHONES</Link></li>
        </ul>
      </nav>
      <div className='flex gap-5'>
        <button onClick={() => setIsCartActive(true)} className='cursor-pointer'><img src={iconCart} alt="cart" /></button>
        <img src={menu} alt="menu" onClick={() => setMenuOpen(true)} className={`${menuOpen ? 'hidden' : ''} size-6 cursor-pointer ${size > 640 ? 'hidden' : ''}`}/>
        <img src={close} alt="close" onClick={() => setMenuOpen(false)} className={`${menuOpen ? 'block' : 'hidden'} size-6 cursor-pointer ${size > 640 ? 'hidden' : ''}`}/>
      </div>
       { isCartActive && <Cart /> }
    </div>
  )
}

export default Navbar