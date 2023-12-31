import React, { useState, useEffect, useCallback } from "react";
import { BiSolidEdit } from "react-icons/bi";
import {
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Spinner,
} from "@chakra-ui/react";
import axiosInstance from "../../utils/helper";
import TableComponent from "../../container/TableComponent";

const columns = ["BLOCK", "ROOM NUMBER", "No of Occupants", "VACANT SPACE(s)"];
const dataIndex = ["block", "roomId", "occupants", "vacant"];
// {/* <Td>{item.roomId}</Td>
//                 <Td>{item.occupants.length}</Td>
//                 <Td>{6 - item.occupants.length}</Td> */}

const Rooms = () => {
  const [query, setQuery] = useState({
    page: 1,
    pageSize: "10",
  });
  const [roomData, setRoomsData] = useState();
  const [loading, setLoading] = useState(false);

  const fetchRooms = useCallback(async () => {
    setLoading(true);
    const hostelId = JSON.parse(localStorage.getItem("warden")).hostelId;
    try {
      const url = "https://hostel-mgt.onrender.com/api/hostel/fetch-rooms";
      const res = await axiosInstance.post(url, {
        hostelId,
        ...query,
      });
      setRoomsData(res.data.data.rooms);
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
    fetchRooms();
  }, [fetchRooms]);

  return (
    <div className="w-full py-16 px-10 ">
      <div className="title">
        <p className="font-semibold">Hello,Admin.</p>
        <p className="text-[#475569] text-sm mb-7">
          Manage rooms and occupants from here
        </p>
        <p className="text-sm font-sans:Noto Sans">ROOM DETAILS </p>
      </div>
      <div className="mt-7 flex">
        <label className="mr-2">Page Number:</label>
        <input
          className="border border-black w-10"
          type="text"
          placeholder="1"
          value={query.page}
        />
      </div>
      <div className="mt-10">
        <TableComponent
          data={roomData}
          prev={() => handlePangeChange(query?.page, "prev")}
          next={() => handlePangeChange(query?.page, "next")}
          loading={loading}
          columns={columns}
          dataIndex={dataIndex}
        />
      </div>
    </div>
  );
};

export default Rooms;
