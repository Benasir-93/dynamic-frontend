import { useState,useEffect } from "react";
import React  from 'react'
import axios from 'axios';
import { useParams,Link } from "react-router-dom";
import '../../components/template/portfolioview.css';
function Navbar() {
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
    <div className="container-fluid  " style={{backgroundColor:"#042a4f"}} >
    <div className="row text-light">
    <Link to={`/portfolio-view/${portfolioId}/intro`} className="nav-link">
    <h3 className='px-5 py-3'>{portfolioData.name} portfolio</h3>

            </Link>
  <ul className="nav justify-content-end ">
        <li className="nav-item">
             <Link to={`/portfolio-view/${portfolioId}/project`} className="nav-link text-light">
              Project
             </Link>
        </li>
        <li className="nav-item">
               <Link to={`/portfolio-view/${portfolioId}/experience`} className="nav-link text-light">
               Experience
               </Link>
        </li>
     <li className="nav-item">
           <Link to={`/portfolio-view/${portfolioId}/contact`} className="nav-link text-light">
              Contact
            </Link>
     </li>
</ul>
</div>

</div>  )
}

export default Navbar