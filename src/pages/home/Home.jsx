import { Book,
      Users,
      File,
      ShieldCheck

} from 'lucide-react'
import React from 'react'
import image from '../../assets/images/image8.jpg'
import { Link } from 'react-router'


const Home = () => {
   
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex mt-5 gap-2 ml-5">
            <Book/>
            <h1 className='font-bold'>New Vision Comprehensive College</h1>
        </div>
        <div className=''>
            <nav className='flex gap-10 list-none mr-10 mt-3'>
            <Link to="/"><li className='mt-2'><a href="#"> Home</a></li></Link> 
              <Link to="/about-us"><li className='mt-2'><a href="#"> About Us</a></li></Link>  
               <Link to="/contact-us"><li className='mt-2'><a href="#"> Contact</a></li></Link>
               <Link to="/login"><button className='border w-20 h-8 rounded-lg bg-[#00d9ff] text-white mt-1'>Login</button></Link> 
            </nav>
        </div>
      </div>
      <div className='border mt-5'></div>
      <div className="image  h-[650px] bg-cover mt-8 w-[80%] max-w-6xl mx-auto  rounded-2xl ">
      <div className=' inset-0  rounded-2xl  '></div>
       <h1 className='text-white font-extrabold text-6xl text-center pt-[180px] tracking-wider px-3 space-y-3 font-poppins '>Welcome To New Vision  <br /> Comprehensive College ReportCard Management  <br />System</h1>
       <p className='text-gray-200 text-center mt-4 font-semibold tracking-wide font-poppins'>Access and manage students reportcards efficiently and securely.our system benefits teachers, <br /> Adminitrators and students by providing a streamlined and user friendly experience</p>
      <div>
      <Link to="signup"><button className=' rounded-lg w-28 mt-10 ml-[350px] h-10 bg-[#00d9ff]'>Get Started</button></Link>
      </div>
        
      </div>
      <div>
        <h1 className='mt-12 ml-40 text-5xl font-poppins font-bold'>Key Features</h1>
        <p className='mt-3 ml-40 font-poppins text-gray-600 '>Our system offers a range of features to streamline report card management.</p>
      </div>
      <div className='flex gap-8'>
          <div className='border w-[26%] ml-40 mt-10 h-40 rounded-lg'>
            <Users className='ml-3 mt-8'/>
            <h1 className='ml-3 mt-2 text-gray-600 font-bold font-poppins'>Users Roles</h1>
            <p className='ml-3 text-gray-600 font-poppins text-md'>Different users roles for administartors, teachers and students</p>
          </div>
          <div className='border w-[26%]  mt-10 h-40 rounded-lg'>
            <File className='ml-3 mt-8'/>
            <h1 className='ml-3 mt-2 text-gray-600 font-bold font-poppins'>Report Card Access</h1>
            <p className='ml-3 text-gray-600 font-poppins text-md'>Easy access to students report cards</p>
          </div>
          <div className='border w-[25%]  mt-10 h-40 rounded-lg'>
          <ShieldCheck className='ml-3 mt-8' />
          <h1 className='ml-3 mt-2 text-gray-600 font-bold font-poppins'>Security</h1>
          <p className='ml-3 text-gray-600 font-poppins text-md'>Secure access to sensitive information</p>
          </div>
      </div>
      <div>
        <p className='text-center mt-24 text-gray-600 mb-5'>@2025 New Vision Comprehensive College. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Home
