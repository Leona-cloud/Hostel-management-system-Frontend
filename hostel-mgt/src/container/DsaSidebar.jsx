import React from "react";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";

const DsaSidebar = () => {

    const warden = JSON.parse(localStorage.getItem('dsa'))

  return (
    <div className=" text-white h-full py-5 px-6 w-[14 rem]">
      <div className="name and avatar mt-5 mb-16 flex items-center justify-evenly w-full">
      
        <p className="text-xs text-bold">{warden.email}</p>
        <RiArrowDropDownLine fontSize={24} className="cursor-pointer" />
      </div>
      <ul className="flex flex-col gap-5 ">
        <Link to="/dsa-dashboard/report" className=" hover:text-[#EC8736]">
          {" "}
          <li className="text-sm flex items-center justify-between">
            Generate Report <span>+</span>
          </li>
        </Link>
        <Link to="/dsa-dashboard/evicted-student" className=" hover:text-[#EC8736]">
          {" "}
          <li className="text-sm flex items-center justify-between">
            Evicted Students <span>+</span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default DsaSidebar;
