import React, { useState, useEffect, useCallback } from "react";


import axiosInstance from "../../utils/helper";
import TableComponent from "../../container/TableComponent";


const columns = ["BLOCK", "ROOM NUMBER", "No of Occupants", "VACANT SPACE(s)"];
const dataIndex = ["block", "roomId", "occupants", "vacant"];

const GenerateRoomReport = () => {

    const [query, setQuery] = useState({
        page: 1,
        pageSize: "10",
      });
      const [reportData, setReportData] = useState();
      const [loading, setLoading] = useState(false);
      const [noOfStudents, setNoOfStudents] = useState();
      const [noOfRooms, setNoOfRooms] = useState();


      const fetchReport = useCallback(async () => {
        setLoading(true);
        const hostelId = JSON.parse(localStorage.getItem("dsa")).hostelId;
        try {
          const url = "https://hostel-mgt.onrender.com/api/transactions/generate-report";
          const res = await axiosInstance.post(url, {
            hostelId,
            ...query,
          });
          setReportData(res.data.data.roomReport);
          setNoOfStudents(res.data.data.noOfStudents);
          setNoOfRooms(res.data.data.noOfRooms)
          console.log(res.data);
          setLoading(false);
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
      }, [query]);
    
      const handlePangeChange = (page, arg) => {
        if (page === 0) return;
        if (arg === "prev") {
          setQuery((prev) => ({ ...prev, page: page - 1 }));
        } else {
          setQuery((prev) => ({ ...prev, page: page + 1 }));
        }
      };
    
      useEffect(() => {
        fetchReport();
      }, [fetchReport]);


  return (
    <div className="w-full py-16 px-10 ">
    <div className="title">
      <p className="font-semibold">Hello,Admin.</p>
      <p className="text-[#475569] text-sm mb-7">
        Generate report
      </p>
      <p className="text-sm font-sans:Noto Sans">No of students: <span className='ml-8'>{noOfStudents}</span></p>
      <p className="text-sm font-sans:Noto Sans">No of students: <span className='ml-8'>{noOfRooms}</span></p>
    </div>
    <div className="mt-7 flex">
      <label className="mr-2">Page Number:</label>
      <input
        className="border border-black w-10"
        type="text"
        placeholder="0"
        value={query.page}
      />
    </div>
    <div className="mt-7">
      <TableComponent
        data={reportData}
        prev={() => handlePangeChange(query?.page, "prev")}
        next={() => handlePangeChange(query?.page, "next")}
        loading={loading}
        columns={columns}
        dataIndex={dataIndex}
      />
    </div>
  </div>
  )
}

export default GenerateRoomReport