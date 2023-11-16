"use client"
import React from 'react'
import Image from 'next/image'

const Signup = () => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <form className='w-full max-w-2xl p-6 space-y-12 rounded-lg'>
        <div className='space-y-12'>
          <div className='border-gray-900/10'>
            <h2 className='text-xl font-semibold leading-5 text-center text-gray-900'>Personal Information</h2>

            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
              <div className='sm:col-span-4'>
                <label htmlFor="username" className='block text-sm font-medium leading-6 text-gray-900'>Full name</label>
                <div className='mt-2'>
                  <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
                    <input
                      type="text"
                      name="fullname"
                      id="fullname"
                      autoComplete="fullname"
                      className="p-2 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Full name"
                  />
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
              <div className='sm:col-span-4'>
                <label htmlFor="username" className='block text-sm font-medium leading-6 text-gray-900'>Email Address</label>
                <div className='mt-2'>
                  <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="p-2 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Email Address"
                  />
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
              <div className='sm:col-span-4'>
                <label htmlFor="username" className='block text-sm font-medium leading-6 text-gray-900'>Password</label>
                <div className='mt-2'>
                  <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      autoComplete="password"
                      className="p-2 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="**********"
                  />
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
              <div className='sm:col-span-4'>
                <label htmlFor="username" className='block text-sm font-medium leading-6 text-gray-900'>Confirm Password</label>
                <div className='mt-2'>
                  <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      autoComplete="password"
                      className="p-2 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="**********"
                  />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-full mt-5">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                Bio
              </label>
              <div className="mt-2">
                <textarea
                  id="bio"
                  name="bio"
                  rows={3}
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">Write an abstract and brief introduction about yourself.</p>
            </div>

            <div className="col-span-full mt-5">
              <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
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

            {/* <div className="col-span-full mt-5">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                Profile photo
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <Image
                  src={'/profile.svg'}
                  width={100}
                  height={100}
                  alt='photo icon'
                  className='ml-10'
                  />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div> */}

            <div className="border-gray-900/10 pb-8 mt-10">
              <h2 className="text-xl font-semibold leading-7 text-gray-900">Work Experience</h2>

              <div className='mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                <div className="sm:col-span-3">
                  <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                    Start date
                  </label>
                  <div className="mt-2">
                    <input
                      type="date"
                      name="start-date"
                      id="start-date"
                      autoComplete="start-date"
                      className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                    End date
                  </label>
                  <div className="mt-2">
                    <input
                      type="date"
                      name="end-date"
                      id="end-date"
                      autoComplete="end-date"
                      className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-full mt-5">
                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                  Title
                </label>
                <div className='mt-2'>
                  <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      autoComplete="title"
                      className="p-2 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Title"
                  />
                  </div>
                </div>
              </div>

              <div className="col-span-full mt-5">
                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                  Description
                </label>
                <div className="mt-2">
                  <textarea
                    id="desc"
                    name="desc"
                    rows={7}
                    className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">Write are the key issues being addressed by the project.</p>
              </div>

              <div className="col-span-full mt-5">
                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                  Skills
                </label>
                <div className="mt-2">
                  <textarea
                    id="skills"
                    name="skills"
                    rows={3}
                    className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  )
}

export default Signup