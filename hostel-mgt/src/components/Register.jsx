import React from 'react'

const Register = () => {
  return (
    <div  className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full bg-slate-300'>
        <div className='flex flex-col justify-center items-center'>

        </div>
        <div className='bg-gray-100 flex flex-col justify-center items-center  rounded-lg'>
      <form className='max-w-[400px] w-full max-auto bg-white p-4 rounded-lg'>
        <h2 className=' text-sm font-bold'>Hello, welcome to HostelX</h2>
        <p className= 'text-sm'>Register an account to continue.</p>
        <br/>
        <div className='flex flex-col py-2'>
          <label>Email</label>
          <input className='border p-2' type="email" />
        </div>
        <div className='flex flex-col py-2'>
          <label>FullName</label>
          <input className='border p-2' type="text" />
        </div>
        <div className='flex flex-col py-2'>
          <label>Password</label>
          <input className='border p-2' type="password" />
        </div>
        <div className='flex justify-center text-black py-2'>
          
          <p>Already have an account? <a className = 'text-orange-500' href='/'>Sign in</a></p>
        </div>
        <button className='border w-full my-5 py-2 bg-black text-white hover:bg-slate-400 '>Next</button>
      </form>
        </div>
    </div>
  )
}

export default Register