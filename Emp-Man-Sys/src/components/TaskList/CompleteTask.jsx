import React from 'react'

const CompleteTask = ({data}) => {
  return (
    
        <div className='h-full w-[300px] bg-pink-400 rounded-xl flex-shrink-0 p-5'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-blue-400 px-3 py-1 rounded text-sm'>{data.category}</h3>
                <h4 className='text-sm'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold '>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>
                {data.taskDescription}
               </p>
            <div className='mt-2'>
                <button className='w-f  bg-green-400 w-full py-1 px-2 text-sm'>Complete</button>
            </div>
        </div>
  )
}

export default CompleteTask
