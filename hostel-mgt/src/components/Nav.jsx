import React from "react";
import { FaTimes } from "react-icons/fa";
import HomeImg from "../assets/Home.png";

const Nav = () => {
  return (
    <div>
      <div className=" shadow-md w-full fixed top-0 left-0">
        <div className="md:grid  py-2 justify-items-end">
          <nav className="mr-6">
            <button className="mr-7 bg-black p-0.5 text-white hover:bg-slate-400 py-1 rounded-md">
              <a href="/student-login">Student Login</a>
            </button>
            <button className="bg-black text-white hover:bg-slate-400 py-1 rounded-md">
              <a href="/warden-login">Go to Admin</a>
            </button>
          </nav>
        </div>
      </div>
      <div className="mt-20 flex justify-between">
        <div className="mt-40 ml-8">
            <h1 className="text-lg font-bold">Headline Text Here</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                <br/>
                sed do eiusmod tempor incididunt ut labore</p>
                <button className="border p-0.5 w-40 rounded-md my-5 py-2 bg-black text-white hover:bg-slate-400 ">
                <a href="/">Login as a student</a>
              </button>
        </div>
        <div>
        <img src={HomeImg} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
