import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/helper";
import { BsToggleOff } from 'react-icons/bs';
import { useToast } from "@chakra-ui/react";

const UpdateRooms = () => {

  const [data, setData] = useState({
    roomNumber: "",
    block: "",
  });

  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const  toast = useToast();

  const handleChange = ({ currentTarget: input }) => {
    setError("");
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "https://hostel-mgt.onrender.com/api/hostel/add-new-room";
      const { data: res } = await axiosInstance.post(url, {...data});
      if (res.success) {
        setMsg(res.message);
        setSuccess(true);
        setError("");
        toast({
          title: 'Success',
          description:"New Room Added Successfuly" ,
          position:"top-right",
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
      }
      
    } catch (error) {
      toast({
        title: 'Error',
        description:error.response.data.message ,
        position:"top-right",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
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
        navigate("/admin-dashboard/update-rooms");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  return (
    <div className="w-full py-16 px-10 " >
      <form onSubmit={handleSubmit}>
      <div className="title border-b-2 border-gray-950" >
        <p className="font-semibold">Add new room.</p>
        <p className="text-[#475569] text-sm mb-7 ">
            Fill in the required details below
        </p>
      </div>
      <div className='mt-10'>
        <label>Room No</label>
        <br/>
        <input value={data.roomNumber} onChange={handleChange}  className='border w-80' type='text' name='roomNumber'></input>
      </div>
     
      <div className='mt-6'>
        <label>Block Name</label>
        <br/>
        <input value={data.block} onChange={handleChange}  className='border w-80' type='text' name='block'></input>       
      </div>
      {error && <div>{error}</div>}
          {msg && <div>{msg}</div>}
          {}
      <button   className='border mt-6 w-80 my-5 py-2 bg-black text-white hover:bg-slate-400 '>Add Room</button>
      </form>
  
    </div>
  )
}

export default UpdateRooms