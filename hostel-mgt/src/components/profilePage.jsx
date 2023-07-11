import React from "react";

const ProfilePage = () => {
  return (
    <div className="w-full py-16 px-10 ">
      <div className="title my-5">
        <p className="font-semibold">Hello, Students</p>
        <p className="text-[#475569] text-sm">Manage your accounts from here</p>
      </div>
      <div className=" flex justify-between w-full h-full gap-9 rounded-lg">
      
        <div className="flex flex-col justify-center items-center h-full gap-9 w-1/4 rounded-lg">
        <p>Full-name: </p>
        <p>Matric-no:</p>
        <p>Department: </p>
        <p>level: </p>
        <p>Gender: </p>
        <p>Email: </p>
        </div>
        <div className="flex justify-between">
          <img src="" alt="avatar" className="w-20 h-20  bg-slate-200 mr-2" />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
