import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

  const [userData,setUserData] = useContext(AuthContext)
  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded h-60 '>
        <div className='bg-red-300 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
            <h3 className='text-lg font-medium w-1/5'> NewTask</h3>
            <h5 className='text-lg font-medium w-1/5'>Active Task</h5> 
            <h5 className='text-lg font-medium w-1/5'>Completed Task</h5> 
            <h5 className='text-lg font-medium w-1/5'>Failed Task</h5> 
        </div>
        
      <div className='h-[80%] overflow-auto'>
        {userData.map(function(elem,idx){
        return <div key={idx} className=' border-2 border-emerald-500 text-lg font-medium mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className=' text-lg font-medium w-1/5'>{elem.name}</h2>
            <h3 className=' text-lg font-medium w-1/5 !text-blue-400'>{elem.taskCount.newTask}</h3>
            <h5 className=' text-lg font-medium w-1/5 !text-yellow-400'>{elem.taskCount.active}</h5> 
            <h5 className='text-lg font-medium  w-1/5 !text-green-400'>{elem.taskCount.completed}</h5>
            <h5 className='text-lg font-medium  w-1/5 !text-red-400'>{elem.taskCount.failed}</h5>
        </div>

      })}
        
      </div>
      
    </div>
  )
}

export default AllTask
