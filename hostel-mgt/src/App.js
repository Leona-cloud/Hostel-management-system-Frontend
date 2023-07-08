import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './container/Home';
import Register from './components/Register';
import RegisterCont1 from './components/RegisterCont1';
import StudentNextOfKin from './components/studentNextOfKin';
import UploadCertificate from './components/uploadCertificate';
import EmailVerification from './components/emailVerification';

const App = () => {
  return (
   <Routes>
        <Route path='Login' element={<Login />} />
        <Route path='Register' element={<Register />} />
        <Route path='RegisterCont1' element={<RegisterCont1 />} />
        <Route path='next-of-kin' element={<StudentNextOfKin />} />
        <Route path='upload-certificate' element={<UploadCertificate />} />
        <Route path='email-verification' element={<EmailVerification />} />
        <Route path='/*' element={<Home />} />
   </Routes>
  )
}

export default App