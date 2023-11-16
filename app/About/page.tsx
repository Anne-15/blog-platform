"use client"
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import Footer from '../components/Footer'

const About = () => {

  const [isActive, setIsActive] = useState(false)
  const [profileActive, setProfileActive] = useState(true)

  const ToggleProfileActive = () => {
    setProfileActive(!profileActive)
  }

  const ToggleDropDown = () => {
    setIsActive(!isActive)
  }

  return (
    <>
        <Navbar/>
        <div className='container mx-auto'>
          {/* hero section */}
          <section className='flex flex-row justify-around'>
            <Image
            src={'/aboutme.jpg'}
            width={100}
            height={50}
            alt='my profile'
            className='rounded-full'
            />
            <div>
              <p>Section with words about me</p>
            </div>
          </section>

          {/* experience */}
          <section className="mb-10 mt-10 pb-8 shadow-2xl rounded-2xl">
            <div className='flex flex-row justify-between mx-36 mb-5 pt-10 mt-10' onClick={ToggleDropDown} style={{ cursor: 'pointer' }}>
              <h1 className='font-bold text-2xl'>Experience</h1>
              <Image
              src={isActive ? '/down-arrow.svg' : '/up-arrow.svg'}
              width={30}
              height={30}
              alt={isActive ? 'down arrow' : 'up arrow'}
              />
            </div>
            {!isActive && (
              <div className='mx-60 scroll-pl-6 flex flex-col gap-10'>
                <div className='w-full h-fit rounded-xl shadow-xl p-5'>
                  <h1 className='font-bold text-lg'>SOFTWARE TEST ENGINEER I, TECHNO BRAIN GROUP</h1>
                  <p className='mb-2 text-sm font-medium'>[June 2022 - April 2023]</p>
                  <p className='text-sm ml-2 mb-2'>
                    Triaged daily customer feedback and collaborated with Microsoft to understand customer needs <br />
                    Generated comprehensive daily, monthly, and quarterly review reports <br />
                    Created visually appealing Power BI dashboard reports for data presentation and reports automation. <br />
                    Created visually appealing Power BI dashboard reports for data presentation and reports automation. <br />
                    Improved reporting process by 75% by leveraging on automation of reports using Power BI. Received a recognition and incentive for
                        the process improvement. <br />
                    Leveraged machine learning models and tools for identification and categorization of similar customer feedback. <br />
                    Leveraged automation using Microsoft tools to streamline triaging processes of the customer feedback. <br />
                  </p>
                </div>
                <div className='w-full h-fit rounded-xl shadow-xl p-5'>
                  <h1 className='font-bold text-lg'>SOFTWARE TEST ENGINEER I, TECHNO BRAIN GROUP</h1>
                  <p className='mb-2 text-sm font-medium'>[June 2022 - April 2023]</p>
                  <p className='text-sm ml-2 mb-2'>
                    Triaged daily customer feedback and collaborated with Microsoft to understand customer needs <br />
                    Generated comprehensive daily, monthly, and quarterly review reports <br />
                    Created visually appealing Power BI dashboard reports for data presentation and reports automation. <br />
                    Created visually appealing Power BI dashboard reports for data presentation and reports automation. <br />
                    Improved reporting process by 75% by leveraging on automation of reports using Power BI. Received a recognition and incentive for
                        the process improvement. <br />
                    Leveraged machine learning models and tools for identification and categorization of similar customer feedback. <br />
                    Leveraged automation using Microsoft tools to streamline triaging processes of the customer feedback. <br />
                  </p>
                </div>
                <div className='p-2 rounded-xl text-center bg-gray-300 hover:bg-black text-white font-medium text-lg'>
                  <button>Update/Add work experience</button>
                </div>
              </div>
            )}
          </section>
          {/* profile update */}
          <section className="mb-10 mt-10 pb-8 shadow-2xl rounded-2xl">
            <div className='flex flex-row justify-between mx-36 mb-5 pt-10 mt-10' onClick={ToggleProfileActive} style={{ cursor: 'pointer' }}>
              <h1 className='font-bold text-2xl'>Profile Settings</h1>
              <Image
              src={profileActive ? '/down-arrow.svg' : '/up-arrow.svg'}
              width={30}
              height={30}
              alt={profileActive ? 'down arrow' : 'up arrow'}
              />
            </div>
            {!profileActive && (
              <div className='flex flex-col mx-60'>
                <div className='mb-4'>
                  <label htmlFor="email" className='block text-gray-700 text-sm font-bold mb-2'>Full Name:</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className='w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300'
                    placeholder='Full name'
                  />
                </div>
                <div className='mb-4'>
                  <label htmlFor="email" className='block text-gray-700 text-sm font-bold mb-2'>Email:</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className='w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300'
                    placeholder='john@example.com'
                  />
                </div>
                <div className='mb-4'>
                  <label htmlFor="password" className='block text-gray-700 text-sm font-bold mb-2'>Password:</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className='w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300'
                    placeholder='********'
                  />
                </div>
                <div className='mb-4'>
                  <label htmlFor="text" className='block text-gray-700 text-sm font-bold mb-2'>Bio:</label>
                  <div className="mt-2">
                    <textarea
                      id="bio"
                      name="bio"
                      rows={3}
                      className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={''}
                    />
                  </div>
                </div>

                <div className="col-span-full my-5">
                  <label htmlFor="photo" className="block text-gray-700 text-sm font-bold mb-2">
                    Profile Photo
                  </label>
                  <div className="mt-2 flex items-center gap-x-3">
                    <Image
                    src={'/profile.svg'}
                    width={50}
                    height={50}
                    alt='photo icon'
                    />
                    <button
                      type="button"
                      className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      Change
                    </button>
                  </div>
                </div>
                
                <div className='p-2 rounded-xl text-center bg-gray-300 hover:bg-black text-white font-medium text-lg'>
                  <button>Update profile details</button>
                </div>
              </div>
            )}
          </section>
        </div>
        <Footer/>
    </>
  )
}

export default About