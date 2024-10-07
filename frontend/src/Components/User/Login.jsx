import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../slices/userSlice'
import { useDispatch,useSelector } from 'react-redux';
import { setCredentials } from '../../slices/Auth.slice';
import { RiCloseCircleFill } from "react-icons/ri";


import Modal from 'react-modal';
Modal.setAppElement('#root'); 
const Login =({isOpen,onRequestClose})=>{


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
        onRequestClose()
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
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={true}
     contentLabel="Login Modal"
      className="fixed inset-0 flex items-center z-50 justify-center p-4"
      overlayClassName="fixed inset-0 bg-black z-50 bg-opacity-50"
    >
    
      <div className='bg-white p-6 rounded shadow-md max-w-md w-full'>
      <div className=" text-zinc-500   text-2xl font-bold cursor-pointer" onClick={onRequestClose}>
      <RiCloseCircleFill />
        </div>
        <p className=' font-playball top-4 text-black text-center text-5xl py-8 -mt-8'>Auto</p>
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
            className="p-3 border  w-full border-black rounded "
            placeholder="Enter Password"
          />
          {error && (
            <div className="text-red-500 text-xs mt-6">
              {error}
            </div>
          )}
          <button
            type="submit"
            className="w-full p-3 bold-navbar text-white rounded  "
          >
            Login
          </button>
          <div className='flex gap-2 mt-4 '>
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
    </>
  )
}

export default Login
