import React from "react";

const MakePayment = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full bg-slate-300">
      <div className="flex flex-col justify-start ">
        <h2 className="text-4xl font-normal  font-mono">MAKE PAYMENT</h2>
      </div>

      <div className="bg-gray-100 flex flex-col justify-center items-center  rounded-lg">
        <form className="max-w-[400px] w-full max-auto bg-white p-4 rounded-lg">
          <h2 className=" text-sm font-bold">Pay hostel dues</h2>
          <p className="text-sm">make payment.</p>
          <br />
          <div className="flex flex-col py-2">
            <label>Hostel Name</label>
            <input className="border p-2" type="text" />
          </div>
          <div className="flex flex-col py-2">
            <label>Hostel fee</label>
            <input className="border p-2" type="text" />
          </div>
          <button className="border w-full my-5 py-2 bg-black text-white hover:bg-slate-400 rounded-md">
            Proceed
          </button>
        </form>
      </div>
    </div>
  );
};

export default MakePayment;
