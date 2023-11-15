import { useState,useEffect } from "react";
import React  from 'react'
import axios from 'axios';
import '../../components/template/portfolioview.css';
import { useParams,useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";


function Contact() {
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
    
    <div className="container-fluid background-div">
     <div className="row">
       <div className="col-md-6 bg-transparent d-flex align-items-center justify-content-center">
       <h2>Contact Me</h2>
       </div>
       <div className="col-md-6 mx-auto">
       <div class="card w-100 my-5" >
   <div class="card-body m-5" style={{color:"#042a4f"}}>

     <h4 class="card-title px-3"><i class="fa-brands fa-linkedin me-3 fa-2x"></i><a className="text-decoration-none ms-3" href="{portfolioData.linkedinLinks}">{portfolioData.linkedinLinks}</a></h4>

     <h4 class="card-title  px-3" ><i class="fa-brands fa-github me-3 fa-2x"></i><a className="text-decoration-none ms-3" href="{portfolioData.githubLinks}">{portfolioData.githubLinks}</a></h4>

     <h4 class="card-title  px-3"><i class="fa-solid fa-envelope me-3 fa-2x"></i><a className="text-decoration-none ms-3" href="{portfolioData.githubLinks}">{portfolioData.email}</a></h4>

     <h4 class="card-title  px-3"><i class="fa-solid fa-mobile-screen me-3 fa-2x"></i><a className="text-decoration-none ms-3" href="{portfolioData.githubLinks}">{portfolioData.phoneNo}</a></h4>

          </div>
        </div>
       </div>
      </div>
     </div>
     <Footer></Footer>
    </>
  )
}

export default Contact