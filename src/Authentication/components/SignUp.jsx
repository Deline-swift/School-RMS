import { Book, } from 'lucide-react'
import React from 'react'
import image from  '../../assets/images/image3.jpg'
import { Link } from 'react-router'


const SignUp = () => {
  return (
    <div className=''>
     <div className="flex mt-3 gap-2 ml-5">
        <Book/>
        <h1 className='font-bold'>New Vision Comprehensive College</h1>
     </div>
     <div className='border mt-2'></div>
     <div>
      <h1 className='text-center mt-8 text-2xl font-semibold tracking-wide'>  Signup Into New Vision Comprehensive College</h1>
     </div>
     <div className='flex justify-evenly '>
     <img src={image} alt="" className='w-[500px] h-[600px] mt-7 ml-3 rounded-lg' />
     <div className='ml-3 mt-32 '>
        <div>
        <select name="role" id="role" className='w-[400px] h-[30px] px-2 rounded bg-stone-200'>
            <option value="role">Select Your Role</option>
            <option value="Principal">Principal</option>
            <option value="Teacher">Teacher</option>
            <option value="Disciplinary Staff">Disciplinary Staff</option>
            <option value="Students">Students</option>
        </select>
        </div>
        <div>
            <form action="submit">
            <input type="text" placeholder='Enter your full names' className='border mt-10 w-[400px] h-[35px] rounded px-3 bg-stone-200' />
        <input type="email" placeholder='Enter a valid email' className='border mt-10 w-[400px] h-[35px] rounded px-3 bg-stone-200 block' />
        <input type="text" placeholder='Enter your phone number' className='border mt-10 w-[400px] h-[35px] rounded px-3 bg-stone-200' />
        <button type='submit' className='border mt-12  w-[400px] h-[30px] rounded-lg bg-[#51cfe0] block'> SignUp</button>
            </form>
            <div className='flex  mt-8 ml-20'>
                <h1>Already have an account?
                    <Link  to='/login'   className='text- pl-2'>Login</Link>
                </h1>
               
            </div>
       
        </div>
       
        
     </div>
     </div>
    </div>
  )
}

export default SignUp
