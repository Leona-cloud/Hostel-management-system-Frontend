import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    fullName: "",
    matricNo: "",
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
      const url = "https://hostel-mgt.onrender.com/api/auth/student/register";
      const { data: res } = await axios.post(url, data);
      if (res.success) {
        setMsg(res.message);
        setSuccess(true);
        setError("");
        localStorage.setItem("access_token",res.accessToken)
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
          className="max-w-[400px] w-full max-auto bg-white p-4 rounded-lg"
          onSubmit={handleSubmit}
        >
          <h2 className=" text-sm font-bold">Hello, welcome to HostelX</h2>
          <p className="text-sm">Register an account to continue.</p>
          <br />
          <div className="flex flex-col py-2">
            <label>Email</label>
            <input
              className="border p-2"
              value={data.email}
              onChange={handleChange}
              name="email"
              type="email"
            />
          </div>
          <div className="flex flex-col py-2">
            <label>Matric-no</label>
            <input
              className="border p-2"
              value={data.matricNo}
              onChange={handleChange}
              name="matricNo"
              type="text"
            />
          </div>
          <div className="flex flex-col py-2">
            <label>FullName</label>
            <input
              className="border p-2"
              value={data.fullName}
              onChange={handleChange}
              name="fullName"
              type="text"
            />
          </div>
          <div className="flex flex-col py-2">
            <label>Password</label>
            <input
              className="border p-2"
              value={data.password}
              onChange={handleChange}
              name="password"
              type="password"
            />
          </div>
          {error && <div>{error}</div>}
          {msg && <div>{msg}</div>}
          {}
          <div className="flex justify-between text-black py-2">
            <p>Already have an account? </p>
            <Link className="text-orange-500" to="/">
              <p>
                <u>Sign in</u>
              </p>
            </Link>
          </div>
          <button className="border w-full my-5 py-2 bg-black text-white hover:bg-slate-400 ">
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
