import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/helper";

const UpdateNoticeBoard = () => {

    const [data, setData] = useState({
        heading: "",
        body: "",
      });
    
      const [error, setError] = useState("");
      const [msg, setMsg] = useState("");
      const [success, setSuccess] = useState("");
      const navigate = useNavigate();
    
      const handleChange = ({ currentTarget: input }) => {
        setError("");
        setData({ ...data, [input.name]: input.value });
      };
    
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const url = "https://hostel-mgt.onrender.com/api/hostel/update-notice-board";
          const { data: res } = await axiosInstance.post(url, data);
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
            navigate("/admin-dashboard/overview");
          }, 3000);
          return () => clearTimeout(timer);
        }
      }, [success]);

  return (
    <div className="w-full py-16 px-10 " >
    <form onSubmit={handleSubmit}>
    <div className="title my-5">
    <p className="font-semibold">Update Notice Board.</p>
    <p className="text-[#475569] text-sm">Update the notice board.</p>
  </div>
  <div className="mb-5">
    <label className="mr-6">Heading:</label><span>
    <input value={data.heading} onChange={handleChange}  className='border' name="heading" type="text"/></span>
  </div>
  <div className="flex mb-8">
  <label className="mr-6">Body:</label>
      <textarea value={data.body} onChange={handleChange} className="border w-96  h-4/5" placeholder="Please type in a complaint" id="body" name="body" rows="10" cols="66"> </textarea>
  </div>
  <div className="flex ml-24">
    <button className="border w-80 py-2 bg-black text-white hover:bg-slate-400 " type="submit" >
      Submit
    </button>
  </div>
    </form>
</div>
  )
}

export default UpdateNoticeBoard