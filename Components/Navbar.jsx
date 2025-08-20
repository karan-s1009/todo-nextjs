import React from 'react'

const Navbar = () => {
  return (
    <div className='flex py-3 flex-wrap justify-around bg-gradient-to-r from-gray-900 via-purple-900 to-violet-600'>
        <h1 className='text-lg font-bold text-white cursor-pointer'>To-Do List</h1>
        <ul className='flex gap-[40px] text-md text-white'>
            <li className='cursor-pointer'>
              <a href="https://github.com/karan-s1009">GitHub</a>
            </li>
            <li className='cursor-pointer'>
              <a href="https://linkedin.com/in/karan-s1009">LinkedIn</a>
            </li>
        </ul>
    </div>
  )
}

export default Navbar