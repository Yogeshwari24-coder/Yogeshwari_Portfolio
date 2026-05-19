import React from 'react'
import Select_cuate from '../assets/Select_cuate.png'

const About = () => {
  return (
    <div className='px-6 md:px-12 lg:px-20 py-10 '>
      <div className='flex flex-col lg:flex-row items-center gap-10 lg:gap-20'>
        {/* left image section */}
        <div className='w-full max-w-sm lg:max-w-md'>
            <img src={Select_cuate} alt="about-image" className='object-contain w-full h-full' />
        </div>
        <div className='flex flex-col relative p-10 gap-10 lg:text-left max-w-xl'>
            <div className='absolute top-0 left-0 w-50 h-40 rounded-tl-4xl border-t-4 border-l-4 border-[#831C91]'></div>
            <div className='absolute bottom-0 right-0 w-50 h-40 rounded-br-4xl border-b-4 border-r-4 border-[#831C91]'></div>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>About</h1>
            <p className='text-sm md:text-base text-gray-700'>I'm a Frontend Developer who helps businesses and individuals turn their ideas into fast, modern, and visually appealing websites. I specialize in React and create responsive, user-friendly interfaces with smooth animations using Framer Motion.</p>
            <p className='text-sm md:text-base text-gray-700'>I focus on clean design, performance, and user experience so your website not only looks good but also works perfectly across all devices. Whether it's a landing page, portfolio, or a complete wev app, I aim to deliver high-quality work that meets your goals.</p>
        </div>
      </div>
    </div>
  )
}

export default About
