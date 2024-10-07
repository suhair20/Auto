import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../slices/userSlice'
import { useDispatch,useSelector } from 'react-redux';
import { setCredentials } from '../../slices/Auth.slice';
import Header from './Header';
import Modal from 'react-modal';

const Login=({isOpen,onRequestClose})=>{
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
  
   <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
     contentLabel="Login Modal"
     
      className="fixed inset-0 flex items-center z-50  justify-center p-4"
      overlayClassName="fixed inset-0 bg-black z-50 bg-opacity-50 "
    >
    
      <div className ='bg-gray-300 p-6 rounded shadow-md max-w-md w-full'>
        <p className='font-robot-bold text-black text-center text-2xl py-4'>Login</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center w-full">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 border w-full border-black rounded "
            placeholder="Enter your email "
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 border w-full border-gray-950 shadow-md rounded "
            placeholder="Enter Password"
          />
          {error && (
            <div className="text-red-500  mt-6">
              {error}
            </div>
          )}
          <button
            type="submit"
            className="w-full bold-navbar text-white rounded py-2 "
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
   
    </Modal>
    
  )
}

export default Login
