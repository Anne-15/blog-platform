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
    <nav className='flex justify-between p-5'>
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
            
        </div>
    </nav>
  )
}

export default Navbar