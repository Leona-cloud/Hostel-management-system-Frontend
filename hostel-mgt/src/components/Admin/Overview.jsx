import React from 'react'
import { Link } from 'react-router-dom'

const AdminOverview = () => {
  return (
    <div className='w-full py-16 px-10 '>
         <div className='title'>
            <p className='font-semibold'>Hello, Students</p>
            <p className='text-[#475569] text-sm'>Manage your accounts from here</p>
         </div>

         <div className='flex items-center gap-5  mt-10'>
            <div className='border p-16'><Link to='/admin-dashboard/verify-student'>Verify Student</Link></div>
            <div className='border p-16'><Link to='/admin-dashboard/update-notice-board'>Notice Board</Link></div>
            <div className='border p-16'><Link to='/admin-dashboard/update-rooms'>Update Rooms</Link></div>
         </div>
    </div>
  )
}

export default AdminOverview