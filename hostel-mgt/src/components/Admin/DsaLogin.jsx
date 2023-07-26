import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useToast } from "@chakra-ui/react";


const DsaLogin = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
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
          const url = "https://hostel-mgt.onrender.com/api/auth/dsa/login";
          const { data: res } = await axios.post(url, data);
          if (res.success) {
            setMsg(res.message);
            setSuccess(true);
            setError("");
            localStorage.setItem("access_token",res.data.accessToken);
            localStorage.setItem("dsa", JSON.stringify(res.data.warden));
            toast({
              title: 'Success',
              description:"User logged in successfully" ,
              position:"top-right",
              status: 'success',
              duration: 9000,
              isClosable: true,
            });
    
          }
        } catch (error) {
          toast({
            title: 'Error',
            description:error.message ,
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
            navigate("/dsa-dashboard");
          }, 3000);
          return () => clearTimeout(timer);
        }
      }, [success]);
    
      return (
        <div  className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full bg-slate-300'>
          <div className='flex flex-col justify-center items-center'>
            <h2 className='text-4xl font-bold font-mono'>DSA Login</h2>
              
          </div>
    
        <div className='bg-gray-100 flex flex-col justify-center items-center  rounded-lg'>
          <form className='max-w-[400px] w-full max-auto bg-white p-4 rounded-lg' onSubmit={handleSubmit}>
            <h2 className=' text-sm font-bold'>Hello, welcome back</h2>
            <p className= 'text-sm'>Sign in to continue.</p>
            <br/>
            <div className='flex flex-col py-2'>
              <label>Email</label>
              <input value={data.email} onChange={handleChange} className='border p-2' type="email"  name="email"/>
            </div>
            <div className='flex flex-col py-2'>
              <label>Password</label>
              <input value={data.password} onChange={handleChange} className='border p-2' type="password" name="password"/>
            </div>
            <div className='flex justify-center text-black py-2'>
              
              <p>Don’t have an account?</p><Link className='text-orange-500' href = '/'><p><u>Sign up</u></p></Link>
            </div>
            {error && <div>{error}</div>}
              {msg && <div>{msg}</div>}
              {}
            <button className='border w-full my-5 py-2 bg-black text-white hover:bg-slate-400 '>Login</button>
          </form>
        </div>
        
    
        </div>
      )
}

export default DsaLogin