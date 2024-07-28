import React from 'react'
import Header from './Header'
import { Button } from "react-bootstrap";
import './User.css';





function HomeScreen() {
  return (
    <>
    <Header />
    <div className='navbar-color full-width ' >
      <div className='flex'>
      <div className='  ml-32 py-28 bottom-5 ' > 
        <div className=' text-center mr-20 py-2  '>
          <h1 className='font-passion text-white text-3xl  md:text-6xl'>Trust us to take</h1>
          <h1 className=' font-passion md:text-6xl mr-4 text-white'>You there</h1>
        </div>
        <div className=" h-12 flex-col items-center justify-between px-4 sm:px-8 lg:px-32">
  <p className="text-black ml-10 text-sm">Hop in, Let's Go!</p>
  <form className=" mr-32 flex flex-col  md:gap-4 items-center ">
    <input
      type="text"
      className="p-1 border ml-14 w-100 border-navbar-color rounded "
      placeholder="Entere Location"
    />
    <input
      type="text"
      className="p-1 ml-14 w-100 border border-blue-950 rounded"
      placeholder="Enter Destination"
    />
    <button
      type="submit"
      className="p-1 font-robot-bold mr-36 border-0 text-white navbar-color rounded px-4"
    >
      Start
    </button>
  </form>
</div>
      </div>
      <div className='  ' > 
      <div className="w-full h-full flex items-center py-4 ml-10 justify-center">
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
