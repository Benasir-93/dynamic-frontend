import { useState,useEffect } from "react";
import React  from 'react'
import axios from 'axios';
import '../../components/template/portfolioview.css';
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";


function Project() {
  const { portfolioId } = useParams();
  const [portfolioData, setPortfolioData] = useState({});

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

  return (
    <>
    <Navbar></Navbar>
  <div className="container-fluid bg-light ">
    <div className="row">
      <div className="col-md-12 background-div" style={{height:"400px"}}>
        <h1 className="text-center my-5 display-1 fw-bolder pt-5">My Projects</h1>
      </div>
      <div className="col-md-12 mx-5 mt-md-5 w-100">
        <h1 className="text-primary">{portfolioData.project1}:</h1>
        <p className="text-justify">{portfolioData.descriptionWithUr1}</p>
        <h1 className="text-primary">{portfolioData.project2}:</h1>
        <p>{portfolioData.descriptionWithUr2}</p>
       </div>
    </div>
  </div>
  <Footer></Footer>
  </>
  )
}

export default Project