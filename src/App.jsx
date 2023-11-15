import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import { ToastContainer } from "react-toastify";
import Login from "./components/Login";
import ForgotPassword from "./Components/ForgotPassword";
import VerifyRandomString from "./Components/VerifyRandomString";
import Signup from "./components/Signup";
import './App.css'
import ResetPassword from "./components/ResetPassword";
import Dashboard from "./components/Dashboard";
import PortfolioForm1 from "./components/PortfolioForm1";
import PortfolioView from "./components/PortfolioView";
import EditPortfolio from "./components/EditPortfolio";
import Intro from "./components/template/Intro";
import Experience from "./components/template/Experience";
import Contact from "./components/template/Contact";
import Project from "./components/template/Project";
import ExportPDF from "./components/template/ExportPDF";


function App() {
  return (
    <Router>
      <Routes>
        {" "}
        {/* Wrap your routes in a Routes component */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/verifyRandomString/:randomString" element={<VerifyRandomString />}/>
        <Route path="/resetPassword/:randomString" element={<ResetPassword />} />
         <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/portfolioForm1" element={<PortfolioForm1 />} />
         <Route path="/intro/:portfolioId" element={<Intro />} />
         <Route path="/experience/:portfolioId" element={<Experience/>} />
         <Route path="/contact/:portfolioId" element={<Contact/>} />

         <Route path="/portfolio-view/:portfolioId" element={<PortfolioView />}>
          {/* Nested routes for PortfolioView */}
          <Route index element={<Intro />} />
          <Route path="intro" element={<Intro />} />
          <Route path="experience" element={<Experience />} />
          <Route path="contact" element={<Contact />} />
          <Route path="project" element={<Project />} />
        </Route>
         
         <Route path="/edit-portfolio/:portfolioId" element={<EditPortfolio/>} />
         <Route path="/export-pdf/:portfolioId" element={<ExportPDF/>} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
