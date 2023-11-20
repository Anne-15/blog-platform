import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import CardBlogs from '../components/CardBlogs'
import Image from 'next/image'


const Blogs = () => {
  return (
    <main>
        <Navbar/>
        <div className='container mx-auto flex flex-row space-x-11 my-10 justify-around'>
            <section className='space-y-8 w-4/6 ml-20'>
                <h1 id='recent' className='font-bold text-2xl mx-10'>My Blogs</h1>
                {/* <Card/> */}
                <div className='space-y-8 mx-10'>
                    <CardBlogs/>
                    <CardBlogs/>
                    <CardBlogs/>
                    <CardBlogs/>
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