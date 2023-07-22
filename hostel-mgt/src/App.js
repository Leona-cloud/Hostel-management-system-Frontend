import React from "react";
import { Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import Login from "./components/Login";
import Home from "./container/Home";
import Register from "./components/Register";
import RegisterCont1 from "./components/RegisterCont1";
import StudentNextOfKin from "./components/studentNextOfKin";
import UploadCertificate from "./components/uploadCertificate";
import EmailVerification from "./components/emailVerification";
import StudentDashboard from "./components/studentDashboard";
import DashboardShell from "./container/DashboardShell";
import StudentOverview from "./components/StudentOverview";
import Overview from "./components/Overview";
import ProfilePage from "./components/profilePage";
import LodgeComplaints from "./components/lodgeComplaints";
import NoticeBoard from "./components/noticeBoard";
import MakePayment from "./components/makePayment";
import Wardenlogin from "./components/Admin/Login";
import { AdminDashboardShell } from "./container/AdminDashboardShell";
import AdminOverview from "./components/Admin/Overview";
import Rooms from "./components/Admin/Rooms";
import Students from "./components/Admin/Students";
import UpdateRooms from "./components/Admin/UpdateRooms";
import SetupHostel from "./components/setupHostel";
import UpdateNoticeBoard from "./components/Admin/UpdateNoticeBoard";
import VerifyStudent from "./components/Admin/VerifyStudent";
import ViewComplaints from "./components/Admin/ViewComplaints";
import DsaLogin from "./components/Admin/DsaLogin";

const App = () => {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="student-login" element={<Login />} />
        <Route path="warden-login" element={<Wardenlogin />} />
        <Route path="dsa-login" element={<DsaLogin />} />
        <Route path="register" element={<Register />} />
        <Route path="/register-cont" element={<RegisterCont1 />} />
        <Route path="next-of-kin" element={<StudentNextOfKin />} />
        <Route path="upload-certificate" element={<UploadCertificate />} />
        <Route path="email-verification" element={<EmailVerification />} />
        <Route path="setup-hostel" element={<SetupHostel />} />
        <Route path="student-dashboard" element={<StudentDashboard />} />
        <Route path="/dashboard" element={<DashboardShell />}>
          <Route index element={<StudentOverview />} />
          <Route path="overview" element={<Overview />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="lodge-complaints" element={<LodgeComplaints />} />
          <Route path="notice-board" element={<NoticeBoard />} />
        </Route>
        <Route path="/admin-dashboard" element={<AdminDashboardShell />}>
          <Route path="update-rooms" element={<UpdateRooms />} />
          <Route path="overview" element={<AdminOverview />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="students" element={<Students />} />
          <Route path="update-notice-board" element={<UpdateNoticeBoard />} />
          <Route path="verify-student" element={<VerifyStudent />} />
          <Route path="view-complaints" element={<ViewComplaints />} />
        </Route>
        <Route path="make-payment" element={<MakePayment />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </ChakraProvider>
  );
};

export default App;
