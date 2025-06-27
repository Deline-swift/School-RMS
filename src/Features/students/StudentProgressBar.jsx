import React from 'react'
import { useState, useEffect } from 'react';

const StudentProgressBar = ({name,average, max=20}) => {
    const progress = Math.round((average/max)*100);
    const getColor = ()=>{
        if(progress<=25) return "bg-red-500";
        if(progress<=50) return "bg-purple-500";
        if(progress<=75) return "bg-yellow-500";
        if(progress<=90) return "bg-blue-500"
        return "bg-green-500"
    }
   
  
  return (
    <div className=' w-full flex gap-3'>
         <div className="w-full bg-gray-200 rounded-full h-4 mt-1 ">
            <div className='flex justify-between mb-1  w-full'>
        <div
          className={`h-4 rounded-full transition-all duration-500 ${getColor()}`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
        </div>
            <span>{name}</span>
            <span className='mr-3'> {progress}%</span>
           
        </div>
      
      
    
    
  )
}

export default StudentProgressBar
