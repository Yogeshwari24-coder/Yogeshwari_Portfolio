import React from 'react'
import portfolio from '../assets/portfolio.png'
import { IoMenu } from "react-icons/io5";

const Nav = () => {
  return (
    <div className='flex fixed justify-between items-center lg:px-20 px-5 h-20 w-full font-mono'>
        <div className='w-40 md:w-52 lg:w-60 h-14 flex items-center'>
          <img src={portfolio} alt='logo' className='object-contain w-40 md:w-52 lg:w-60 h-14'/>
        </div>
      <ul className='hidden lg:flex items-center gap-8 text-lg'>
        <li className='cursor-pointer'><a href="#home">Home</a></li>
        <li className='cursor-pointer'><a href="#about">About</a></li>
        <li className='cursor-pointer'><a href="#skills">Skills</a></li>
        <li className='cursor-pointer'><a href="#projects">Projects</a></li>
        <li className='cursor-pointer'><a href="#contact">Contact</a></li>
      </ul>
      <div className='h-10 w-10 lg:hidden'>
        <IoMenu className='h-6 w-8'/>
      </div>
    </div>
  )
}

export default Nav
