// export default PortfolioView
import React, { useState, useEffect,useRef } from 'react';
import axios from 'axios';
import { Link,useParams,useNavigate,Outlet } from "react-router-dom";
import EditPortfolio from '../components/EditPortfolio';
import '../components/template/portfolioview.css';
import { RWebShare } from "react-web-share";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas'
import { toast } from "react-toastify";
import Experience from "../components/template/Experience";
import Contact from "../components/template/Contact";
import Intro from './template/Intro';
import ExportToPDF from './template/ExportToPdf';

const PortfolioView = () => {
  const { portfolioId } = useParams();
  const navigate = useNavigate();
  const [portfolioData, setPortfolioData] = useState({});
  // const [loader, setLoader] = useState(false);
  const pdfContentRef = useRef();

  
  useEffect(() => {
       axios.get(`https://dynamicportfoliobackend.onrender.com/api/portfolio/portfolio/${portfolioId}`)

      .then((response) => {

        setPortfolioData(response.data);
        console.log("response",response.data)
      })
      .catch((error) => {
        console.error('Error fetching portfolio data:', error);
      });
  }, [portfolioId]);


const handleDelete = (portfolioId) => {
  if (!portfolioId) {
    console.error('Portfolio ID is not defined.');
    return; // Exit the function
  }
  // Implement delete functionality here
  const confirmDelete = window.confirm('Are you sure you want to delete this portfolio?');
  if (confirmDelete) {
    axios.delete(`https://dynamicportfoliobackend.onrender.com/api/portfolio/${portfolioId}`)
      .then(() => {
        
        console.log("successfully deleted");
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error('Error deleting portfolio:', error);
      });
  }
};



const handleExportToPDF = () => {
  // Navigate to the export-pdf route with the portfolioId parameter
  navigate(`/export-pdf/${portfolioId}`);
};

  return (
   
   <>
    <div  className='portfolio-view-content' id='background-container'>
       <Outlet />
    {/* controll button */}

    <div className="mt-3 mx-auto p-3 ">
       <Link to={`/edit-portfolio/${portfolioId}`}>
         <button type="button" className="btn btn-primary me-3 px-3 mt-2">
           Edit
         </button>
       </Link>
       <button onClick={() => handleDelete(portfolioId)} className="btn btn-danger  me-3 px-3 mt-2">
         Delete
       </button>
     
         <button onClick={handleExportToPDF} className="btn btn-success me-3 px-3 mt-2">
          Export to PDF
        </button>
     
   
         <RWebShare
        data={{
          text: "Hey I made this portfolio using dynamic portfolio web app",
           url: `https://dynamicportfolio.netlify.app/portfolio-view/${portfolioId}`,
          title: "Share your Portfolio",
        }}
        onClick={() => {
          toast.success("Successful !");
        }}>
        <button className="btn btn-warning   me-3 px-3 mt-2" title="Share Portfolio">share</button>
      </RWebShare>
      <Link to={`/dashboard`}>
         <button type="button" className="btn btn-dark fw-bold me-3 px-3 mt-2">
           home
         </button>
       </Link>
    </div>
   
    </div>
    </>
  );
};

export default PortfolioView;

