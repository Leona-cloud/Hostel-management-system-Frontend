import React, { useEffect, useRef, useState } from "react";
import {  useNavigate } from "react-router-dom";
import axiosInstance from "../utils/helper";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

const RegisterCont1 = () => {
  const [data, setData] = useState({
    gender: "",
    phoneNumber: "",
    department: "",
    nextOfKin: "",
    nextOfKinPhoneNumber: "",
  });

  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const [success, setSuccess] = useState("");
  const  toast = useToast();
  const navigate = useNavigate();
 
  const handleChange = ({ currentTarget: input }) => {
    setError("");
    setData({ ...data, [input.name]: input.value });
  };

  const uploadImage =  () => {
    const imageData = new FormData();
    imageData.append("file", image);
    imageData.append("upload_preset", "xaqimipi");
    imageData.append("cloud_name", "dehufiqyo");
    axios.post(" https://api.cloudinary.com/v1_1/dehufiqyo/image/upload",
    imageData,
    )
      .then( async(resp) =>{
        console.log(resp)
        const url =  "https://hostel-mgt.onrender.com/api/auth/student/update-details"
        const {data: res} = await axiosInstance.post(url, {...data, studentImage:resp.data.url});
        console.log(res.data.student, 'response')
        localStorage.setItem("student", JSON.stringify(res.data.student))
        toast({
          title: 'Success',
          description:"Upload successful" ,
          position:"top-right",
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
        if(res.success === true){
          console.log('here')
          navigate('/setup-hostel')
        }
      })
      .catch((err) =>  toast({
        title: 'Error',
        description:err.response.data.message ,
        position:"top-right",
        status: 'error',
        duration: 9000,
        isClosable: true,
      }));
  };


  // useEffect(() => {
   
  //   if (success) {
  //     const timer = setTimeout(() => {
  //       navigate("/setup-hostel");
  //     }, 3000);
  //     return () => clearTimeout(timer);
  //   }
  // }, [success]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  w-full bg-slate-300">
      <div className="flex flex-col justify-center items-center"></div>
      <div className="bg-gray-100 flex flex-col justify-center items-center  rounded-lg">
        <form
          className="max-w-[400px]  w-full max-auto bg-white p-7 rounded-lg"
        >
          <h2 className=" text-sm font-bold">Tell us more about you</h2>
          <p className="text-sm">Your information is secure.</p>
          <br />
          <div>
            <label>Upload picture</label>
            <input
              type="file"
              name="studentImage"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <div className="flex flex-col py-2">
            <label>Department</label>
            <input  value={data.department}  onChange={handleChange} className="border p-0.5" type="text" name="department" />
          </div>
          <div>
            <label>Choose Gender:</label>
            <select  value={data.gender}className="border p-0.5 py-1" name="gender" id="gender" onChange={handleChange}>
              <option value="choose option">Choose option</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </div>
          <div className="flex flex-col py-2">
            <label>Phone number</label>
            <input value={data.phoneNumber}  onChange={handleChange} className="border p-0.5" type="tel" name="phoneNumber"/>
          </div>
          <div className="flex flex-col py-2">
            <label>Next of kin</label>
            <input value={data.nextOfKin}  onChange={handleChange} className="border p-0.5" type="text" name="nextOfKin" />
          </div>
          <div className="flex flex-col py-2">
            <label>Next of kin phone number</label>
            <input value={data.nextOfKinPhoneNumber}  onChange={handleChange} className="border p-0.5" type="tel" name="nextOfKinPhoneNumber" />
          </div>
          {error && <div>{error}</div>}
          {msg && <div>{msg}</div>}
          {}
          <button type="button" className="border p-0.5 w-full my-5 py-2 bg-black text-white hover:bg-slate-400 " onClick={uploadImage}>
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterCont1;
