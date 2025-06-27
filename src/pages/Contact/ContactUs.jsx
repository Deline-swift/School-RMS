import React from 'react'
import image from "../../assets/images/image9.jpg"
import { Bell,Book } from 'lucide-react'
import { Link } from 'react-router'
import MapComponent from '../../components/map/MapComponent'




const ContactUs = () => {
  return (
    <div className=''>
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
        <div className='border mt-3 '></div>
        <h1 className='text-2xl ml-40 font-semibold font-poppins mt-8'>Contact Us</h1>
        <p className='ml-40 font-poppins text-gray-400 '> We are here to help! Reach out to us with any questions or concerns you may have. </p>
        <div className='border w-[60%] ml-40 mt-8 h-[600px] rounded-lg bg-white  '>
            <form action="submit" className='mt-8 ml-16 flex flex-col gap-2 '>
                <label className='block mb-1' >Your Name</label>
                <input 
                type="text"
                placeholder="Enter your user's name" 
                className='border w-[90%] rounded h-[45px] pl-3 '
                 />
                 <label className='block mt-5'>Your Email</label>
                 <input 
                 type="email"
                 placeholder='Enter your email'
                 className='border w-[90%] rounded h-[45px] pl-3'
                  />
                 <label  className='block mt-5'>Subject</label>
                 <input 
                 type="text"
                 placeholder='Enter the subject'
                 className='border w-[90%] rounded h-[45px] pl-3'
                  />
                  <label className='block mt-5' >Message</label>
                  <textarea name="message" id="message" className='border w-[90%] h-[130px] rounded'>

                  </textarea>
                  <button className='mt-4 border w-32 h-10 lg:ml-[300px] ml-7 rounded-full bg-[#51cfe0] '>Submit</button>

            </form>




        </div>
        <div>
                <h1 className='mt-8 ml-40 lg:text-3xl sm:text-2xl font-poppins font-bold'>Additional Contact Information</h1>
               
            </div>
            <div className='flex'>
                    <div className='border border-gray-300 w-[18%] ml-40 mt-7'></div>
                    <div className='border border-gray-300 w-[38%] ml-12 mt-7 '></div>
                </div>
                <div className='flex flex-col lg:flex-row '>
                    <div className='ml-40 mt-8'>
                        <h1>Phone Number</h1>
                        <h2>(555)-123-4567</h2>
                    </div>
                    <div className='mt-8 ml-40 lg:ml-48'>
                        <h1>Email address</h1>
                        <h2>Info@newvisioncollege.edu</h2>
                    </div>
                </div>
                <div className='border mt-12 w-[60%] ml-40  border-gray-300'></div>
                <div className='ml-40 mt-6'>
                    <h1>Physical Address</h1>
                    <h2>mile 4 Bamenda,</h2>
                    <h3>Nketesoh Nkwen</h3>
                </div>
                <div>
                    <MapComponent/>
                </div>
                <div>
        <p className='lg:ml-[400px] text-center lg:mt-24 mt-7 text-gray-600 mb-5'>@2025 New Vision Comprehensive College. All rights reserved.</p>
      </div>

    </div>
    
  )
}

export default ContactUs
