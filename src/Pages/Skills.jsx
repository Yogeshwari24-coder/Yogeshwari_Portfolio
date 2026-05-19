import React from 'react'
import { SkillsData } from '../objects/skills'

const Skills = () => {
  return (
    <div className='flex flex-col items-center py-10 px-6 w-full'>
      
      <h1 className='text-3xl md:text-4xl font-bold mb-10'>
        My Skills
      </h1>

     
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 lg:gap-22 max-w-5xl'>
        
        {SkillsData.map((item, idx) => {
          return (
            <div key={idx} className='flex flex-col items-center text-center'>
              
              <div className='w-20 h-20 md:w-24 md:h-24'>
                <img 
                  src={item.image} 
                  alt={item.name}
                  className='w-full h-full object-contain'
                />
              </div>

              <p className='mt-2 text-sm md:text-base font-medium'>
                {item.name}
              </p>

            </div>
          )
        })}

      </div>
    </div>
  )
}

export default Skills