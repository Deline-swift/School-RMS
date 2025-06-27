import React from 'react'
import { useState, useEffect } from 'react'
import StudentProgressList from './StudentProgressList';
import StudentProgressBar from './StudentProgressBar';
import StudentLineGraph from '../../components/graph/StudentLineGraph';

const StudentDashboard = ({average,name,max=20}) => {
    const trendValue = Math.round((average/max)*100);
    const [activestate, setActiveState] = useState("Dashboard");
    const[value,setValue] = useState([])
    const MenuItems = [
        {name:"Dashboard", icon:<House/>},
        {name:"ReportCards", icon:<MonitorPlay/>},
        {name:"Attendance", icon:<Calendar1/>},
        {name:"Assignments", icon:<File/>},
        {name:"announcement", icon:<Bell/>}
    ];
    const Student = [
        {name:"Ambe Zayah-Rain", average:12}
    ]
    useEffect(() => {
                const fetchStudents = () => {
                  setTimeout(() => {
                    setValue(Student);
                  }, 1000);
                };
            
                fetchStudents();
              }, []);
    
  return (
    <div>
    <div className='flex gap-8 lg:gap-36  md:gap-36'>


    <div className=' h-screen p-4 mt-5 flex-1/3 lg:flex-1/2 md:1/2'>
          <div className='flex gap-2'>
           <Book/>
           <h1>New Vision Comprehensive College</h1>
          </div>
        <ul className='space-y-2'>
            {MenuItems.map((item) =>(
               <div className='flex gap-2 mt-7  p-2 hover:bg-gray-300 hover:w-[65%] hover:rounded-lg font-poppins tracking-wide'>
              <p>{item.icon}</p>
              <p>{item.name}</p>

               </div>
            ))}
        </ul>
       
        
    </div>
    <div className='mt-8 flex-1/2 lg:flex-1 md:flex-1/2'>
        <h1 className='font-bold font-poppins text-2xl lg:text-3xl tracking-wide'>Dashboard</h1>
        <h1 className='mt-4 font-bold text-xl font-poppins tracking-wide'>Academic Progress</h1>
        <StudentProgressList/>

        <div className='border mt-12 w-[92%] h-[400px] rounded-lg'>
            <div className='mt-5 ml-5 font-bold font-poppins tracking-wide'>
                <h1>Grade Trend</h1>
                <div>
                <p>{trendValue}</p>
      </div>
      <StudentLineGraph/>
      <div>
        <h1 className='text-xl font-bold font-poppins mt-2'>Recent Announcements</h1>
      </div>
              
                
                
            </div>
        </div>
        
    </div>

    </div>
   
    </div>
    
   
  )
}

export default StudentDashboard
