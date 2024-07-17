import React from 'react'

function Login() {
  return (
    <div>
    <div className='navbar-color  h-[600px] items-center'>
        <div  className=' py-28 flex justify-center'>
          <div className='bg-white p-6 rounded shadow-md max-w-6xl md:w-[500px] h-[350px] items-center'  >
        <p className=' font-robot-bold text-black text-center text-2xl py-4'>Login</p>
        <form className="flex flex-col gap-4 items-center w-full ">
<input
  type="text"
  className="p-2 border w-full max-w-sm md:max-w-md border-gray-300 rounded"
  placeholder="Enter your phone number "
/>
<input
  type="text"
  className="p-2 border w-full max-w-sm md:max-w-md border-gray-300 rounded"
  placeholder="Enter Password"
/>
<button
  type="submit"
  className="w-full button-color max-w-sm md:max-w-md text-white  rounded py-2"
>
  Login
</button>
</form>


      
     

</div>
        </div>
    </div>
  </div>
  )
}

export default Login
