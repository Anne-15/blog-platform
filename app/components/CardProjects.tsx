import React from 'react'
import Image from 'next/image'

const CardProjects = () => {
  return (
    <div className='card'>
        <Image
            src={'/card.jpg'}
            width={450}
            height={200}
            alt='Hero image'
            className='rounded-2xl'
        />
        <h1 className='mt-5 font-bold text-lg'>Migration to Linear 101</h1>
        <p className='mt-3'>Linear helps streamline software projects, sprints, tasks and bug tracking. Here is how to get started</p>
        <div className='flex flex-row gap-4 mt-5 font-medium'>
            <Image
                src={'/person.jpg'}
                width={50}
                height={100}
                alt='Hero image'
                className='rounded-full'
            />
            <p className='mt-3'>Jonathan Wills</p>
            <p className='mt-3'>19 Jan 2022</p>
        </div>
        <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10 mt-5">Product Design</span>
    </div>
  )
}

export default CardProjects