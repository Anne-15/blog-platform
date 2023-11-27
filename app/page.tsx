import Image from 'next/image'
import Hero from '../public/featured.jpg';
import Card from './components/Card';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Link from 'next/link';
import Cards from './components/Cards';


export default function Home() {
  return (
    <main>
      {/* navbar */}
      <Navbar/>
      {/* hero section */}
      <div className='hero-section relative'>
        <Image
          src={Hero}
          width={1700}
          alt='Hero image'
          className='w-full'
        />
        {/* <div className='absolute top-0 left-0 flex justify-between text-white font-medium'>
          <Navbar/>
        </div> */}
        <div className='absolute bottom-0 left-0 p-10 ml-10 text-white font-medium'>
          <p className='text-xl'>Featured</p>
          <h1 className='text-4xl font-bold mt-4'>Breaking into Product Design: Advice from Untitled Founder, Frankie</h1>
          <p className=' mt-4'>Let's get one thing out of the way: you don't need a Bachelor's degree to get into <br /> product design.
          We sat down with Frankie Sulllivan to talk about gatekeeping in <br /> product design and how one can get into this growing industry
          </p>
        </div>
      </div>

      {/* recent blogs */}
      <div className='container mx-auto mb-20'>
        <div className='flex justify-between mt-10'>
          <h1 className=' font-bold text-2xl mx-20'>Recent blogs</h1>
          <Link href={'/Blogs'}>
            <div className='flex space-x-3 mr-16'>
              <p className='font-bold text-lg'>view more</p>
              <Image
              src={'/arrow-up-right.svg'}
              alt='view more'
              width={15}
              height={15}
              className=''
              />
            </div>
          </Link>
        </div>
        {/* card */}
        <div className='flex flex-row flex-wrap mx-24 gap-10 mt-10'>
          <Cards 
            title='Migration to linear 101'
            imageSrc={'/card.jpg'}
            width1={300}
            height1={200}
            altText1={'Hero image'}
            linkTo={'/Blogs/id'}
            desc={'Linear helps streamline software projects, sprints, tasks and bug tracking. Here is how to get started'} 
            linkSrc={'/arrow-up-right.svg'} 
            width2={20} 
            height2={20} 
            altText2={'Hero image'}
          />
          <Cards 
            title='Migration to linear 101'
            imageSrc={'/card.jpg'}
            width1={300}
            height1={200}
            altText1={'Hero image'}
            linkTo={'/Blogs/id'}
            desc={'Linear helps streamline software projects, sprints, tasks and bug tracking. Here is how to get started'} 
            linkSrc={'/arrow-up-right.svg'} 
            width2={20} 
            height2={20} 
            altText2={'Hero image'}
          />
          <Cards 
            title='Migration to linear 101'
            imageSrc={'/card.jpg'}
            width1={300}
            height1={200}
            altText1={'Hero image'}
            linkTo={'/Blogs/id'}
            desc={'Linear helps streamline software projects, sprints, tasks and bug tracking. Here is how to get started'} 
            linkSrc={'/arrow-up-right.svg'} 
            width2={20} 
            height2={20} 
            altText2={'Hero image'}
          />
          <Cards 
            title='Migration to linear 101'
            imageSrc={'/card.jpg'}
            width1={300}
            height1={200}
            altText1={'Hero image'}
            linkTo={'/Blogs/id'}
            desc={'Linear helps streamline software projects, sprints, tasks and bug tracking. Here is how to get started'} 
            linkSrc={'/arrow-up-right.svg'} 
            width2={20} 
            height2={20} 
            altText2={'Hero image'}
          />
          
        </div>
        <div className='flex justify-between mt-10'>
          <h1 className=' font-bold text-2xl mx-20'>Recent projects</h1>
          <Link href={'/Projects'}>
            <div className='flex space-x-3 mr-16'>
              <p className='font-bold text-lg'>view more</p>
              <Image
              src={'/arrow-up-right.svg'}
              alt='view more'
              width={15}
              height={15}
              className=''
              />
            </div>
          </Link>
        </div>
        <div className='flex flex-row flex-wrap mx-24 gap-10 mt-10'>
        <Cards 
          title='Migration to linear 101'
          imageSrc={'/card.jpg'}
          width1={300}
          height1={200}
          altText1={'Hero image'}
          linkTo={'/Projects/id'}
          desc={'Linear helps streamline software projects, sprints, tasks and bug tracking. Here is how to get started'} 
          linkSrc={'/arrow-up-right.svg'} 
          width2={20} 
          height2={20} 
          altText2={'Hero image'}
        />
        <Cards 
          title='Migration to linear 101'
          imageSrc={'/card.jpg'}
          width1={300}
          height1={200}
          altText1={'Hero image'}
          linkTo={'/Projects/id'}
          desc={'Linear helps streamline software projects, sprints, tasks and bug tracking. Here is how to get started'} 
          linkSrc={'/arrow-up-right.svg'} 
          width2={20} 
          height2={20} 
          altText2={'Hero image'}
        />
        <Cards 
          title='Migration to linear 101'
          imageSrc={'/card.jpg'}
          width1={300}
          height1={200}
          altText1={'Hero image'}
          linkTo={'/Projects/id'}
          desc={'Linear helps streamline software projects, sprints, tasks and bug tracking. Here is how to get started'} 
          linkSrc={'/arrow-up-right.svg'} 
          width2={20} 
          height2={20} 
          altText2={'Hero image'}
        />
        <Cards 
          title='Migration to linear 101'
          imageSrc={'/card.jpg'}
          width1={300}
          height1={200}
          altText1={'Hero image'}
          linkTo={'/Projects/id'}
          desc={'Linear helps streamline software projects, sprints, tasks and bug tracking. Here is how to get started'} 
          linkSrc={'/arrow-up-right.svg'} 
          width2={20} 
          height2={20} 
          altText2={'Hero image'}
        />
          
        </div>
      </div>
      {/* footer */}
      <Footer/>
    </main>
  )
}
