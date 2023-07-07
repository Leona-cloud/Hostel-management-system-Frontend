import React from 'react'

const RegisterCont1 = () => {
  return (
    <div  className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full bg-slate-300'>
      <div className='flex flex-col justify-center items-center'>

      </div>
      <div className='bg-gray-100 flex flex-col justify-center items-center  rounded-lg'>
      <form className='max-w-[400px] w-full max-auto bg-white p-7 rounded-lg'>
        <h2 className=' text-sm font-bold'>Tell us more about you</h2>
        <p className= 'text-sm'>Your information is secure.</p>
        <br/>
        <div className='flex flex-col justify-left'>
          <input  placeholder= 'picture' className='border p-0.5' type= "file" name='Picture' />
        </div>
        <div className='flex flex-col py-1'>
          <label>FullName</label>
          <input className='border p-0.5' type="text" />
        </div>
        
        <div>
        <label for = 'Gender'>Choose Gender:</label>
        <select className = 'border p-0.5 py-1' name='gender' id='gender'>
        <option value="choose option">Choose option</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
        </select>
        </div>
        <div className='flex flex-col py-2'>
          <label>Phone number</label>
          <input className='border p-0.5' type="tel" />
        </div>
        <div className='flex flex-col py-2'>
          <label>Matric no</label>
          <input className='border p-0.5' type="text" />
        </div>
        <div className='flex flex-col py-2'>
          <label>Department</label>
          <input className='border p-0.5' type="text" />
        </div>
        <button className='border p-0.5 w-full my-5 py-2 bg-black text-white hover:bg-slate-400 '>Next</button>
      </form>
    </div>
    </div>
  )
}

export default RegisterCont1