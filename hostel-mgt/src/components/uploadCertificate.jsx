import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import axiosInstance from "../utils/helper";
import { useToast } from "@chakra-ui/react";

const UploadCertificate = () => {
  const [image, setImage] = useState("");
  const navigate = useNavigate();;
  const  toast = useToast();

  const uploadImage =  () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "xaqimipi");
    data.append("cloud_name", "dehufiqyo");
    axios.post(" https://api.cloudinary.com/v1_1/dehufiqyo/image/upload",
     data,
    )
      .then( async(resp) =>{
        const url =  "https://hostel-mgt.onrender.com/api/auth/student/upload-certificate"
        const {data: res} = await axiosInstance.post(url, {file:resp.data.url});
        toast({
          title: 'Success',
          description:"Upload successful" ,
          position:"top-right",
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
        if(res.success === true){
          navigate('/make-payment')
        }
      })
      .catch((err) =>  toast({
        title: 'Error',
        description:err.response.data.message ,
        position:"top-right",
        status: 'error',
        duration: 9000,
        isClosable: true,
      }));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full bg-slate-300">
       <div className="flex flex-col justify-center items-center"></div>
       <div className="bg-gray-100 flex flex-col justify-center items-center  rounded-lg">
       <div>
        <div className="mt-0 mb-6">
        <h2 className=" text-sm font-bold ">Upload Clearance Certificate.</h2>
        <p className="text-sm">Your information is secure.</p>
        </div>
      <div className="max-w-[400px] w-full max-auto bg-white p-4 rounded-lg">
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        ></input>
      </div>
      <div >
        <button className="border w-full my-5 py-2 bg-black text-white hover:bg-slate-400" onClick={uploadImage}>Upload</button>
        </div>
    </div>
       </div>
    </div>
  
  );
};

export default UploadCertificate;
