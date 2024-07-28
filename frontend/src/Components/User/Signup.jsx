import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSignupMutation, useOtpMutation, useResendotpMutation } from '../../slices/userSlice'
import OTPModal from './OTPModal';
import Header from './Header';

function Signup() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [otpModalOpen, setOtpModalOpen] = useState(false)
  const [error, setError] = useState('')
  const [otpError, setOtpError] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const [signup, { isLoading: isSignupLoading }] = useSignupMutation()
  const [OTP, { isLoading: isOtpLoading }] = useOtpMutation()
  const [resendOtp, { isLoading: isResendLoading }] = useResendotpMutation()

  const submitHandler = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }
    try {
      const res = await signup({ name, email, password }).unwrap()
      console.log(res)
      setOtpModalOpen(true)
    } catch (error) {
      console.log(error?.data?.message)
      if (error?.data && error?.data?.message) {
        setError(error.data.message)
      }
    }
  }

  const handleOtpSubmit = async (otp) => {
    try {
      console.log('hwloo')
      const res = await OTP({ email, otp }).unwrap()
      navigate('/')
    } catch (error) {
      console.log(error?.data?.message)
      if (error?.data && error?.data?.message) {
        setOtpError(error.data.message)
      }
    }
  }

  const handleResendOtp = async () => {
    try {
      await resendOtp({ email }).unwrap()
    } catch (error) {
      console.log(error?.data?.message)
      if (error?.data && error?.data?.message) {
        setOtpError(error.data.message)
      }
    }
  }

  return (
    <>
    <Header/>
    <div className="navbar-color h-auto flex items-center justify-center py-24">
      <div className="bg-white p-6 rounded shadow-md max-w-md w-full">
        <h1 className="font-robot-bold text-black text-center text-2xl py-4 mb-4">Sign Up</h1>
        <form onSubmit={submitHandler} className="flex flex-col gap-4 items-center w-full">
          <div className="flex gap-2 w-full">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-2 border w-full border-gray-300 rounded"
              placeholder="Enter your name"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 border w-full border-gray-300 rounded"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex gap-2 w-full">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 border w-full border-gray-300 rounded"
              placeholder="Enter password"
            />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="p-2 border w-full border-gray-300 rounded"
              placeholder="Confirm password"
            />
          </div>
          {error && (
            <div className="text-red-500 text-xs mt-2">
              {error}
            </div>
          )}
          <button
            type="submit"
            className="w-full bold-navbar text-white rounded py-2 mt-4"
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
      <OTPModal
        isOpen={otpModalOpen}
        onRequestClose={() => setOtpModalOpen(false)}
        onResendOtp={handleResendOtp}
        onSubmit={handleOtpSubmit}
        error={otpError}
      />
    </div>
    </>
  )
}

export default Signup



