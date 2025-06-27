import React from 'react'
import { useEffect, useState } from 'react'
import {LineChart,
        Line,
        XAxis,
        YAxis,
        CartesianGrid,
        Tooltip,
        ResponsiveContainer

 }from "recharts"
  

const StudentLineGraph = () => {
    
        const[data,setData] = useState([]);
        
        useEffect(()=>{
            const MockData = [
                {sequence:"Seq1", average:13},
                {sequence:"Seq2", average:16},
                {sequence:"seq3", average:12},
                {sequence:"seq4", average:19},
                {sequence:"seq5", average:14},
                {sequence:"seq6", average:11}
            ];
            setTimeout(()=>{
                setData(MockData)
            },1000)
        },[])
    
      
    
  return (
    <div className='p-6 max-w-4xl mx-auto'>
    {data.length === 0 ? (
        <p className='text-gray-500 italic'>Performance Loading.....</p>
    ):(
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
                <XAxis dataKey="sequence"/>
                <YAxis domain={[0,20]}/>
                <Line 
                type="monotone"
                dataKey="average"
                stroke='#6B7280'
                strokeWidth={2}
                 />
                 <Tooltip/>

            </LineChart>

        </ResponsiveContainer>
    )}
    </div>
  )
}

export default StudentLineGraph
