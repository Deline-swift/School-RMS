import React from 'react'
import { useEffect, useState } from 'react'
import StudentProgressBar from './StudentProgressBar';

const StudentProgressList = () => {
    const[students, setStudents] = useState([]);
    // used as mockdata
    const StudentData = [
       
     {name: "Ambe Zayah-Rain", average:5},
    
    ];
      useEffect(() => {
            const fetchStudents = () => {
              setTimeout(() => {
                setStudents(StudentData);
              }, 1000);
            };
        
            fetchStudents();
          }, []);
  return (
    <div className='  mx-auto'>
      <h2 className='text-xl font-bold  text-gray-800'></h2>
      <div>
      {students.length > 0 ? (
        students.map((student, index) => (
          <StudentProgressBar
            key={index}
            average={student.average}
          />
        ))
      ) : (
        <p className="text-gray-500 italic">Loading student progress...</p>
      )}
      </div>
      
    </div>
  )
}

export default StudentProgressList
