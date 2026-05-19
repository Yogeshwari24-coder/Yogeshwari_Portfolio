import React from 'react'
import Nav from '../components/Nav'
import hero_img from '../assets/hero_img.png'

const Home = () => {
  return (
    <div className='min-h-screen pb-10 max-w-full bg-gradient-to-bl from-[#a7d5f2] to-[#efc6ff] lg:rounded-b-[20%]'>
      <Nav/>
      
      {/* hero section */}
      <div className='lg:p-10 flex lg:flex-row flex-col-reverse items-center justify-between'>
        {/* hero text section */}
        <div className='lg:w-1/2 w-80 px-5 lg:mt-24 flex flex-col gap-5'>
            <h1 className='text-4xl font-bold'>Hi, I'm <span className='text-[#811f79] text-5xl'>Yogeshwari Ahirwar</span></h1>
            <h2 className='text-xl font-semibold'>React Developer | Exploring Full-Stack Development</h2>
            <p className='text-xs leading-loose'>I build responsive and interactive web applications using React. 
                I also have hands-on experience with Node.js, Express, and MongoDB, 
                where I've created basic REST APIs (GET, POST, PUT).
            </p>
            <p className='text-xs'>Currently, I'm focused on improving my backend skills and building 
                full-stack projects that solve real-world problems.
            </p>
            <div className='flex gap-5 w-90 mt-10'>
                <button className='lg:w-40 lg:h-10 w-22 h-8 rounded-xl text-xs text-white bg-[#811f79]'><a href="#projects">View Projects</a></button>
                <button className='lg:w-40 lg:h-10 w-22 h-8 rounded-xl text-xs text-white bg-[#811f79]'><a href="#contact">Contact</a></button>
            </div>
        </div>
        <div className='lg:w-150 lg:h-110 w-60'>
         {/* hero image section */}
            <img src={hero_img} className='lg:w-150 lg:h-110 w-80 object-cover' />
        </div>
      </div>
    </div>
  )
}

export default Home
