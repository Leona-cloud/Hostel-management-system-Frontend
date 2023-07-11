import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const DashboardShell = () => {
  return (
    <div className='flex w-full'>
        <div className='h-[100vh] bg-black '><Sidebar/></div>
        <div className='w-full'>
            <Outlet/>
        </div>
        </div>
  )
}

export default DashboardShell