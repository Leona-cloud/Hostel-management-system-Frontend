import React from 'react';
import StudentImg from '../assets/Student.png'

const Login = () => {
  return (
    <div  className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full bg-slate-300'>
      <div className='flex flex-col justify-center items-center'>
        <h2 className='text-4xl font-bold font-mono'>Student Login</h2>
           <img className= 'object-scale-down h-48 w-96 ...' src= {StudentImg} alt='' />
      </div>

    <div className='bg-gray-100 flex flex-col justify-center items-center  rounded-lg'>
      <form className='max-w-[400px] w-full max-auto bg-white p-4 rounded-lg'>
        <h2 className=' text-sm font-bold'>Hello, welcome back</h2>
        <p className= 'text-sm'>Sign in to continue.</p>
        <br/>
        <div className='flex flex-col py-2'>
          <label>Email</label>
          <input className='border p-2' type="email" />
        </div>
        <div className='flex flex-col py-2'>
          <label>Password</label>
          <input className='border p-2' type="password" />
        </div>
        <div className='flex justify-center text-black py-2'>
          
          <p>Don’t have an account?</p><a href='/'>sign up</a>
        </div>
        <button className='border w-full my-5 py-2 bg-black text-white hover:bg-slate-400 '>Login</button>
      </form>
    </div>
    

    </div>
  )
}

export default Login