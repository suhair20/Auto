import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../slices/userSlice'
import { useDispatch,useSelector } from 'react-redux';
import { setCredentials } from '../../slices/Auth.slice';
import Header from './Header';
function Login() {


  const navigate = useNavigate()
  const dispatch=useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')




  const [login, { isLoading: loginLoading }] = useLoginMutation()



  const userToken=useSelector((state)=>state.auth.userToken)
  useEffect(()=>{
    if(userToken){
      navigate('/')
    }
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await login({ email, password }).unwrap()
      console.log(res.Token);
      if(res.success){
        dispatch(setCredentials(res.Token)); 
     
      navigate('/')
      }
    } catch (error) {
      console.log(error?.data?.message);
      if (error?.data && error?.data?.message) {
        setError(error.data.message)
      }
    }
  }

  return (
    <>
    <Header />
    <div className='navbar-color h-screen flex items-center justify-center'>
      <div className='bg-white p-6 rounded shadow-md max-w-md w-full'>
        <p className='font-robot-bold text-black text-center text-2xl py-4'>Login</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center w-full">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border w-full border-gray-300 rounded text-xs"
            placeholder="Enter your email "
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 border w-full border-gray-300 rounded text-xs"
            placeholder="Enter Password"
          />
          {error && (
            <div className="text-red-500 text-xs mt-6">
              {error}
            </div>
          )}
          <button
            type="submit"
            className="w-full bold-navbar text-white rounded py-2 text-xs"
          >
            Login
          </button>
          <div className='flex gap-2 mt-4 text-xs'>
            <p>Not a member?</p>
            <button
              onClick={() => navigate('/signup')}
              className="text-blue-500"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login
