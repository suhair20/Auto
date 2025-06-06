import React from 'react'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useDriverlogoutMutation } from '../../slices/driverSlice'
import { logout } from '../../slices/Auth.slice'

function Profile() {


  
 const dispatch =useDispatch()
 const navigate=useNavigate()
const [driverlogout]=useDriverlogoutMutation()


const logouthandler =async ()=>{

  try {

    const response=await driverlogout()
     
    if(response?.data?.success){
       dispatch(logout())
       navigate('/driver')
    }
    
  } catch (error) {
    console.log(error);
    
  }
}

  return (
    <div  className='items-center justify-center' >
      
      <div className='  bg-gradient-to-br from-gray-200 to-slate-200 items-center justify-center min-h-screen' >
     
      <div className= ' flex gap-5  min-h-screen  items-center justify-center ' >
        <div  className=' md:flex mt-10 mb-5  gap-6 w-full px-10 md:px-20  ' >
        <div  className='bg-white  md:w-3/6 h-[500px] rounded  ' >
         <div className=' w-full flex   items-center py-5 justify-center ' >
         <div className='flex flex-col items-center '>
         <img
        src='./banner2.jpg'
        alt='Profile'
        className='h-32 md:h-52 w-32 md:w-52 rounded-full border border-gray-300'
      />
      <button className='mt-2 px-4 py-1 navbar-color text-white rounded'>
        Change Picture
      </button>
       
        </div>
        
         </div>
         <div className=' w-full flex
          items-center justify-center'>
          <div>
          <h2 className='text-xl font-bold'>John Doe</h2>
         <p>Email: john.doe@example.com</p>
         <p>Phone: 123-456-7890</p>
        <p>Address: 123 Main St, City</p>
        </div>
        </div>
        </div>
        <div  className='bg-white mt-10  md:mt-0 md:w-5/6  md:h-[500px] rounded ' >
        <div className='  px-4 py-4  space-y-4'>
      <div className='border-b px-4 py-1 rounded shadow-md border  transition duration-300 ease-in-out    hover:bg-green-900  hover:text-white cursor-pointer'>
        <h3 className='font-semibold  text-xl'>Ride History</h3>
        <p className='text-sm opacity-80' >View your past trips and details.</p>
      </div>
      <div className='border-b px-4 py-1 rounded shadow-md border  transition duration-300 ease-in-out    hover:bg-green-900  hover:text-white cursor-pointer'>
        <h3 className='font-semibold text-xl '>Payment Methods</h3>
        <p className='text-sm opacity-80' >Manage saved cards and wallets.</p>
      </div>
      <div className='border-b px-4 py-1 rounded shadow-md border  transition duration-300 ease-in-out    hover:bg-green-900  hover:text-white cursor-pointer'>
        <h3 className='font-semibold text-xl '>Saved Locations</h3>
        <p className='text-sm opacity-80' >Quick access to frequent addresses.</p>
      </div>
      <div className='border-b px-4 py-1 rounded shadow-md border  transition duration-300 ease-in-out    hover:bg-green-900  hover:text-white cursor-pointer'>
        <h3 className='font-semibold text-xl '>Support & Help</h3>
        <p className='text-sm opacity-80' >Need assistance? Contact support.</p>
      </div>
      <div className='border-b px-4 py-1 rounded shadow-md border  transition duration-300 ease-in-out    hover:bg-green-900  hover:text-white cursor-pointer'>
        <h3 className='font-semibold text-xl '>Change Password </h3>
        <p className='text-sm opacity-80' >Need assistance? Contact support.</p>
      </div>
      <div 
 
  className='border-b px-4 py-1 rounded shadow-md border  transition duration-300 ease-in-out    hover:bg-red-900  hover:text-white cursor-pointer'
  onClick={logouthandler} 
>
  
        <h3 className='font-semibold text-xl'>Logout</h3>
        
        <p className='text-sm opacity-80'>Click here to log out of your account</p>
      </div>
    
    </div>
         
        </div>
        </div>
       
      </div>
      <Footer className='mt-3' />
    </div>


    </div>
  )
}

export default Profile



/////



   