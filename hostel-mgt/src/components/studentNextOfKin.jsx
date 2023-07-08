import React from 'react'

const StudentNextOfKin = () => {
  return (
    <div  className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full bg-slate-300'>
        <div className='flex flex-col justify-center items-center'>

        </div>
        <div className='bg-gray-100 flex flex-col justify-center items-center  rounded-lg'>
      <form className='max-w-[400px] w-full max-auto bg-white p-4 rounded-lg'>
        <h2 className=' text-sm font-bold'>Tell us more about you</h2>
        <p className= 'text-sm'>Your information is secure.</p>
        <br/>
        <div className='flex flex-col py-2'>
          <label>Next of kin</label>
          <input className='border p-2' type="text" />
        </div>
        <div className='flex flex-col py-2'>
          <label>Next of kin phone number</label>
          <input className='border p-2' type="tel" />
        </div>
        <button className='border w-full my-5 py-2 bg-black text-white hover:bg-slate-400 '>Contine</button>
      </form>
    </div>
    </div>
  )
}

export default StudentNextOfKin