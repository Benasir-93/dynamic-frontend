import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import BackToTop from '../Utils/BackToTop';

const PortfolioForm1 = () => {
const navigate = useNavigate();
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
userID: localStorage.getItem('userID'),
});

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
const response = await axios.post('http://localhost:8080/api/portfolio/addportfolio', formData);
console.log("before",response);
if (response.status === 200) {
    console.log("after",response);
    const portfolioId = response.data._id; 

    navigate(`/portfolio-view/${portfolioId}`);
  }
} catch (error) {
console.error('Error submitting form: ', error);
}
};

return (
<div className="text-dark mx-auto bg-light w-75 mt-5 mb-5">
<div className="d-flex justify-content-between">
  <h2 className="p-3 mx-auto display-3 fw-bolder ">Portfolio Form</h2>

  <Link to={"/dashboard"}>
<button type="button" className="btn btn-dark btn-sm align-self-center me-3 px-3 mt-2">Go Back</button>
  </Link>
</div>
<form onSubmit={handleSubmit} className='fw-bold'>

                {/* name */}
<div className="form-group mb-3 mx-5">
<label htmlFor="name" className='form-label '>Name:</label>
<input id="name" 
type="text" 
name="name" 
className="form-control" 
onChange={handleChange} 
value={formData.name}
required/>
</div>

              {/* header */}
<div className="form-group mb-3 mx-5">
<label htmlFor="headerTitle">Header Title:</label>
<input id='headerTitle' 
type="text" 
name="headerTitle" 
className="form-control" 
onChange={handleChange} 
value={formData.headerTitle}
required/>
</div>
                    {/* about */}

<div className="form-group mb-3 mx-5">
  <label htmlFor="about">About:</label>
  <textarea
  id='about'
    name="about"
    className="form-control"
    onChange={handleChange}
    value={formData.about}
    required></textarea>
</div>


{/* ---resume url--- */}

<div className="form-group mb-3 mx-5">
<label htmlFor='resumeLink'>Resume Link:</label>
<input id='resumeLink' 
type="text"
 name="resumeLink" 
 className="form-control" 
 onChange={handleChange} 
 value={formData.resumeLink}
required/>
</div>
 {/* ----skills------ */}

<div className="form-group mb-3 mx-5">
<label htmlFor="skills" >Skills:</label>
<input id="skills" 
type="text" 
name="skills" 
className="form-control" 
onChange={handleChange} 
value={formData.skills}
required/>
</div>

{/*----- projects -----*/}
<h3 className='fw-bold p-3'>Projects</h3>

{/* -----first project details---- */}

<div className="form-group mb-3 mx-5">
<label htmlFor='project1'>Project Title:</label>
<input id="project1"
type="text" 
name="project1" 
className="form-control" 
onChange={handleChange}
value={formData.project1}
required/>
</div>

<div className="form-group mb-3 mx-5">
  <label htmlFor='descriptionWithUr1'>Description With Url:</label>
  <textarea
  id='descriptionWithUr1'
    name="descriptionWithUr1"
    className="form-control"
    onChange={handleChange}
    value={formData.descriptionWithUr1}
    required
  ></textarea>
</div>

{/* -----second project details---- */}

<div className="form-group  mb-3 mx-5">
<label htmlFor='project2'>Project Title:</label>
<input id='project2' 
type="text" 
name="project2" 
className="form-control" 
onChange={handleChange} 
value={formData.project2}
required/>
</div>

<div className="form-group mb-3 mx-5">
  <label htmlFor='descriptionWithUr2'>Description With Url:</label>
  <textarea
  id='descriptionWithUr2'
    name="descriptionWithUr2"
    className="form-control"
    onChange={handleChange}
    value={formData.descriptionWithUr2}
    required
  ></textarea>
</div>

   {/*------ social media ------*/}
   <h3 className='fw-bold p-3'>Contact</h3>
        {/* --------github link ----------*/}
<div className="form-group mb-3 mx-5">
<label htmlFor='githubLinks'>Github Link:</label>
<input
id='githubLinks'
type="text" 
name="githubLinks" 
className="form-control" 
onChange={handleChange} 
value={formData.githubLinks}
required/>
</div>
        {/* --------linkedin link ----------*/}

<div className="form-group  mb-3 mx-5">
<label htmlFor='linkedinLinks'>Linkedin Link:</label>
<input 
id='linkedinLinks'
type="text" 
name="linkedinLinks" 
className="form-control" 
onChange={handleChange} 
value={formData.linkedinLinks}
required/>
</div>
{/* ----------------email----------- */}

<div className="form-group  mb-3 mx-5">
<label htmlFor='email'>Email:</label>
<input 
id='email'
type="text" 
name="email" 
className="form-control" 
onChange={handleChange} 
value={formData.email}
required/>
</div>
{/* -------------------phone number */}

<div className="form-group  mb-3 mx-5">
<label htmlFor='phoneNo'>Phone No:</label>
<input 
id='phoneNo'
type="text" 
name="phoneNo" 
className="form-control" 
onChange={handleChange} 
value={formData.phoneNo}
required/>
</div>

          {/*------- experience --------*/}
<h3 className='fw-bold p-3'>Experience</h3>

          {/*------- company name --------*/}

<div className="form-group mb-3 mx-5">
<label htmlFor='companyName'>Company Name:</label>
<input 
id='companyName'
type="text" 
name="companyName" 
className="form-control" 
onChange={handleChange} 
value={formData.companyName}
required/>
</div>
          {/*------- experience --------*/}
   <div className="form-group mb-3 mx-5">
  <label htmlFor='exp'>Experience:</label>
  <textarea
  id='exp'
    name="exp"
    className="form-control"
    onChange={handleChange}
    value={formData.exp}
    required
  ></textarea>
</div>


          {/*------- start date --------*/}

<div className="form-group mb-3 mx-5">
<label htmlFor='start'>Start Date:</label>
<input 
id='start'
type="date" 
name="start" 
className="form-control" 
onChange={handleChange} 
value={formData.start}
/>
</div>

          {/*------- end date --------*/}

<div className="form-group mb-3 mx-5">
<label htmlFor='end'>End Date:</label>
<input
id='end'
type="date"
name="end"
className="form-control"
value={formData.end}
onChange={handleChange}
/>
</div>

          {/*------- currently working --------*/}

<div className="form-check  mt-3 mx-3 ">
<input
id="currentlyWorking"
type="checkbox"
name="currentlyWorking"
className="form-check-input"
onChange={handleChange}/>
<label className="form-check-label" htmlFor="currentlyWorking">Currently Working</label>
</div>

          {/*------- button --------*/}
          <div className='col-md-4 ms-auto d-flex justify-content-end me-5 '>         
   <button type="submit" className='btn btn-dark my-3 py-2 px-5'>Submit</button>
</div> 
</form>
<div className='d-flex justify-content-end bg-primary'style={{ position: "fixed", bottom: "20px", right: "20px", width: "50px" }}>
  <BackToTop/>
</div>
</div>
);
};
export default PortfolioForm1;