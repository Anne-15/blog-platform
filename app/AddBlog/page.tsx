"use client"
import React, { useState } from 'react'
import Image from 'next/image'

const sendData =async () => {
  const [data,  setData] = useState();

  // const handleSubmit = (e) => {
  //  e.preventDefault() 
  // }
  // const blogData = await fetch('http://localhost:6060/blogs/add').then((res) => res.body)
  // return blogData
}

const page = () => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <form className='w-full max-w-2xl p-6 space-y-12 rounded-lg'>
        <div className='space-y-12'>
          <div className='border-gray-900/10'>
            <h2 className='text-base font-semibold leading-7 text-gray-900'>Blog</h2>

            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
              <div className='sm:col-span-4'>
                <label htmlFor="username" className='block text-sm font-medium leading-6 text-gray-900'>Title</label>
                <div className='mt-2'>
                  <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset  sm:max-w-md'>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      autoComplete="title"
                      className="block flex-1 border-0 bg-transparent p-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Project title"
                  />
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
              <div className='sm:col-span-4'>
                <label htmlFor="username" className='block text-sm font-medium leading-6 text-gray-900'>Category</label>
                <div className='mt-2'>
                  <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset  sm:max-w-md'>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      autoComplete="title"
                      className="block flex-1 border-0 bg-transparent p-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Category"
                  />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-full mt-5">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                Description
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">Write a brief introduction about the topic.</p>
            </div>

            <div className="col-span-full mt-5">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                Cover photo
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <Image
                  src={'/photo-icon.svg'}
                  width={100}
                  height={100}
                  alt='photo icon'
                  className='ml-10'
                  />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2  focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>

            <div className="border-gray-900/10 pb-8 mt-10">
              <h2 className="text-base font-semibold leading-7 text-gray-900">Blog Details</h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

              <div className="col-span-full mt-5">
                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                  Blog body
                </label>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">Write your heart out.</p>
              </div>

              <div className="col-span-full mt-5">
                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                  Conclusions & Quotations
                </label>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">Write a summary of the project and the main take away points.</p>
              </div>

            </div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  )
}

export default page

function aync() {
  throw new Error('Function not implemented.')
}
