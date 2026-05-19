import React from 'react'

const Contact = () => {
  return (
    <div className='min-h-80 px-4 py-10 flex flex-col justify-center items-center gap-10'>

      <h1 className='text-3xl sm:text-4xl font-serif text-purple-700 text-center'>
        Contact
      </h1>

      <ul className='
        flex flex-col md:flex-row
        justify-center items-center
        gap-6 md:gap-16 lg:gap-30
        font-serif font-semibold
        w-full max-w-6xl
        min-h-30
        p-6 md:p-8
        rounded-2xl
        shadow-xl/30 shadow-purple-700
        text-center break-all
      '>

        <li>
          +91 9630215144
        </li>

        <li>
          yogeshwariahirwar88@gmail.com
        </li>

        <li>
          <a
            href="https://github.com/Yogeshwari24-coder"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/Yogeshwari24-coder
          </a>
        </li>

      </ul>
    </div>
  )
}

export default Contact