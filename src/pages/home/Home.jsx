import { Book,
      Users,
      File,
      ShieldCheck,
      Tv,
      Lock,

} from 'lucide-react'
import React from 'react'
import image from  "../../assets/images/image15.jpg"
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
          <div className='border w-[26%] ml-40 mt-10 h-40 rounded-lg  transform transition duration-300 
                hover:scale-105 hover:-translate-y-2'>
            <Users className='ml-3 mt-8'/>
            <h1 className='ml-3 mt-2 text-gray-600 font-bold font-poppins'>Users Roles</h1>
            <p className='ml-3 text-gray-600 font-poppins text-md'>Different users roles for administartors, teachers and students</p>
          </div>
          <div className='border w-[26%]  mt-10 h-40 rounded-lg  transform transition duration-300 
                hover:scale-105 hover:-translate-y-2'>
            <File className='ml-3 mt-8'/>
            <h1 className='ml-3 mt-2 text-gray-600 font-bold font-poppins'>Report Card Access</h1>
            <p className='ml-3 text-gray-600 font-poppins text-md'>Easy access to students report cards</p>
          </div>
          <div className='border w-[22%]  mt-10 h-40 rounded-lg  transform transition duration-300 
                hover:scale-105 hover:-translate-y-2'>
          <ShieldCheck className='ml-3 mt-8' />
          <h1 className='ml-3 mt-2 text-gray-600 font-bold font-poppins'>Security</h1>
          <p className='ml-3 text-gray-600 font-poppins text-md'>Secure access to sensitive information</p>
          </div>
      </div>
      <div className='w-[80%] ml-[110px] mt-12 '>
        <img src={image} alt="" className='rounded-lg' />
      </div>
      <div>
        <h1 className='mt-12 ml-40 text-4xl font-poppins font-bold'>Benefits</h1>
      </div>
      <div className='flex gap-8'>
          <div className='border w-[26%] ml-40 mt-10 h-40 rounded-lg  transform transition duration-300 
                hover:scale-105 hover:-translate-y-2'>
            <Tv className='ml-3 mt-4'/>
            <h1 className='ml-3 mt-2 text-gray-600 font-bold font-poppins'>Comprehensive Reporting</h1>
            <p className='ml-3 text-gray-600 font-poppins text-md mt-1'>Generate detailed and insightful reportcards with ease </p>
          </div>
          <div className='border w-[26%]  mt-10 h-40 rounded-lg  transform transition duration-300 
                hover:scale-105 hover:-translate-y-2'>
            <Users className='ml-3 mt-4'/>
            <h1 className='ml-3 mt-2 text-gray-600 font-bold font-poppins'>User-Friendly Interface</h1>
            <p className='ml-3 text-gray-600 font-poppins text-md mt-1'>Intuitive design for seamless navigation and use</p>
          </div>
          <div className='border w-[23%]  mt-10 h-40 rounded-lg  transform transition duration-300 
                hover:scale-105 hover:-translate-y-2'>
          <Lock className='ml-3 mt-4' />
          <h1 className='ml-3 mt-2 text-gray-600 font-bold font-poppins'>Secure Access</h1>
          <p className='ml-3 text-gray-600 font-poppins text-md mt-1'>Ensure data privacy and security with role-based access control</p>
          </div>

      </div>
      <div>
        <p className='text-center mt-20 text-gray-600 mb-5'>@2025 New Vision Comprehensive College. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Home
