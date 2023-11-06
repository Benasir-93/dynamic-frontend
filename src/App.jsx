import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes and Route
import { ToastContainer } from "react-toastify";
import Login from "./components/Login";
import ForgotPassword from "./Components/ForgotPassword";
import VerifyRandomString from "./Components/VerifyRandomString";
import Signup from "./components/Signup";
import './App.css'
import PortfolioForm from "./components/PortfolioForm";
import ResetPassword from "./components/ResetPassword";
import Dashboard from "./components/Dashboard";



function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        
        {" "}
        {/* Wrap your routes in a Routes component */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route
          path="/verifyRandomString/:randomString"
          element={<VerifyRandomString />}
        />
        <Route
          path="/resetPassword/:randomString"
          element={<ResetPassword />}
        />
         <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/portfolioForm" element={<PortfolioForm />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
