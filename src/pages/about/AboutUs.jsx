import React from 'react'
import { Book,
         Bell,
         Tv,
         Users,
         Lock,
         UsersRound,
         UserRound,
         GraduationCap
         


 } from 'lucide-react'
 import image from "../../assets/images/image9.jpg"
 import image1 from "../../assets/images/image11.png"
 import image2 from "../../assets/images/image12.png"
 import image3 from "../../assets/images/image13.png"
 import image4 from "../../assets/images/image14.png"
import { Link } from 'react-router'
 

const AboutUs = () => {
  return (
    <div>
        <div className='flex justify-between'>
        <div className="flex mt-5 gap-1 ml-5 ">
                    <Book/>
                    <h1 className='font-bold'>New Vision Comprehensive College</h1>

                </div>

        <div className=''>
            <nav className='flex gap-10 list-none mr-10 mt-3'>
                <Link to= "/"><li className='mt-2'><a href="/"> Home</a></li></Link>
                <Link to="/contact-us"><li className='mt-2'><a href="#"> Contact</a></li></Link>
                <Link to="/about-us"><li className='mt-2'><a href="#"> About Us</a></li></Link>
                <div className='border h-10 w-10 rounded-full bg-gray-200 '> <Bell className='mt-2 ml-[6px]'/></div>
               <button><img src={image} alt="" className='w-12 h-12 rounded-full' /></button> 

            </nav>
        </div>
        </div>
        <div className='border mt-2'></div>
        <div>
            <h1 className='text-center text-4xl  mt-8 font-poppins font-bold sm:text-4xl'>About Our ReportCard Management System</h1>
            <p className='text-center mt-5 tracking-wide font-poppins'>Welcome to the New Vision Comprehensive College Report Card Management System. <br />  Our system is designed to streamline the process of managing and distributing  students <br /> report cards, ensuring accuracy, efficiency, and accessibility by all stakeholders. 
             we aim to <br /> enhance communication between  students, teachers and administrators, fostering a collaborative <br /> environment focused on students success </p>
        </div>
        <div>
            <img src={image1} alt="" className='ml-32 mt-8' />
        </div>
        <div>
            <h1 className='ml-44 font-bold text-4xl sm:text-3xl '>Key Features</h1>
        </div>
        <div className='flex gap-8'>
          <div className='border w-[22%] ml-40 mt-10 h-36 rounded-lg'>
            <Tv className='ml-3 mt-4'/>
            <h1 className='ml-3 mt-2 text-gray-600 font-bold font-poppins'>Comprehensive Reporting</h1>
            <p className='ml-3 text-gray-600 font-poppins text-md mt-1'>Generate detailed and insightful reportcards with ease </p>
          </div>
          <div className='border w-[22%]  mt-10 h-36 rounded-lg'>
            <Users className='ml-3 mt-4'/>
            <h1 className='ml-3 mt-2 text-gray-600 font-bold font-poppins'>User-Friendly Interface</h1>
            <p className='ml-3 text-gray-600 font-poppins text-md mt-1'>Intuitive design for seamless navigation and use</p>
          </div>
          <div className='border w-[22%]  mt-10 h-36 rounded-lg'>
          <Lock className='ml-3 mt-4' />
          <h1 className='ml-3 mt-2 text-gray-600 font-bold font-poppins'>Secure Access</h1>
          <p className='ml-3 text-gray-600 font-poppins text-md mt-1'>Ensure data privacy and security with role-based access control</p>
          </div>

      </div>
      <div>
            <img src={image2} alt="" className='ml-32 mt-8' />
        </div>
        <div>
            <h1 className='ml-44 font-bold text-4xl sm:text-3xl '>Benefits</h1>
        </div>
        <div className='flex gap-8'>
          <div className='border w-[22%] ml-40 mt-10 h-40 rounded-lg'>
            < UsersRound className='ml-3 mt-4'/>
            <h1 className='ml-3 mt-1 text-gray-600 font-bold font-poppins'>For Teachers</h1>
            <p className='ml-3 text-gray-600 font-poppins text-md mt-1'>Efficiently manage and distribute reportcards, saving time and reducing administrative burden </p>
          </div>
          <div className='border w-[22%]  mt-10 h-40 rounded-lg'>
            < GraduationCap className='ml-3 mt-4'/>
            <h1 className='ml-3 mt-1 text-gray-600 font-bold font-poppins'>For Students</h1>
            <p className='ml-3 text-gray-600 font-poppins text-md mt-1'>Access report cards anytime, track academic progress, and identify areas for improvement</p>
          </div>
          <div className='border w-[22%]  mt-10 h-40 rounded-lg'>
          <UserRound className='ml-3 mt-1' />
          <h1 className='ml-3 mt-2 text-gray-600 font-bold font-poppins'>For Administrators</h1>
          <p className='ml-3 text-gray-600 font-poppins text-md mt-1 '>Gain a comprehensive overview of student performance, monitor trends, and support data driven decision-making.</p>
          </div>
         
      </div>

      <div>
            <img src={image3} alt="" className='ml-32 mt-8' />
        </div>
        <div>
            <h1 className='ml-44 font-bold text-4xl sm:text-3xl font-poppins '>Our Mission</h1>
            <p className='text-center mt-2 tracking-wide font-poppins'>At New Vision Comprehensive College, Our mission is to provide a nurturing and challenging educational  <br /> environment 
            that empowers  the students  to achieve their full potential. This report card management <br /> system aligns with our commitment to excellence  by providing  a transparent and efficien tool for <br /> monitoring   and supporting  students progress.we believe in fostering a strong patnership between  <br />students, teachers, and parents to ensure  every student thrives</p>
        </div>
        <div>
            <img src={image4} alt="" className='ml-32 mt-8' />
        </div>

        <div>
        <p className='text-center mt-24 text-gray-600 mb-5'>@2025 New Vision Comprehensive College. All rights reserved.</p>
      </div>
         

    </div>
  )
}

export default AboutUs
