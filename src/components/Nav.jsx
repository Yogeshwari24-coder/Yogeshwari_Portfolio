import React, { useState } from 'react'
import portfolio from '../assets/portfolio.png'
import { IoMenu, IoClose } from "react-icons/io5";

const Nav = () => {

  const [open, setOpen] = useState(false)

  return (
    <div className='flex fixed top-0 left-0 justify-between items-center lg:px-20 px-5 h-20 w-full font-mono shadow-md'>

      <div className='w-40 md:w-52 lg:w-60 h-14 flex items-center'>
        <img
          src={portfolio}
          alt='logo'
          className='object-contain w-40 md:w-52 lg:w-60 h-14'
        />
      </div>

      <ul className='hidden lg:flex items-center gap-8 text-lg font-semibold'>
        <li className='cursor-pointer hover:text-purple-600'>
          <a href="#home">Home</a>
        </li>

        <li className='cursor-pointer hover:text-purple-600'>
          <a href="#about">About</a>
        </li>

        <li className='cursor-pointer hover:text-purple-600'>
          <a href="#skills">Skills</a>
        </li>

        <li className='cursor-pointer hover:text-purple-600'>
          <a href="#projects">Projects</a>
        </li>

        <li className='cursor-pointer hover:text-purple-600'>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className='lg:hidden z-50'>
        {
          open ?
            <IoClose
              className='h-8 w-8 cursor-pointer'
              onClick={() => setOpen(false)}
            />
            :
            <IoMenu
              className='h-8 w-8 cursor-pointer'
              onClick={() => setOpen(true)}
            />
        }
      </div>

      {/* Mobile Menu */}
      {
        open && (
          <ul className='absolute top-20 right-5 bg-gray-900 text-white w-44 rounded-2xl flex flex-col gap-5 p-5 shadow-xl lg:hidden'>

            <li onClick={() => setOpen(false)}>
              <a href="#home">Home</a>
            </li>

            <li onClick={() => setOpen(false)}>
              <a href="#about">About</a>
            </li>

            <li onClick={() => setOpen(false)}>
              <a href="#skills">Skills</a>
            </li>

            <li onClick={() => setOpen(false)}>
              <a href="#projects">Projects</a>
            </li>

            <li onClick={() => setOpen(false)}>
              <a href="#contact">Contact</a>
            </li>

          </ul>
        )
      }

    </div>
  )
}

export default Nav