import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../slices/userSlice'

function Login() {


  const navigate=useNavigate()

  const [email,setemail]=useState()
  const [password,setPassword]=useState()

  const [login,{isLoading:loginLoading}]=useLoginMutation()


  const handeleSubmit=async(e)=>{
    e.preventDefault()
    try {
     const res= await login({email,password}).unwrap()
     navigate('/')
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
    <div className='navbar-color  h-[600px] items-center'>
        <div  className=' py-28 flex justify-center'>
          <div className='bg-white p-6 rounded shadow-md max-w-6xl md:w-[500px] h-[350px] items-center'  >
        <p className=' font-robot-bold text-black text-center text-2xl py-4'>Login</p>
 <form  onSubmit={handeleSubmit} className="flex flex-col gap-4 items-center w-full ">
<input
  type="text"
  value={email}
  onChange={(e)=>setemail(e.target.value)}
  className="p-2 border w-full max-w-sm md:max-w-md border-gray-300 rounded"
  placeholder="Enter your email "
/>
<input
  type="text"
  value={password}
  onChange={(e)=>setPassword(e.target.value)}
  className="p-2 border w-full max-w-sm md:max-w-md border-gray-300 rounded"
  placeholder="Enter Password"
/>
<button
  type="submit"
  className="w-full button-color max-w-sm md:max-w-md text-white  rounded py-2"
>

  Login
</button>
<div className='flex gap-2 '>
<p className='text-1xl'>not a member ?</p><button>signup</button>
</div>
</form>


      
     

</div>
        </div>
    </div>
  </div>
  )
}

export default Login
