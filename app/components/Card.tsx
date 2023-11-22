import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Card = () => {
  return (
    <div className='card'>
        <Image
        src={'/card.jpg'}
        width={300}
        height={200}
        alt='Hero image'
        className='w-full'
        />
        <Link href={'/Blogs/id'}>
          <div className='flex flex-row justify-between mt-5'>
            <h1 className='font-bold text-xl'>Migration to linear 101</h1>
            <Image
            src={'/arrow-up-right.svg'}
            width={20}
            height={20}
            alt='Hero image'
            className=''
            />
          </div>
        </Link>
        <p className='mt-3'>Linear helps streamline software projects, sprints, tasks and bug tracking. Here is how to get started</p>
        {/* <div className='flex flex-row gap-4 mt-5 font-medium'>
          <Image
          src={'/person.jpg'}
          width={50}
          height={100}
          alt='Hero image'
          className='rounded-full'
          />
          <p className='mt-3'>Jonathan Wills</p>
          <p className='mt-3'>19 Jan 2022</p>
        </div> */}
    </div>
  )
}

export default Card