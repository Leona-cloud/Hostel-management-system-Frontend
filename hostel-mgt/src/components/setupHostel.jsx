import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../utils/helper";
import { useToast } from "@chakra-ui/react";

const SetupHostel = () => {
    const [data, setData] = useState({
        hostelId: "",
        block: "",
        roomNumber: ""
      });

      console.log(data)

      localStorage.setItem('hostelId', data.hostelId)

      const [hostels, setHostels] = useState([])

     
      const [error, setError] = useState("");
      const [msg, setMsg] = useState("");
      const [success, setSuccess] = useState("");
      const navigate = useNavigate();
      const  toast = useToast();

      const gender = JSON.parse(localStorage.getItem('student')).gender
      
      console.log(gender, 'this one')

      const handleGender = async () =>{
        const genderData = {
          gender: gender
        }
        try {
          const url = "https://hostel-mgt.onrender.com/api/hostel/fetch-hostels"
        const res = await axios.post(url, {...genderData})
            console.log(res.data.data[0])
            setHostels(res.data.data)
        } catch (error) {
          console.log(error)
        }
      }

      useEffect(()=>{
        handleGender()
      },[])
    
     
      const handleChange = ({ currentTarget: input }) => {
        setError("");
        setData({ ...data, [input.name]: input.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const url =
            "https://hostel-mgt.onrender.com/api/hostel/setup-hostel";
          const { data: res } = await axiosInstance.post(url, data);
          if (res.success) {
            setMsg(res.message);
            setSuccess(true);
            setError("");
            localStorage.setItem("student", JSON.stringify(res.data.student));
            console.log(res.data.student)
            toast({
              title: 'Success',
              description:"Hostel Setup Successfully" ,
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
            navigate("/upload-certificate");
          }, 3000);
          return () => clearTimeout(timer);
        }
      }, [success]);
    
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full bg-slate-300">
          <div className="flex flex-col justify-center items-center"></div>
          <div className="bg-gray-100 flex flex-col justify-center items-center  rounded-lg">
            <form
              className="max-w-[400px]  w-full max-auto bg-white p-7 rounded-lg"
              onSubmit={handleSubmit}
            >
              <h2 className=" text-sm font-bold">Set up your hostel.</h2>
              <p className="text-sm">Your information is secure.</p>
              <br />
              <div>
                <label className="mr-4">Choose Hostel:</label>
                <select value={data.hostelId}  onChange={handleChange} className="border p-0.5 py-1"  name="hostelId" id="hostelId">
                  <option value="choose option">Choose option</option>
                  {hostels.map(hostel=>(<option value={hostel._id}  label={hostel.hostelName}/>))}
                </select>
              </div>
              <div className="flex flex-col py-2">
                <label>Block</label>
                <input value={data.block}  onChange={handleChange} className="border p-0.5" type="text" name="block"/>
              </div>
              <div className="flex flex-col py-2">
                <label>Room Number</label>
                <input value={data.roomNumber}  onChange={handleChange} className="border p-0.5" type="text" name="roomNumber" />
              </div>
              {error && <div>{error}</div>}
              {msg && <div>{msg}</div>}
              {}
              <button className="border p-0.5 w-full my-5 py-2 bg-black text-white hover:bg-slate-400 ">
                Submit
              </button>
            </form>
          </div>
        </div>
      );
}

export default SetupHostel