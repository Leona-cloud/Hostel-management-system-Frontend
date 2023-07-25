import React, { useState, useEffect, useCallback } from "react";
import axiosInstance from "../../utils/helper";
import TableComponent from "../../container/TableComponent";

const columns = ["NAME", "MATRIC-No", "DEPARTMENT", "REASON for EVICTION"]
const dataIndex = ["fullName", "matricNo", "department", "reasonForEviction"];
const EvictedStudents = () => {

    const [loading, setLoading] = useState(false);
    const [evictedStudents, setEvictedStudents] = useState();
    const [noEvictedStudents, setNoEvictedStudents] = useState();

    const fetchEvictedStudents = useCallback(async () => {
        setLoading(true);
        const hostelId = JSON.parse(localStorage.getItem("dsa")).hostelId;
        try {
          const url = "https://hostel-mgt.onrender.com/api/transactions/generate-evicted-students";
          const res = await axiosInstance.post(url, {
            hostelId,
          });
          setEvictedStudents(res.data.data.evictedStudents);
          setNoEvictedStudents(res.data.data.noOfEvictedStudents)
          console.log(res.data);
          setLoading(false);
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
      }, []);

      useEffect(() => {
        fetchEvictedStudents();
      }, [fetchEvictedStudents]);

  return (
    <div className="w-full py-16 px-10 ">
      <div className="title">
        <p className="font-semibold">Hello,Admin.</p>
        <p className="text-[#475569] text-sm mb-7">
         View the evicted students from here
        </p>
        <p className="text-sm font-sans:Noto Sans">No of evicted students: <span className='ml-8'>{noEvictedStudents}</span></p>
      </div>
      <div className="mt-10">
        <TableComponent
             data={evictedStudents}
              loading={loading}
          columns={columns}
          dataIndex={dataIndex}
        />
      </div>
     </div>
  )
}

export default EvictedStudents