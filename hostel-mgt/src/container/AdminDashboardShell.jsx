import React from 'react';
import { Outlet } from 'react-router-dom';
import { AdminSidebar } from './AdminSidebar';

export const AdminDashboardShell = () => {
  return (
    <div className='flex w-full'>
        <div className='h-[100vh] bg-black '><AdminSidebar/></div>
        <div className='w-full'>
            <Outlet/>
        </div>
        </div>
  )
}
