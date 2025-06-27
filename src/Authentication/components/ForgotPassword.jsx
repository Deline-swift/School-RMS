import { Book } from 'lucide-react'
import React from 'react'
import image from '../../assets/images/image4.jpg'
import { Link } from 'react-router'


const ForgotPassword = () => {
  return (
    <div>
      <div className=" flex mt-3 gap-2 ml-5">
        <Book/>
        <h1 className='font-bold'>New Vision Comprehensive College</h1>
      </div>
      <div className='border mt-3'></div>
      <div className='flex mt-8 justify-evenly'>
        <img src={image} alt="" className='w-[500px] h-[600px]  ml-3 rounded-lg' />
       
        <form action="submit" className='ml-3 mt-36'>
        <h1 className='font-bold text-xl'>Reset Your Password</h1>
        <h2 className='text-sm tracking-wide'>Enter an email address associated with your account</h2>
        <input type="text" placeholder='Enter your user name ' className='border mt-8 w-[400px] h-[35px] rounded px-3 bg-stone-200 block' />
        <input type="email" placeholder='Enter a valid email ' className='border mt-8 w-[400px] h-[35px] rounded px-3 bg-stone-200 block' />
        <button className='border mt-12  w-[400px] h-[30px] rounded-lg bg-[#51cfe0] block '>Reset Password</button>
        <div className='flex mt-10 ml-20'>
        <h1 className=''>Remember your password?
          <Link to='/login'   className='pl-2 text-primary'>Login</Link>
        </h1>
        </div>

        </form>
      </div>
    </div>
  )
}

export default ForgotPassword
