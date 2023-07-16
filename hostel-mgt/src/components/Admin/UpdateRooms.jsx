import React from 'react';
import { BsToggleOff } from 'react-icons/bs'

const UpdateRooms = () => {
  return (
    <div className="w-full py-16 px-10 ">
        <div className="title border-b-2 border-gray-950">
        <p className="font-semibold">Add new room.</p>
        <p className="text-[#475569] text-sm mb-7 ">
            Fill in the required details below
        </p>
      </div>
      <div className='mt-10'>
        <label>Room No</label>
        <br/>
        <input className='border w-80' type='text'></input>
      </div>
     
      <div className='mt-6'>
        <label>Block Name</label>
        <br/>
        <input className='border w-80' type='text'></input>       
      </div>

      <div className='mt-6'>
        <label>No of Beds</label>
        <br/>
        <input className='border w-80' type='text'></input>
      </div>

      <div className='mt-10 flex gap-x-20'>
        <div>
      <p className="font-semibold">Available for rent.</p>
        <p className="text-[#475569] text-sm mb-7 ">
        Turning this on means there is vacancy in the room. 
        </p>
        </div>
        <div className='flex justify-evensize'>
        <BsToggleOff  size={40} color='gray-300'/>
        </div>
      </div>
     
    </div>
  )
}

export default UpdateRooms