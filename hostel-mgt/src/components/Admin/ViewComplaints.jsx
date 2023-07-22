import React, { useState, useEffect, useCallback } from "react";
import axiosInstance from "../../utils/helper";

const ViewComplaints = () => {
  const [query, setQuery] = useState({
    page: 1,
  });
  const [roomData, setRoomsData] = useState();
  const [loading, setLoading] = useState(false);

  

  const fetchComplaints = useCallback(async () => {
    setLoading(true);
    try {
      const url = "https://hostel-mgt.onrender.com/api/hostel/view-complaints";
      const res = await axiosInstance.post(url, {
        ...query,
      });
      setRoomsData(res.data.data);
      console.log(res.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [query]);


  useEffect(() => {
    fetchComplaints();
  }, [fetchComplaints]);

  return (
    <div className="w-full py-16 px-10 ">
      <div className="title mb-8">
        <p className="font-semibold">View Complaints</p>
      </div>
      <div className=" border mb-8">
        {roomData?.map((hostel) => (
          <div className=" border mb-8">
            <div className=" border">
              <p className="font-semibold bg-slate-200">
                Matric-No:<span>{hostel.studentMatricNo}</span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RoomNo:{hostel.roomNo}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Title:{hostel.title}
              </p>
            </div>
            <div className=" border h-20">{hostel.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewComplaints;
