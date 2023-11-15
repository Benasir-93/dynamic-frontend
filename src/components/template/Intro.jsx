import { useState, useEffect,useRef } from "react";
import React from 'react'
import axios from 'axios';
import { useParams, Link } from "react-router-dom";
import '../../components/template/portfolioview.css';
import Navbar from "./Navbar";
import Footer from "./Footer";





function Intro() {
  const { portfolioId } = useParams();
  const [portfolioData, setPortfolioData] = useState({});
  const exportContentRef = useRef(null);

  useEffect(() => {
    axios.get(`https://dynamicportfoliobackend.onrender.com/api/portfolio/portfolio/${portfolioId}`)

      .then((response) => {

        setPortfolioData(response.data);
        console.log("response", response.data)
      })
      .catch((error) => {
        console.error('Error fetching portfolio data:', error);
      });
  }, [portfolioId]);

  return (
    <>
      <div id="export-content">
        <Navbar></Navbar>
        <div className="background-div">
          <div className="container"  >
            <div className="row">
              <div className="col-md-6 mt-5"><h1> Hi! I'm {portfolioData.name}</h1>
                <h1>I'm a passionate {portfolioData.headerTitle}</h1></div>

              <div className="col-md-6 ">
                <img src="/img1.png" className="img-fluid w-100 h-100" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid bg-light text-dark" >
          <div className="row mx-auto">
            <div className="col-md-12"ref={exportContentRef}>
              <h2 className="text-primary">About Me !</h2>
              <p className="fw-bold">{portfolioData.about}</p>
              <h2 className="text-primary">Skills:</h2>
              <p className="fw-bold">{portfolioData.skills}</p>
              <br />
              <h3><a href="{portfolioData.resumeLinks}" className="text-decoration-none">click here to my resume</a></h3>         </div>
           </div>
        </div>
      </div>

      <Footer></Footer>
  
    </>
  )
}


export default Intro