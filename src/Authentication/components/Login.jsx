import { Book } from 'lucide-react'
import React from 'react'
import image from '../../assets/images/image3.jpg'
import { Link } from 'react-router'

const Login = () => {
  return (
    <div>
      <div className="flex mt-3 gap-2 ml-5">
        <Book/>
        <h1 className='font-bold'>New Vision Comprehensive College</h1>
      </div>
      <div className='border mt-2'></div>
      <div className='text-center mt-10 text-2xl font-semibold tracking-wide'>
        <h1>Welcome Back To New Vision Comprehensive College</h1>
      </div>
      <form action="submit">
      <div className='flex justify-evenly flex-col lg:flex-row'>
       <img src={image} alt="" className='w-[500px] h-[600px] mt-7 ml-3 rounded-lg' />
       <div className='ml-3 mt-32'>
       <div>
        <select name="role" id="role" className='w-[400px] h-[30px] px-2 rounded bg-stone-200'>
            <option value="role">Select Your Role</option>
            <option value="Principal">Principal</option>
            <option value="Teacher">Teacher</option>
            <option value="Disciplinary Staff">Disciplinary Staff</option>
            <option value="Students">Students</option>
        </select>
        </div>
        <input type="email" placeholder='Enter a valid email ' className='border mt-10 w-[400px] h-[35px] rounded px-3 bg-stone-200 block' />
        <input type="text" placeholder='Enter your password' className='border mt-10 w-[400px] h-[35px] rounded px-3 bg-stone-200' />
        <div className='font-semibold pl-5 tracking-wide  mt-5'>
         <Link to='/forgot-password'>Forgot Password?</Link>
       </div>
       <button className='border mt-12  w-[400px] h-[30px] rounded-lg bg-[#51cfe0] block'>Login</button>
       <div className='flex mt-4 ml-20'>
        <h1>Do not have an account?
            <Link to='/signup' className='pl-2 text-[#51cfe0]'>SignUp</Link>
        </h1>
       </div>
       </div>
      </div>
      </form>
     
    </div>
  )
}

export default Login
