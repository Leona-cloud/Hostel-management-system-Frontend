import React from 'react'
import { Link } from 'react-router-dom'

const Overview = () => {
  return (
    <div className='w-full py-16 px-10 '>
         <div className='title'>
            <p className='font-semibold'>Hello, Students</p>
            <p className='text-[#475569] text-sm'>Manage your accounts from here</p>
         </div>

         <div className='flex items-center gap-5 justify-center mt-10'>
            <div className='border p-8'> <Link to='/dashboard/notice-board'>Notice Board</Link></div>
            <div className='border p-8'> <Link to='/dashboard/lodge-complaints'>Raise a complaint</Link></div>
         </div>
    </div>
  )
}

export default Overview