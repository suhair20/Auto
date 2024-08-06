import React from 'react'
import Header from './Header'
import Footer from './Footer'

function HomeScreen() {
  return (
    <div>
   <Header  className="sticky top-0 z-50 " />
   <div className='full-width h-screen relative'>
  <div className='flex h-full'>
    <div className='mt-11 bottom-5 bg-cover bg-center w-full h-full relative position-relative' style={{ backgroundImage: 'url(./banner2.jpg)' }}>
      <div className="absolute  inset-0 bg-black opacity-70 z-0"></div>
      <div className='relative  ml-28 mt-24 py-6'>
        <h1 className='font-passion text-white text-3xl  md:text-6xl'>Drive at your pace</h1>
        <h1 className='font-passion md:text-6xl mr-4 text-white'>earn at your place</h1>
      </div>
      <div className="relative ml-60 h-12 flex-col items-center justify-between px-4 sm:px-8 lg:px-32">
        <button
          type="submit"
          className="p-1 font-robot-bold mr-36 border-0 text-white navbar-color rounded px-4"
        >
          Start
        </button>
      </div>
    </div>
  </div>
</div>
<div className='relative w-full h-screen '>
    <div className="absolute inset-0 navbar-color opacity-30 z-0  top-5"></div>
  </div>
<Footer/>
</div>
  )
}

export default HomeScreen
