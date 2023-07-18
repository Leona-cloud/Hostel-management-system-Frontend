import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Router, useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../utils/helper";
import { useToast } from "@chakra-ui/react";




const MakePayment = () => {



  const [error, setError] = useState("");
  const [hostelDetails, setHostelDetails] = useState({hostelName:"", hostelfee:""})
  const [msg, setMsg] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const  toast = useToast();


 
  const fetchHostels = async()=>{
    const newUrl = "https://hostel-mgt.onrender.com/api/hostel/fetch-hostelId"
    const hostelId = localStorage.getItem('hostelId');
    console.log(hostelId)
    const fetchHostel = await axios.post(newUrl, {hostelId});
    setHostelDetails({hostelName: fetchHostel.data.data.hostelName, hostelfee:fetchHostel.data.data.fee })
    console.log(fetchHostel.data.data.hostelName)
  }

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     
      const url = "https://hostel-mgt.onrender.com/api/hostel/make-payment";
      const { data: res } = await axiosInstance.post(url);
      console.log(res.initializationUrl)
      window.location.replace(res.initializationUrl)
      if (res.success) {
        setMsg(res.message);
        setSuccess(true);
        setError("");

      }
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  useEffect(() => {
    console.log(success, "success");
    if (success) {
      const timer = setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [success]);


  useEffect(() => {
    fetchHostels()
  }, []);


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full bg-slate-300">
      <div className="flex flex-col justify-start ">
        <h2 className="text-4xl font-normal  font-mono">MAKE PAYMENT</h2>
      </div>

      <div className="bg-gray-100 flex flex-col justify-center items-center  rounded-lg">
        <form className="max-w-[400px] w-full max-auto bg-white p-4 rounded-lg" onSubmit={handleSubmit}>
          <h2 className=" text-sm font-bold">Pay hostel dues</h2>
          <p className="text-sm">make payment.</p>
          <br />
          <div className="flex flex-col py-2">
            <label>Hostel Name</label>
            <input disabled={true} name="hostelId" placeholder={hostelDetails.hostelName}  className="border p-2" type="text" />
          </div>
          <div className="flex flex-col py-2">
            <label>Hostel fee</label>
            <input disabled={true} name="fee" placeholder ={hostelDetails.hostelfee} className="border p-2" type="text" />
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
