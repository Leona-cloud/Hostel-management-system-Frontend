import React from 'react'

const Overview = () => {
  return (
    <div className='w-full py-16 px-10 '>
         <div className='title'>
            <p className='font-semibold'>Hello, Students</p>
            <p className='text-[#475569] text-sm'>Manage your accounts from here</p>
         </div>

         <div className='flex items-center gap-5 justify-center mt-10'>
            <div className='border p-8'>Notice Board</div>
            <div className='border p-8'>Raise a complaint</div>
            <div className='border p-8'>Phone directory</div>
         </div>
    </div>
  )
}

export default Overview