import React from 'react'
import emailImg from '../assets/email.png'

const EmailVerification = () => {
  return (
    <div  className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full bg-slate-300'>
        <div className='flex flex-col justify-center items-center'>
        <h2 className='text-4xl font-bold font-mono'>Email Verification</h2>
           <img className= 'object-scale-down h-48 w-96 ...' src= {emailImg} alt='' />
        </div>
        <div className='bg-gray-100 flex flex-col justify-center items-center  rounded-lg'>
      <form className='max-w-[400px] w-full max-auto bg-white p-4 rounded-lg'>
        <h2 className=' text-sm font-bold'>Verify your email.</h2>
        <p className= 'text-sm'>A link will be sent to your mail address</p>
        <br/>
        <div className='flex flex-col py-2'>
          <label>Email</label>
          <input className='border p-2' type="email" />
        </div> 
        <button className='border w-full my-5 py-2 bg-black text-white hover:bg-slate-400 '>proceed</button>
      </form>
    </div>
    </div>
  )
}

export default EmailVerification