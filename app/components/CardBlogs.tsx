import React from 'react'
import Image from "next/image"
import Link from 'next/link'

interface CardBlog{
  title: string;
  imageSrc: string;
  linkSrc: string;
  width1: number;
  height1: number;
  altText1: string;
  width2: number;
  height2: number;
  altText2: string;
  imageSrc2: string;
  desc: string;
  category: string;
}

const CardBlogs: React.FC<CardBlog> = ({title, imageSrc, linkSrc, width1, height1, altText1, width2, height2, altText2, imageSrc2, desc, category}) => {
  return (
    <div className='card-blog flex flex-row space-x-10'>
      <div className='relative w-350 h-200 rounded-2xl overflow-hidden'>
        <Image
          src={imageSrc}
          width={width1}
          height={height1}
          alt={altText1}
          className='rounded-2xl'
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
          <p className='absolute top-5 left-5 z-10 inline-flex items-center rounded-md bg-red-100 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10'>
            {category}
          </p>
        </div>
      
      <div className='flex flex-col w-1/2'>
        <Link href={linkSrc}>
          <div className='flex flex-row justify-between'>
            <h1 className=' font-bold text-xl'>{title}</h1>
            <Image
              src={imageSrc2}
              width={width2}
              height={height2}
              alt={altText2}
              className=''
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          </div>
        </Link>
        
        <p className='mt-3 text-sm'>
          {desc}
        </p>
      </div>
        
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
  );
}

export default CardBlogs