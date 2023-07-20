import React, {useEffect} from "react";





const ProfilePage = () => {

     const student = JSON.parse(localStorage.getItem('student'))

     useEffect(()=>{
      console.log(student)
    },[])
  return (
    
    <div className="w-full py-16 px-10 ">
      <div className="title my-5">
        <p className="font-semibold">Hello, Students</p>
        <p className="text-[#475569] text-sm">Manage your accounts from here</p>
      </div>
      <div className=" flex justify- w-full h-full gap-9 rounded-lg">
      
        <div className="flex flex-col h-full gap-9 w-full rounded-lg">
        <p className="">Full-name: <span>{student.fullName}</span></p>
        <p>Matric-no: <span>{student.matricNo}</span></p>
        <p>Department: <span>{student.department}</span> </p>
        <p>Gender: <span>{student.gender}</span> </p>
        <p>Email: <span>{student.email}</span></p>
        </div>
        <div className="flex justify-between">
          <img src= {student.studentImage} alt="avatar" className="w-full h-auto  bg-slate-200 mr-2" />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
