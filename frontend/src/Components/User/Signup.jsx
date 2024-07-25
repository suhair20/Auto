import React, { useState } from 'react'
import './User.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {useSignupMutation,useOtpMutation,useResendotpMutation} from '../../slices/userSlice'

import OTPModal from './OTPModal';

function Signup() {

  const [name,setname]=useState()
  const [Password,setPassword]=useState()
  const [email,setemail]=useState()
  const [confirmPassword,setconfirmPassword]=useState()
  const [otpModalOpen,setOtpModalOpen]=useState(false)
  const [error,seterror]=useState()
  const [otperror,setotperror]=useState()

  const navigate=useNavigate()
  const dispatch=useDispatch()
  
  const [Signup,{isLoading:isSignupLoading}]=useSignupMutation()
  const [Otp,{isLoading:isotpLoading}]=useOtpMutation()
  const [resendotp,{isLoading:isresendLoading}]=useResendotpMutation()
  const submithandler= async(e)=>{
    e.preventDefault()
    try {
      const res= await Signup({name,email,Password}).unwrap()
      console.log(res);
      setOtpModalOpen(true);
    } catch (error) {
      console.log(error.data.message);
      if(error?.data && error?.data?.message){
        seterror(error?.data?.message)
      }
    }
  }

const handleOtpSubmit=async(otp)=>{
 
  try {
    console.log('hwloo');
    const res= await Otp({email,otp}).unwrap();
    navigate('/')
    
  } catch (error) {
    console.log(error.data.message);
    if(error?.data && error?.data?.message){
      setotperror(error?.data?.message)
  }
}
}


const handleResendOtp=async ()=>{
 try {
  await resendotp({email}).unwrap()
 } catch (error) {
  console.log(error.data.message);
    if(error?.data && error?.data?.message){
      setotperror(error?.data?.message)
  }
 }
}

  return (
    <div>
     <div className="navbar-color h-auto flex items-center justify-center py-24">
  <div className="bg-white p-6 rounded shadow-md max-w-6xl md:w-[500px] gap-4 h-[450px] items-center">
  <h1 className="font-robot-bold text-black text-center text-2xl py-4 mb-4">Sign Up</h1>
  
    <form  onSubmit={submithandler} className="flex flex-col gap-4   items-center w-full">
   
      <div className="flex gap-2 w-full">
        <input
          type="text"
          value={name}
          onChange={(e)=>setname(e.target.value)}
          className="p-2 border w-full border-gray-300 rounded"
          placeholder="Enter your name"
        />
        <input
          type="text"
          value={email}
          onChange={(e)=>setemail(e.target.value)}
          className="p-2 border w-full border-gray-300 rounded"
          placeholder="Enter your email "
        />
      </div>
      <div className="flex gap-2 w-full">
        <input
          type="password"
          value={Password}
          onChange={(e)=>setPassword(e.target.value)}
          className="p-2 border w-full border-gray-300 rounded"
          placeholder="Enter password"
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e)=>setconfirmPassword(e.target.value)}
          className="p-2 border w-full border-gray-300 rounded"
          placeholder="Confirm password"
        />
      </div>
      {error && (
        <div className="text-red-500   mt-6">
          {error}
        </div>
      )}
      <button
        type="submit"
        className="w-full bg-red-900 text-white rounded py-2"
      >
        Continue
      </button>
    </form>
    <div className="flex items-center my-2 w-full mx-auto">
      <hr className="flex-grow border-gray-300" />
      <span className="mx-2 text-gray-500">or</span>
      <hr className="flex-grow border-gray-300" />
    </div>
    <button
      className="w-full text-black rounded py-2 flex items-center justify-center"
    >
      <img src="https://img.icons8.com/color/48/000000/google-logo.png"
      alt="Google icon" className="w-5 h-5 mr-2" />
      Continue with Google
    </button>
  </div>
</div>

<OTPModal  isOpen={otpModalOpen} 
onRequestClose={()=>setOtpModalOpen(false)}  
onResendOtp={handleResendOtp} 
onSubmit={handleOtpSubmit} 
error={otperror}
/>
    </div>
  )
}

export default Signup

