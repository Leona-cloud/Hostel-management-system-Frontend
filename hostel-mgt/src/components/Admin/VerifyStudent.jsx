import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import axiosInstance from "../../utils/helper";
import { useToast } from "@chakra-ui/react";

const VerifyStudent = () => {
  const [data, setData] = useState({
    email: "",
  });

  const [clearance, setClearance] = useState("");

  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const  toast = useToast();



  const handleChange = ({ currentTarget: input }) => {
    setError("");
    setData({ ...data, [input.name]: input.value });
  };

  const handleApprove = async () => {
    try {
      const url = "https://hostel-mgt.onrender.com/api/hostel/update-status";
      const { data: res } = await axiosInstance.post(url, {
        email: clearance?.email,
        status: "checked-in",
      });
      if (res.success) {
        setMsg(res.message);
        console.log(res.studentExists);
        setClearance(res.studentExists);
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

  const handleDecline = async () => {
    try {
      const url = "https://hostel-mgt.onrender.com/api/hostel/update-status";
      const { data: res } = await axiosInstance.post(url, {
        email: clearance?.email,
      });
      if (res.success) {
        setMsg(res.message);
        console.log(res.studentExists);
        setClearance(res.studentExists);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url =
        "https://hostel-mgt.onrender.com/api/hostel/verify-certificate";
      const { data: res } = await axiosInstance.post(url, data);
      console.log(res);
      if (res.success) {
        setMsg(res.message);
        console.log(res.studentExists);
        setClearance(res.studentExists);
        setSuccess(true);
        setError("");
        toast({
          title: 'Success',
          description:"Student Verified  successfully" ,
          position:"top-right",
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.log(error)
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
        // navigate("/verify-student");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  return (
      <div className="grid grid-cols-1 sm:grid-cols-2 h-full w-full bg-slate-300">
        <div className="flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold font-mono">Verify Student</h2>
          <form
          className="max-w-[400px] w-full flex justify-between items-center max-auto bg-white p-4 rounded-lg"
          onSubmit={handleSubmit}
        >
          <label className="mr-5">Search by mail:</label>
          <input
            value={data.email}
            onChange={handleChange}
            className="mr-4 border"
            placeholder="search"
            type="email"
            name="email"
          />
          <button className="border w-24 my-5  bg-black text-white hover:bg-slate-400 rounded-lg">
            Search
          </button>
        </form>
        </div>
        <div className="bg-gray-100 px-5 py-5  rounded-lg">
          <p className="">
            Full-name: <span>{clearance?.fullName}</span>
          </p>
          <p>
            Matric-no: <span>{clearance?.matricNo}</span>
          </p>
          <p>
            Department: <span>{clearance?.department}</span>{" "}
          </p>
          <p>
            Gender: <span>{clearance?.gender}</span>
          </p>
          <p>
            Clearance Certificate:{" "}
            <span>
              <Link to={clearance?.clearanceCertificate}>
                {" "}
                {clearance?.clearanceCertificate}
              </Link>
            </span>
          </p>
          <div className="mt-64 flex justify-evenly">
            <button
              className="border w-24   bg-black text-white hover:bg-slate-400 rounded-lg"
              type="submit"
              onClick={handleApprove}
            >
              Approve
            </button>
            <button className="border w-24  bg-black text-white hover:bg-slate-400 rounded-lg" type="submit" onClick={handleDecline}>
              Decline
            </button>
          </div>
        </div>
      </div>
  );
};

export default VerifyStudent;
