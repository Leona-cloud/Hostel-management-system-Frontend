import React, { useEffect, useRef, useState } from "react";
import {  useNavigate } from "react-router-dom";
import axiosInstance from "../utils/helper";
import { useToast } from "@chakra-ui/react";

const RegisterCont1 = () => {
  const [data, setData] = useState({
    image: "",
    gender: "",
    phoneNumber: "",
    department: "",
    nextOfKin: "",
    nextOfKinPhoneNumber: "",
  });

  const image = useRef(null)
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const [success, setSuccess] = useState("");
  const  toast = useToast();
  const navigate = useNavigate();
  console.log(data)

  const handleChange = ({ currentTarget: input }) => {
    setError("");
    setData({ ...data, [input.name]: input.value });
  };

  const handleUpload=(e)=>{
    const [file] = e.target.files
console.log(file.name)
image.current.file = file
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url =
        "https://hostel-mgt.onrender.com/api/auth/student/update-details";
      const { data: res } = await axiosInstance.post(url, {...data});
      if (res.success) {
        setMsg(res.message);
        setSuccess(true);
        setError("");
        navigate("/setup-hostel",{gender:data.gender})
      }
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
        toast({
          title: 'Error',
          description:error.response.data.message ,
          position:"top-right",
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      }
    }
  };

  // const handleSelect = ()=>{

  // }

  useEffect(() => {
    console.log(success, "success");
    if (success) {
      const timer = setTimeout(() => {
        navigate("/register-cont");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  w-full bg-slate-300">
      <div className="flex flex-col justify-center items-center"></div>
      <div className="bg-gray-100 flex flex-col justify-center items-center  rounded-lg">
        <form
          className="max-w-[400px]  w-full max-auto bg-white p-7 rounded-lg"
          onSubmit={handleSubmit}
        >
          <h2 className=" text-sm font-bold">Tell us more about you</h2>
          <p className="text-sm">Your information is secure.</p>
          <br />
          <div>
            <label>Upload picture</label>
            <input
              placeholder="picture"
             ref={image}
              onChange={handleUpload}
              type="file"
              name="image"
            />
          </div>
          <div className="flex flex-col py-2">
            <label>Department</label>
            <input  value={data.department}  onChange={handleChange} className="border p-0.5" type="text" name="department" />
          </div>
          <div>
            <label>Choose Gender:</label>
            <select className="border p-0.5 py-1" name="gender" id="gender" onChange={handleChange}>
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
          <button className="border p-0.5 w-full my-5 py-2 bg-black text-white hover:bg-slate-400 " onClick={handleSubmit}>
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterCont1;
