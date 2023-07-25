import React from 'react'
import { Outlet } from 'react-router-dom'
import DsaSidebar from './DsaSidebar'

const DsaDashboardShell = () => {
  return (
    <div className='flex w-full'>
        <div className='h-[100vh] bg-black '><DsaSidebar/></div>
        <div className='w-full'>
            <Outlet/>
        </div>
        </div>
  )
}

export default DsaDashboardShell