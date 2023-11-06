import React from 'react'

const Login = () => {
  return (
    <div className='container mx-auto mt-20'>
      <form className='max-w-md mx-auto p-8 bg-gray-100 rounded-md shadow-md'>
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
        <button
          type="submit"
          className='w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300'
        >
          Login
        </button>
      </form>
    </div>

  )
}

export default Login