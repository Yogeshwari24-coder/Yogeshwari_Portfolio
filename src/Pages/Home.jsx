import React from 'react'
import Nav from '../components/Nav'
import hero_img from '../assets/hero_img.png'

const Home = () => {
  return (
    <div className='min-h-screen w-full bg-gradient-to-bl from-[#a7d5f2] to-[#efc6ff] lg:rounded-b-[20%]'>

      <Nav />

      {/* Hero Section */}
      <div className='flex flex-col-reverse lg:flex-row items-center justify-between px-5 lg:px-20 pt-28 pb-10 gap-10'>

        {/* Text Section */}
        <div className='lg:w-1/2 flex flex-col gap-5 text-center lg:text-left'>

          <h1 className='text-3xl md:text-5xl font-bold leading-snug'>
            Hi, I'm{' '}
            <span className='text-[#811f79]'>
              Yogeshwari Ahirwar
            </span>
          </h1>

          <h2 className='text-lg md:text-2xl font-semibold text-gray-700'>
            React Developer | Exploring Full-Stack Development
          </h2>

          <p className='text-sm md:text-base leading-7 text-gray-800'>
            I build responsive and interactive web applications using React.
            I also have hands-on experience with Node.js, Express, and MongoDB,
            where I've created REST APIs using GET, POST, and PUT methods.
          </p>

          <p className='text-sm md:text-base leading-7 text-gray-800'>
            Currently, I'm focused on improving my backend skills and building
            full-stack projects that solve real-world problems.
          </p>

          {/* Buttons */}
          <div className='flex justify-center lg:justify-start gap-5 mt-5'>

            <button className='px-6 py-3 rounded-xl text-sm md:text-base text-white bg-[#811f79] hover:bg-purple-900 duration-300 shadow-lg'>
              <a href="#projects">View Projects</a>
            </button>

            <button className='px-6 py-3 rounded-xl text-sm md:text-base text-white bg-[#811f79] hover:bg-purple-900 duration-300 shadow-lg'>
              <a href="#contact">Contact</a>
            </button>

          </div>
        </div>

        {/* Image Section */}
        <div className='lg:w-1/2 flex justify-center'>

          <img
            src={hero_img}
            alt='Yogeshwari Hero'
            className='w-72 md:w-96 lg:w-[500px] object-contain drop-shadow-2xl'
          />

        </div>
      </div>
    </div>
  )
}

export default Home