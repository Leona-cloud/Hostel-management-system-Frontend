import React, { useState, useEffect, useCallback } from "react";
import axiosInstance from "../utils/helper";

const NoticeBoard = () => {
  const [query, setQuery] = useState({
    page: 1,
  });

  const [roomData, setRoomsData] = useState();

  const [loading, setLoading] = useState(false);




  const fetchNoticeBoard = useCallback(async () => {
    setLoading(true);
    try {
      const url = "https://hostel-mgt.onrender.com/api/hostel/view-notice-board";
      const res = await axiosInstance.post(url, {...query});
      setRoomsData(res.data.fetchNotice);
      console.log(res.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchNoticeBoard();
  }, [fetchNoticeBoard]);

  return (
    <div className="w-full py-16 px-10 ">
      <div className="title mb-8">
        <p className="font-semibold">Notice Board</p>
        <p className="text-[#475569] text-sm">
          Stay up to date with the latest information
        </p>
      </div>

      <div className=" border mb-8">
      {roomData?.map(hostel=>(
        <div className=" border mb-8">
        <div className=" border">
          <p className="font-semibold bg-slate-200">
            Title:{hostel.heading}
          </p>
        </div>
        <div className=" border h-20">{hostel.body}</div>
      </div>
      ))}
      </div>
    </div>
  );
};

export default NoticeBoard;
