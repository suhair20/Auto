import React from 'react'
import Header from './Header'

import { Button } from "react-bootstrap";
import './User.css';
function HomeScreen() {
  return (
    <>
    <div className='navbar-color full-width ' >
      <div className='flex'>
      <div className='  ml-32 py-20  top-3 ' > 
        <div className=' text-center mr-20 py-10 '>
          <h1 className='font-passion text-white text-3xl  md:text-6xl'>Trust us to take</h1>
          <h1 className=' font-passion md:text-6xl mr-4 text-white'>You there</h1>
        </div>
        <div className=" h-12 flex-col items-center justify-between px-4 sm:px-8 lg:px-32">
  <p className="text-white ml-28">Hop in, Let's Go!</p>
  <form className=" mr-32 flex flex-col  md:gap-3 items-center ">
    <input
      type="text"
      className="p-1 border ml-14 w-72 border-gray-300 rounded "
      placeholder="Entere Location"
    />
    <input
      type="text"
      className="p-1 ml-14 w-72 border border-gray-300 rounded"
      placeholder="Enter Destination"
    />
    <Button
      type="submit"
      className=" mr-36 border-0 text-black bg-white rounded px-4"
    >
      Start
    </Button>
  </form>
</div>
      </div>
      <div className='  ' > 
      <div className="w-full h-full flex items-center py-4 ml-5 justify-center">
          <img
            src="/banner.png"
            alt="Banner"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default HomeScreen
