import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface CardItems{
    title: string;
    imageSrc: string;
    linkSrc: string;
    width1: number;
    height1: number;
    altText1: string;
    width2: number;
    height2: number;
    altText2: string;
    linkTo: string;
    desc: string;
}

const Cards: React.FC<CardItems> = ({title, imageSrc, linkSrc, width1, height1, altText1, width2, height2, altText2, linkTo, desc}) => {
  return (
    <div className='card'>
        <Image
        src={imageSrc}
        width={width1}
        height={height1}
        alt={altText1}
        className='w-full'
        />
        <Link href={linkTo}>
          <div className='flex flex-row justify-between mt-5'>
            <h1 className='font-bold text-xl'>{title}</h1>
            <Image
            src={linkSrc}
            width={width2}
            height={height2}
            alt={altText2}
            className=''
            />
          </div>
        </Link>
        <p className='mt-3'>{desc}</p>
    </div>
  )
}

export default Cards