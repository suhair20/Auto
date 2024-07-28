import React from 'react'

function Signup() {
  return (
    <>
      <div className='absolute  inset-0 bold-navbar opacity-40 z-0' ></div>
    <div className='h-screen flex flex-col items-center relative z-10 px-4 '>
    
      <div className='text-center mt-28'>
        <h1 className='font-robot-bold text-5xl  '>Sign Up</h1>
        <div className='mt-2 flex items-center justify-center text-black'>
          <p>Already have an account?</p>
          <p className='ml-2 text-blue-500 cursor-pointer'>Log in</p>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row w-full max-w-4xl'>
        <div className='lg:w-1/2 p-4'>
          {/* Email and Password Form */}
          <form className='space-y-4 '>
            <div>
              <label htmlFor='email' className='block text-sm font-medium text-black'>
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                placeholder='Your email address'
              />
            </div>
            <div>
              <label htmlFor='password' className='block text-sm font-medium text-black'>
                Password
              </label>
              <input
                type='password'
                id='password'
                name='password'
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                placeholder='Your password'
              />
            </div>
            <div>
              <label htmlFor='password' className='block text-sm font-medium text-black'>
              Confirm Password
              </label>
              <input
                type='password'
                id='password'
                name='password'
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                placeholder='Your password'
              />
            </div>
            <button
              type='submit'
              className='w-full bold-navbar text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className='lg:w-1/2 p-4 flex flex-col items-center space-y-4 mt-20'>
         
        <button className='w-full flex items-center justify-center'>
  
           <div className='flex-shrink-0 border-1 border-blue-500 h-10 flex items-center justify-center px-2'>
                <img
                src='https://img.icons8.com/color/48/000000/google-logo.png'
                alt='Google icon'
                className='w-5 h-5'
               />
           </div>
  
            <div className='bg-blue-500 text-white px-4 py-2 flex items-center '>
             Continue with Google
           </div>
       </button>




        <button className='w-full flex items-center justify-center'>
  
              <div className='flex-shrink-0 border-1 border-blue-900 h-10 flex items-center justify-center  px-2'>
                  <img
                        src='https://img.icons8.com/color/48/000000/facebook-new.png'
                        alt='Facebook icon'
                        className='w-5 h-5'
                  />
               </div>
  
               <div className='bg-blue-900 text-white px-4 py-2 flex items-center'>
               Continue with Facebook
             </div>
        </button>


        </div>
      </div>
    </div>
    </>
  );
  
}

export default Signup
