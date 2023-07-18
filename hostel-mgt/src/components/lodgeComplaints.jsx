import React from "react";

const LodgeComplaints = () => {
  return (
    <div className="w-full py-16 px-10 ">
      <div className="title my-5">
        <p className="font-semibold">Lodge Complaints.</p>
        <p className="text-[#475569] text-sm">Lodge your complaints in the text box below.</p>
      </div>
      <div className="mb-5">
        <label className="mr-6">Title:</label><span>
        <input className='border ' type="text"/></span>
      </div>
      <div className="flex mb-8">
      <label className="mr-6">Body:</label>
          <textarea className="border w-96  h-4/5" placeholder="Please type in a complaint" id="complaints" name="complaints" rows="10" cols="66"> </textarea>
      </div>
      <div className="flex justify-center">
        <button className="border justify-center w-80 py-2 bg-black text-white hover:bg-slate-400 ">
          Submit
        </button>
      </div>
    </div>
  );
};

export default LodgeComplaints;
