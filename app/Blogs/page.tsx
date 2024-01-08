"use client"
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CardBlogs from '../components/CardBlogs'
import Image from 'next/image'


const Blogs = () => {
    const categories = ['Recent Blogs', 'Software Development', 'Product Design']
    const [selectedCategory, setSelectedCategory] = useState("Recent Blogs")
  return (
    <main>
        <Navbar/>
        <div className='container mx-auto flex flex-row space-x-11 my-10 justify-around'>
            <section className='space-y-8 w-4/6 ml-20'>
                <h1 id='recent' className='font-bold text-2xl mx-10'>My Blogs</h1>
                {/* <Card/> */}
                <div className='space-y-8 mx-10'>
                    <CardBlogs 
                        title={'Breaking the cycle with negative self talk: Strategies for developing a growth mindset'} 
                        imageSrc={'/card.jpg'} 
                        linkSrc={'/Blogs/id'} 
                        width1={350} 
                        height1={350} 
                        altText1={'Hero image'} 
                        width2={20} 
                        height2={20} 
                        altText2={'Hero image'} 
                        imageSrc2={'/arrow-up-right.svg'} 
                        desc={" Negative self-talk can hold us back and prevent us from reaching out full potential. In this article, we'll explore the concept of a growth mindset and share potential strategies for developing a more positive and growth-oriented way of thinking."}
                        category={'software development'}
                    />
                    <CardBlogs 
                        title={'Breaking the cycle with negative self talk: Strategies for developing a growth mindset'} 
                        imageSrc={'/card.jpg'} 
                        linkSrc={'/Blogs/id'} 
                        width1={350} 
                        height1={350} 
                        altText1={'Hero image'} 
                        width2={20} 
                        height2={20} 
                        altText2={'Hero image'} 
                        imageSrc2={'/arrow-up-right.svg'} 
                        desc={" Negative self-talk can hold us back and prevent us from reaching out full potential. In this article, we'll explore the concept of a growth mindset and share potential strategies for developing a more positive and growth-oriented way of thinking."}
                        category={'product design'}
                    />
                    <CardBlogs 
                        title={'Breaking the cycle with negative self talk: Strategies for developing a growth mindset'} 
                        imageSrc={'/card.jpg'} 
                        linkSrc={'/Blogs/id'} 
                        width1={350} 
                        height1={350} 
                        altText1={'Hero image'} 
                        width2={20} 
                        height2={20} 
                        altText2={'Hero image'} 
                        imageSrc2={'/arrow-up-right.svg'} 
                        desc={" Negative self-talk can hold us back and prevent us from reaching out full potential. In this article, we'll explore the concept of a growth mindset and share potential strategies for developing a more positive and growth-oriented way of thinking."}
                        category={'software development'}
                    />
                   
                </div>
            </section>
            <article className='tracking-wide leading-loose flex flex-col mt-14'>
                <ul className='flex flex-col gap-2 p-4 '>
                    <li className='p-2 rounded-lg hover:bg-gray-200 cursor-pointer'>Recent Blogs</li>
                    <li className='p-2 rounded-lg hover:bg-gray-200 cursor-pointer'>Prouct Design</li>
                    <li className='p-2 rounded-lg hover:bg-gray-200 cursor-pointer'>Software Development</li>
                </ul>
            </article>
            
        </div>       
        <Footer/>
    </main>
  )
}

export default Blogs