// import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import light from '../assets/light.svg';
import github from '../assets/github.svg';
const NavMenu = () => {
  return (
    <nav className=' flex  items-center bg-white py-4 border-b-2'>
        {/* Logo section  */}
      <div className='w-50 base-1/4'>
        <img src={logo} alt='TechHub logo' className='w-40 ml-10'/>
      </div>

      <div className='flex items-center gap-4 absolute right-44 '>
        <Link to="/">Home</Link>
        <Link to="/service">Service</Link>
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact" className='divide-x bg-slate-500 px-6 py-2 rounded-full'>Contact</Link>
        
      </div>
      {/* Icons */}
      <div className='flex gap-2 absolute right-14 divide-x'>
          
          <span className=' cursor-pointer'>
            <img src={light} className='w-8' alt="light theme " />
          </span>
          <Link to="/https://github.com/TechHub-giftsnow">
            <img src={github} alt="light theme" className='w-8 ml-2' />
          </Link>
        
      </div>

    </nav>
  )
}

export default NavMenu
