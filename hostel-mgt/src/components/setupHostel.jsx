import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";

const SetupHostel = () => {
    const [data, setData] = useState({
        hostelId: "",
        block: "",
        roomId: ""
      });
    
      const [error, setError] = useState("");
      const [msg, setMsg] = useState("");
      const [success, setSuccess] = useState("");
      const navigate = useNavigate();
      const location = useLocation()

      useEffect(()=>{
console.log(location.state)
      },[])
    
      const handleChange = ({ currentTarget: input }) => {
        setError("");
        setData({ ...data, [input.name]: input.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const url =
            "https://hostel-mgt.onrender.com/api/auth/student/update-details";
          const { data: res } = await axios.post(url, data);
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
            navigate("/register-cont");
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
                <select value={data.hostelId} className="border p-0.5 py-1" name="gender" id="gender">
                  <option value="choose option">Choose option</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                </select>
              </div>
              <div className="flex flex-col py-2">
                <label>Block</label>
                <input value={data.block}  onChange={handleChange} className="border p-0.5" type="tel" name="phoneNumber"/>
              </div>
              <div className="flex flex-col py-2">
                <label>Room Number</label>
                <input value={data.roomId}  onChange={handleChange} className="border p-0.5" type="text" name="nextOfKin" />
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