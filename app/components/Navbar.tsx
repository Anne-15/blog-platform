"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'

const Navbar = () => {
    // const [login, setLoggin] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

  return (
    <nav className='flex justify-between p-8'>
        <div className='flex gap-3 text-2xl '>
            <button className='rounded-full bg-black w-8 h-8 text-gray-50 font-bold'>R</button>
            <h1 className='font-bold'>
                <Link href={'/'}>Riishi</Link>
            </h1>
        </div>
        
        <div>
            <ul className='flex flex-row gap-10 font-semibold'>
                <li>
                    <Link href={'/'}>Home</Link>
                </li>
                <li>
                    <Link href={'/Projects'}>Projects</Link>
                </li>
                <li>
                    <Link href={'/Blogs'}>Blogs</Link>
                </li>
                <li>
                    <Link href={'/About'}>About us</Link>
                </li>
            </ul>
        </div>
        <div className='flex gap-10 font-semibold'>
            {/* <button>
                <Link href={'/Login'}> Login </Link> 
            </button>
            <button className='rounded-lg w-20 h-10 bg-black text-gray-50'>
                <Link href={'/Signup'}>Sign up</Link>
            </button> */}
            <div>
                {/* <button className='rounded-lg w-28 h-10 bg-black text-gray-50' onClick={toggleDropdown}>My Profile</button> */}
                <Image
                src={'/profile.svg'}
                width={40}
                height={40}
                alt='profile image'
                onClick={toggleDropdown}
                style={{ cursor: 'pointer' }}
                />
                {isOpen && (
                    <div className="mt-2 absolute origin-top-right right-0 w-44 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-4 z-50">
                        <ul role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                <Link href={'/AddProject'}>Add new project</Link>
                            </li>
                            <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                <Link href={'/AddBlog'}>Add new blog</Link>
                            </li>
                            <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                <Link href={'/Signup'}>Update Profile</Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    </nav>
  )
}

export default Navbar