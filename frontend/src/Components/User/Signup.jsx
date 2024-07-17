import React from 'react'
import './User.css';
import { Button } from 'react-bootstrap';

function Signup() {
  return (
    <div>
      <div className='navbar-color  h-[600px] items-center'>
          <div  className=' py-28  flex justify-center'>
            <div className='bg-white  p-7 rounded shadow-md max-w-md items-center'  >
          <p className=' font-robot text-black text-center text-2xl py-8'>what is your phone number or email ?</p>
          <form className="flex flex-col gap-4 items-center w-full ">
          <div className="flex gap-4 w-full">
          <input
          type="text"
          className="p-2 border w-full max-w-sm md:max-w-md border-gray-300 rounded"
          placeholder="Enter your name"
        />

        {/* Phone/Email Input */}
        <input
          type="text"
          className="p-2 border w-full max-w-sm md:max-w-md border-gray-300 rounded "
          placeholder="Enter your phone number "
        />
        </div>

        {/* Password Input */}
        <div className="flex gap-4 w-full">
        <input
          type="password"
          className="p-2 border w-full max-w-sm md:max-w-md border-gray-300 rounded"
          placeholder="Enter password"
        />

        {/* Confirm Password Input */}
        <input
          type="password"
          className="p-2 border w-full max-w-sm md:max-w-md border-gray-300 rounded"
          placeholder="Confirm password"
        />
        </div>
  <button
    type="submit"
    className="w-full button-color max-w-sm md:max-w-md text-white  rounded py-2"
  >
    Continue
  </button>
</form>
<div className="flex items-center my-4 w-full max-w-sm md:max-w-md mx-auto">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-500">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        
        <button
          className="w-full  max-w-sm md:max-w-md text-black
           rounded py-2 flex items-center justify-center"
        >
          <img src="path-to-google-icon.png" alt="Google icon" className="w-5 h-5 mr-2" />
          Continue with Google
        </button>

</div>
          </div>
      </div>
    </div>
  )
}

export default Signup

