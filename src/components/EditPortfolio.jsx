import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link, useParams } from 'react-router-dom';
import BackToTop from '../Utils/BackToTop';


const EditPortfolioForm = () => {
  const navigate = useNavigate();
  const { portfolioId } = useParams(); 
console.log(portfolioId);
  const [formData, setFormData] = useState({
    name: '',
    headerTitle: '',
    about: '',
    resumeLink: '',
    skills: '',
    project1: '',
    descriptionWithUr1: '',
    project2: '',
    descriptionWithUr2: '',
    githubLinks: '',
    linkedinLinks: '',
    email:'',
    phoneNo:'',
    companyName: '',
    exp: '',
    start: '',
    end: '',
    currentlyWorking: false,
  });

  useEffect(() => {
    // Fetch the existing portfolio data based on the ID and set it in the state.
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/portfolio/portfolio/${portfolioId}`);
        const portfolioData = response.data;
        const formattedStartDate = portfolioData.start && portfolioData.start.split('T')[0];
        const formattedEndDate = portfolioData.end && portfolioData.end.split('T')[0];
        const currentlyWorking = portfolioData.currentlyWorking === 'Yes' || portfolioData.currentlyWorking === true;

  
        setFormData({ ...portfolioData, 
          start: formattedStartDate, 
          end: formattedEndDate,
          currentlyWorking: currentlyWorking,
        });
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, [portfolioId]);

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    const name = e.target.name;

    if (name === 'currentlyWorking' && value) {
      // If 'Currently Working' is checked, set 'end' date to an empty string
      setFormData({ ...formData, end: '', [name]: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`http://localhost:8080/api/portfolio/${portfolioId}`, formData);
      if (response.status === 200) {
         navigate(`/portfolio-view/${portfolioId}`);
      }
    } catch (error) {
      console.error('Error submitting form: ', error);
    }
  };

  return (
    <div className="text-dark mx-auto bg-light w-75 mt-5 mb-5">
    <div className="d-flex justify-content-between">
      <h2 className="p-3 mx-auto display-3 fw-bolder">Edit Portfolio</h2>
  
      <Link to={`/portfolio-view/${portfolioId}`}>
        <button
          type="button"
          className="btn btn-dark btn-sm align-self-center me-3 px-3 mt-2"
        >
          Cancel
        </button>
      </Link>
    </div>
    <form onSubmit={handleSubmit} className="fw-bold">
      {/* Name */}
      <div className="form-group mb-3 mx-5">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          required
          name="name"
          className="form-control"
          onChange={handleChange}
          value={formData.name}
        />
      </div>
  
      {/* Header title */}
      <div className="form-group mb-3 mx-5">
        <label>Header title:</label>
        <input
          type="text"
          name="headerTitle"
          className="form-control"
          onChange={handleChange}
          value={formData.headerTitle}
          required
        />
      </div>
  
      {/* About */}
      <div className="form-group mb-3 mx-5">
        <label>About:</label>
        <input
          type="text"
          name="about"
          className="form-control"
          onChange={handleChange}
          value={formData.about}
          required
        />
      </div>
  
      {/* Resume URL */}
      <div className="form-group mb-3 mx-5">
        <label>Resume URL:</label>
        <input
          type="text"
          name="resumeLink"
          className="form-control"
          onChange={handleChange}
          value={formData.resumeLink}
          required
        />
      </div>
  
      {/* Skills */}
      <div className="form-group mb-3 mx-5">
        <label>Skills:</label>
        <input
          type="text"
          name="skills"
          className="form-control"
          onChange={handleChange}
          value={formData.skills}
          required
        />
      </div>
  
      {/* Projects */}
      <h3 className="fw-bold p-3">Projects</h3>
  
      {/* Project 1 details */}
      <div className="form-group mb-3 mx-5">
        <label>Project 1:</label>
        <input
          type="text"
          name="project1"
          className="form-control"
          onChange={handleChange}
          value={formData.project1}
          required
        />
      </div>
      <div className="form-group mb-3 mx-5">
        <label>Description with URL 1:</label>
        <input
          type="text"
          name="descriptionWithUr1"
          className="form-control"
          onChange={handleChange}
          value={formData.descriptionWithUr1}
          required
        />
      </div>
  
      {/* Project 2 details */}
      <div className="form-group mb-3 mx-5">
        <label>Project 2:</label>
        <input
          type="text"
          name="project2"
          className="form-control"
          onChange={handleChange}
          value={formData.project2}
          required
        />
      </div>
      <div className="form-group mb-3 mx-5">
        <label>Description with URL 2:</label>
        <input
          type="text"
          name="descriptionWithUr2"
          className="form-control"
          onChange={handleChange}
          value={formData.descriptionWithUr2}
          required
        />
      </div>
  
      {/* Social Media */}
      <h3 className="fw-bold p-3">Social Media</h3>
  
      {/* GitHub Link */}
      <div className="form-group mb-3 mx-5">
        <label>GitHub Link:</label>
        <input
          type="text"
          name="githubLinks"
          className="form-control"
          onChange={handleChange}
          value={formData.githubLinks}
          required
        />
      </div>
  
      {/* LinkedIn Link */}
      <div className="form-group mb-3 mx-5">
        <label>LinkedIn Link:</label>
        <input
          type="text"
          name="linkedinLinks"
          className="form-control"
          onChange={handleChange}
          value={formData.linkedinLinks}
          required
        />
      </div>
      {/* ---email----- */}
      
      {/* LinkedIn Link */}
      <div className="form-group mb-3 mx-5">
        <label>Email:</label>
        <input
          type="text"
          name="email"
          className="form-control"
          onChange={handleChange}
          value={formData.email}
          required
        />
      </div>
      {/* ----phone number--- */}
      
      <div className="form-group mb-3 mx-5">
        <label>Phone No:</label>
        <input
          type="text"
          name="phoneNo"
          className="form-control"
          onChange={handleChange}
          value={formData.phoneNo}
          required
        />
      </div>
  
      {/* Experience */}
      <h3 className="fw-bold p-3">Experience</h3>
  
      {/* Company Name */}
      <div className="form-group mb-3 mx-5">
        <label>Company Name:</label>
        <input
          type="text"
          name="companyName"
          className="form-control"
          onChange={handleChange}
          value={formData.companyName}
          required
        />
      </div>
  
      {/* Experience */}
      <div className="form-group mb-3 mx-5">
        <label>Experience:</label>
        <input
          type="text"
          name="exp"
          className="form-control"
          onChange={handleChange}
          value={formData.exp}
          required
        />
      </div>
  

            {/*------- start date --------*/}

<div className="form-group mb-3 mx-5">
<label>Start Date</label>
<input 
type="date"
 name="start" 
className="form-control" 
onChange={handleChange} 
value={formData.start|| ''}
/>
</div>

          {/*------- end date --------*/}

<div className="form-group mb-3 mx-5">
<label>End Date</label>
<input
type="date"
name="end"
className="form-control"
value={formData.end || ''}
onChange={handleChange}
/>
</div>

          {/*------- currently working --------*/}

<div className="form-check  mt-3 ">
<input
type="checkbox"
name="currentlyWorking"
className="form-check-input"
onChange={handleChange}

/>
<label className="form-check-label">Currently Working</label>
</div>

          {/*------- button --------*/}
          <div className='col-md-4 ms-auto d-flex justify-content-end me-5 '>         
   <button type="submit" className='btn btn-dark my-3 py-2 px-5'>Submit</button>
</div> 
      {/* Start Date */}
  </form>
  <div className='d-flex justify-content-end bg-primary'style={{ position: "fixed", bottom: "20px", right: "20px", width: "50px" }}>
  <BackToTop/>
</div>
</div>  );
};

export default EditPortfolioForm;
