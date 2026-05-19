import React from 'react'
import { motion } from 'framer-motion'
import ProjectsData from '../objects/ProjectsData'
import OtherProjects from '../objects/OtherProjects'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

const Projects = () => {

  return (
    <div className='px-4 sm:px-8 md:px-12 lg:p-20 flex flex-col items-center gap-10 justify-center overflow-hidden'>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className='flex flex-col items-center gap-5'
      >
        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-center'>
          My Projects
        </h1>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '22rem' }}
          transition={{ duration: 1 }}
          className='h-1.5 rounded-2xl bg-gradient-to-bl from-[#a7d5f2] to-[#efc6ff] w-52 sm:w-72 lg:w-[22rem]'
        />
      </motion.div>

      {/* Featured Projects */}
      <motion.div
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        className='w-full bg-gradient-to-bl from-[#a7d5f2] to-[#efc6ff] min-h-120 rounded-4xl flex flex-wrap gap-5 justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10'
      >
        {ProjectsData.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              y: -10,
            }}
            className='bg-white w-full sm:w-[24rem] lg:w-100 min-h-[24rem] lg:h-90 px-5 sm:px-8 lg:px-10 py-6 flex flex-col gap-5 items-center justify-center rounded-4xl shadow-md cursor-pointer'
          >

            {/* Image */}
            <motion.img
              src={project.img}
              alt={project.title}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className='w-full sm:w-80 h-44 sm:h-50 rounded-4xl object-contain object-center'
            />

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className='text-lg sm:text-xl font-bold text-center'
            >
              {project.title}
            </motion.h1>

            {/* Bottom */}
            <div className='flex flex-col sm:flex-row gap-4 sm:gap-2 justify-between items-center w-full'>

              {/* Tech Stack */}
              <div className='flex flex-wrap justify-center sm:justify-start gap-3 text-[#2e78a6] font-semibold text-xs sm:text-sm'>
                {project.tech.map((item, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{
                      scale: 1.1,
                    }}
                    className='cursor-pointer'
                  >
                    {item}
                  </motion.span>
                ))}
              </div>

              {/* Button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                whileHover={{
                  scale: 1.08,
                }}
                className='bg-[#efc6ff] px-4 py-1 rounded-lg cursor-pointer text-purple-800 whitespace-nowrap'
              >
                <a href={project.url}>
                  View
                </a>
              </motion.button>

            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Other Projects */}
      <div className='flex flex-col gap-10 mt-10 hidden'>
        
        <div className='flex flex-col gap-2 justify-center items-center'>
          <h1 className='font-semibold text-xl'>
            Other Projects
          </h1>

          <div className='h-1 w-60 bg-gradient-to-l from-gray-300 via-black to-gray-300'></div>
        </div>

        <div className='flex flex-wrap gap-10 items-center justify-center'>
          {
            OtherProjects.map((item, idx) => (
              <div
                key={idx}
                className='w-70 h-65 flex flex-col p-5 items-center justify-center border-purple-300 border-2 rounded-4xl shadow-lg shadow-purple-800'
              >
                <img
                  src="fdf"
                  className='h-30 w-40 bg-black bg-contain rounded-2xl'
                />

                <h1 className='font-semibold text-lg'>
                  {item.title}
                </h1>

                <p className='text-sm text-gray-700 text-center'>
                  {item.description}
                </p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Projects