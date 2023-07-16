import React from 'react';
import { Link } from 'react-router-dom'
import {RiArrowDropDownLine } from "react-icons/ri"

export const AdminSidebar = () => {
    return (
        <div className=' text-white h-full py-5 px-6 w-[14 rem]'>
            <div className='name and avatar mt-5 mb-16 flex items-center justify-evenly w-full'>
    <img src='' alt='avatar' className='w-6 h-6 rounded-full bg-red-600 mr-2'/>
    <p className='text-xs'>Chisom@gmail.com</p>
    <RiArrowDropDownLine fontSize={24} className='cursor-pointer'/>
            </div>
           <ul className='flex flex-col gap-5 ' >
            <Link to= "/admin-dashboard/overview" className=' hover:text-[#EC8736]' > <li className='text-sm flex items-center justify-between' >Overview <span>+</span></li></Link>
            <Link to= "/admin-dashboard/rooms" className=' hover:text-[#EC8736]'> <li className='text-sm flex items-center justify-between'> Rooms  <span>+</span></li></Link>
            <Link to= "/admin-dashboard/students" className=' hover:text-[#EC8736]'><li className='text-sm flex items-center justify-between'> Students<span>+</span></li></Link>
            <Link to= "/dashboard/notice-board" className=' hover:text-[#EC8736]'> <li className='text-sm flex items-center justify-between'> View Complaints <span>+</span></li></Link>
           </ul>
        </div>
      )
}
