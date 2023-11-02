import React from 'react'
import Image from 'next/image'

const Card = () => {
  return (
    <div className='card'>
        <Image
            src={'/card.jpg'}
            width={350}
            height={200}
            alt='Hero image'
            className='rounded-2xl'
        />
        <h1 className='mt-5 font-bold text-lg'>Migration to Linear 101</h1>
        <p className='mt-3'>Linear helps streamline software projects, sprints, tasks and bug tracking. Here is how to get started</p>
        <div className='flex flex-row gap-3 mt-5 font-medium'>
            <Image
                src={'/card.jpg'}
                width={50}
                height={100}
                alt='Hero image'
                className='rounded-full'
            />
            <p>Jonathan Wills</p>
            <p>19 Jan 2022</p>
        </div>
    </div>
  )
}

export default Card