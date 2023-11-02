import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between p-5'>
        <div className='flex gap-3 text-2xl '>
            <button className='rounded-full bg-blue-950 w-8 h-8 text-gray-50'>R</button>
            <h1 className=' font-bold'>Riishi</h1>
        </div>
        
        <div>
            <ul className='flex flex-row gap-10 font-semibold'>
                <li>Home</li>
                <li>Products</li>
                <li>Blogs</li>
                <li>About us</li>
            </ul>
        </div>
        <div className='flex gap-10 font-semibold'>
            <button>Login</button>
            <button className='rounded-lg w-20 h-10 bg-blue-950 text-gray-50'>Sign up</button>
        </div>
    </nav>
  )
}

export default Navbar