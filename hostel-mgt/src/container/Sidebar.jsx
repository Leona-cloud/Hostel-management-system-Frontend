import React from 'react'
import { Link } from 'react-router-dom'
import {RiArrowDropDownLine} from "react-icons/ri"

const Sidebar = () => {

  const student = JSON.parse(localStorage.getItem('student'))

  return (
    <div className=' text-white h-full py-5 px-6 w-[14 rem]'>
        <div className='name and avatar mt-5 mb-16 flex items-center justify-evenly w-full'>
<img src= {student.image} alt='avatar' className='w-6 h-6 rounded-full bg-red-600 mr-2'/>
<p className='text-xs'>{student.email}</p>
<RiArrowDropDownLine fontSize={24} className='cursor-pointer'/>
        </div>
       <ul className='flex flex-col gap-5 ' >
        <Link to= "/dashboard/overview" className=' hover:text-[#EC8736]' > <li className='text-sm flex items-center justify-between' >Overview <span>+</span></li></Link>
        <Link to= "/dashboard/profile" className=' hover:text-[#EC8736]'> <li className='text-sm flex items-center justify-between'> Profile  <span>+</span></li></Link>
        <Link to= "/dashboard/lodge-complaints" className=' hover:text-[#EC8736]'><li className='text-sm flex items-center justify-between'> Lodge complaints <span>+</span></li></Link>
        <Link to= "/dashboard/notice-board" className=' hover:text-[#EC8736]'> <li className='text-sm flex items-center justify-between'> Notice board  <span>+</span></li></Link>
       </ul>
    </div>
  )
}

export default Sidebar