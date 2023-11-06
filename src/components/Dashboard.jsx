import React from 'react'
import '../style/dashboard.css';
import PortfolioForm from "../components/PortfolioForm";
import { Link, useNavigate, useParams } from "react-router-dom";
export default function Dashboard() {
  const navigate = useNavigate();

   // Function to handle logout
   const handleLogout = () => {
    // Clear the authentication token
    localStorage.removeItem("Auth Token");
    localStorage.removeItem("userName");

    // Redirect to the login page
    navigate("/login");
  };
  const isAuthenticated = localStorage.getItem("Auth Token");

  // Function to handle the "Get Started" button click
  const handleGetStarted = () => {
    if (!isAuthenticated) {
      // Redirect to the login page if the user is not authenticated
      navigate("/login");
    } else {
      // Handle the action for authenticated users here
      // For example, navigate to the portfolioForm page
      navigate("/portfolioForm");
    }
  };
  return (
<>
<nav class="navbar navbar-expand-lg bg-body-transparent mb-md-0 mb-5">
  <div class="container-fluid">
    {/* <a class="navbar-brand text-white" href="#">PORTFOLIO BUILDER</a> */}
    <Link to={"/"} className="navbar-brand text-white fw-bold fs-4">PORTFOLIO BUILDER</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        {/* <li class="nav-item me-3">
        <Link to={"/signup"}>
                  <button className=" btn btn-outline-light fw-bold text-center mt-2 w-100 ">
                    Sign Up
                  </button>
                </Link>       
                 </li> */}
                 
        {/* <li class="nav-item me-3">
                <Link to={"/login"}>
                  <button className=" btn btn-outline-light fw-bold text-center mt-2 w-100 "onClick={handleLogout}>
                    Log Out
                  </button>
                </Link> 
         </li> */}
          {isAuthenticated ? (
                <li className="nav-item me-3">
                  <button
                    className="btn btn-outline-light fw-bold text-center mt-2 w-100"
                    onClick={handleLogout}
                  >
                    Log Out
                  </button>
                </li>
              ) : (
                <li
                  className={`nav-item ${
                    location.pathname === "/login" ? "active" : ""
                  }`}
                >
                  <Link to="/login">
                    <button className="btn btn-outline-light fw-bold text-center mt-2 w-100">
                      Log In
                    </button>
                  </Link>
                </li>
              )}
      </ul>
    
    </div>
  </div>
</nav>
<span className='position-absolute bottom-50 end-50 text-white'style={{ display: 'block' }}>
  <h3>Welcome to Dynamic Portfolio Website</h3>
  <p className='text-light'>This site is allow you to create a good looking portfolio</p>
  <Link to={'/portfolioForm'}>  <button type="button" className="btn btn-light mx-auto fw-bold fs-4 " 
    onClick={handleGetStarted}
          disabled={!isAuthenticated}>Get Started</button>
</Link>
  {/* <button type="button" className="btn btn-light mx-auto fw-bold fs-4 ">Get Started</button> */}
</span>

</>  )
}

// export default Dashboard