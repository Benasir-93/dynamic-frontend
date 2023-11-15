import { useState,useEffect } from "react";
import React  from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import '../../components/template/portfolioview.css';
function Footer() {
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
    <footer>
      <div className="container-fluid text-light py-4" style={{backgroundColor:"#042a4f"}}>
        <div className="text-center">
          <p className="mb-0">
            Copyrights © 2022 <b>{portfolioData.name}</b>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
