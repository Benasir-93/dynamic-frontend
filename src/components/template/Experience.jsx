import { useState,useEffect } from "react";
import React  from 'react'
import axios from 'axios';
import { Link,useParams,useNavigate } from "react-router-dom";
import '../../components/template/portfolioview.css';
import Navbar from "./Navbar";
import Footer from "./Footer";

function Experience() {
  const { portfolioId } = useParams();
  const [portfolioData, setPortfolioData] = useState({});

  useEffect(() => {
       axios.get(`http://localhost:8080/api/portfolio/portfolio/${portfolioId}`)

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
   <div className="container-fluid background-div">
    <div className="row">

      <div className="col-md-6 bg-transparent d-flex align-items-center justify-content-center">
      <h2>My Experience</h2>
      </div>

      <div className="col-md-6 mx-auto">
      <div class="card w-100 my-5" >
      <div class="card-body my-5">
    <h5 class="card-title">Company Name:{portfolioData.companyName}</h5>
    <p class="card-text mb-5 overflow-hidden word-wrap-break-word"><b>Experience:</b>{portfolioData.exp}</p>
    <h6 class="card-subtitle mb-2 text-body-secondary"><b>Start Date:</b>{portfolioData.start  && portfolioData.start.split('T')[0]}</h6>
    <h6 class="card-subtitle mb-2 text-body-secondary"><b>End Date:</b>{portfolioData.end  && portfolioData.end.split('T')[0]}</h6>
    <h6 class="card-subtitle mb-2 text-body-secondary"><b>Currently Working:</b>{portfolioData.currentlyWorking ? "Yes" : "No"}</h6>
          </div>
        </div>
       </div>
     </div>
   </div>
   <Footer></Footer>
   </>
  )
}

export default Experience