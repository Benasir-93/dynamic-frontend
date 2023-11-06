import { useState,useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Dashboard from '../components/Dashboard';
import { Link, useNavigate } from "react-router-dom";
import Axios from 'axios'; // Import Axios

 const PortfolioForm = () => {
//   const initialValues = {
//     name: '',
//     headerTitle: '',
//     about: '',
//     resumeLink:'',
//     skills: '',
//     project1:'',
//     descriptionWithUr1:'',
//     project2:'',
//     descriptionWithUr2:'',
//     githubLinks:'',
//     linkedinLinks:'',
//     companyName:'',
//     exp:'',
//     start:'',
//     end:'',
//     currentlyWorking: false, //initial  checkbox value is false
// };
const storedUserId = localStorage.getItem('userID');

const [formValues, setFormValues] = useState({
  userID:storedUserId,
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
  companyName: '',
  exp: '',
  start: '',
  end: '',
  currentlyWorking: false,
});

// useEffect(() => {
//   const storedUserId = localStorage.getItem('userID');
//   const storedToken = localStorage.getItem('authToken');

//   if (!storedUserId || !storedToken) {
//     navigate('/login');
//   }
// }, []);

  // const validationSchema = Yup.object({
  //   name: Yup.string().required('Name is required'),
  //   headerTitle: Yup.string().required('Header is required'),
  //   about: Yup.string().required('About is required'),
  //   skills:Yup.string().required('Skills are required'),
  //   resumeLink: Yup.string().required('Resume is required').url('Must be a valid URL'),
  //   // project1: Yup.string().required('Project Title is required'),
  //   // descriptionWithUr1: Yup.string().required('Project Description is required'),
  //   // project2: Yup.string().required('Project Title Link is required'),
  //   // descriptionWithUr2: Yup.string().required('Project Description is required'),
  //   // companyName: Yup.string().required('Company/Institute Name is required'),
  //   // exp: Yup.string().notRequired('experience is required'),
  //   // start: Yup.date().required('Start date is required'),
  //   // end: Yup.date().notRequired(),
  //   // currentlyWorking: Yup.boolean().notRequired(), // Make "currentlyWorking" optional and a boolean
  //   // githubLinks:Yup.string().required('github link is required').url('Must be a valid URL'),
  //   // linkedinLinks:Yup.string().required('linkedin link is required').url('Must be a valid URL')
  // });

 const navigate=useNavigate();

  
  const onSubmit = async (values,e) => {
    try {
       // Prevent the default form submission behavior
      //  e.preventDefault();

      //  const storedUserId = localStorage.getItem('userID');
      //  const storedToken = localStorage.getItem('authToken');    
       
       // Your API endpoint where you want to post the form data
      const apiUrl = 'http://localhost:8080/api/portfolio/addportfolio'; // Replace with your actual API URL

      // Make an Axios POST request
      const response = await Axios.post(apiUrl, values);

      if (response.status === 200) {
        console.log('Form data submitted successfully:', response.data);
        setFormValues({
          userID:storedUserId,
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
  companyName: '',
  exp: '',
  start: '',
  end: '',
  currentlyWorking:'',
        });
      navigate.push('/portfolio-view', { formData: values });
      // navigate('/portfolio-view', { state: { formData: values } });

      } else {
        console.error('Form submission failed:', response);
      }
    } catch (error) {
      console.error('An error occurred while submitting the form:', error);
    }
  };
  // to check
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div className='text-dark mx-auto bg-light w-75 mt-5 mb-5'>
<div className="d-flex justify-content-between">
  <h2 className="p-3 mx-auto display-3 fw-bolder ">Portfolio Form</h2>

  <Link to={"/dashboard"}>
<button type="button" className="btn btn-dark btn-sm align-self-center me-3 px-3 mt-2">Go Back</button>
  </Link>
</div>
     <Formik
        initialValues={formValues}
        // validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className='fw-bold'>
          {/* name */}
          <div className='mb-3 mx-5'>
            <label for="name" className='form-label '>Name:</label>
            <Field type="text" id="name" name="name" className="form-control" value={formValues.name}
                  onChange={handleChange} placeholder="john doe"/>
            <ErrorMessage name="name" component="div" className="error form-text" />
          </div>

{/* header */}
           <div className='mb-3 mx-5'>
            <label for="headerTitle" className='form-label '>Header Title:</label>
            <Field type="text" id="headerTitle" name="headerTitle" className="form-control" value={formValues.headerTitle}
                  onChange={handleChange} placeholder="I'm a full stack devloper"/>
            <ErrorMessage name="headerTitle" component="div" className="error form-text" />
          </div>
          {/* about */}

          <div className='mb-3 mx-5'>
            <label for="about" className='form-label'>About:</label>
            <Field as="textarea" id="about" name="about" className="form-control"
            value={formValues.about}
            onChange={handleChange} placeholder="I'm working as a freelancer"/>
            <ErrorMessage name="about" component="div" className="error form-text" />
          </div>
{/* --------------------------------------resume url---------------------------------------------- */}
          <div className='mb-3 mx-5'>
            <label for="resumeLink" className='form-label'>Resume URL:</label>
            <Field type="url" id="resumeLink" name="resumeLink" className="form-control"
            value={formValues.resumeLink}
            onChange={handleChange} placeholder="www.drive.google/resume"/>
            <ErrorMessage name="resumeLink" component="div" className="error form-text" />
          </div>
{/* --------------------------------------------skills--------------------------------------- */}
          <div className='mb-3 mx-5'>
            <label for="skills" className='form-label'>Skills:</label>
            <Field type="text" id="skills" name="skills" className="form-control"
            value={formValues.skills}
            onChange={handleChange} placeholder="React,.."/>
            <ErrorMessage name="skills" component="div" className="error form-text" />
          </div>
                    {/*------------------------------------------- projects -----------------------------------------*/}
                    <h3 className='fw-bold p-3'>Projects</h3>
     <div>
            <div className='mb-3 mx-5'>
            <label for="project1" className='form-label'>Project Title:</label>
            <Field type="text" id="project1" name="project1" className="form-control"
            value={formValues.project1}
            onChange={handleChange} placeholder="your project title" />
            <ErrorMessage name="project1" component="div" className="error form-text" />
           </div> 

           <div className='mb-3 mx-5'>
            <label for="descriptionWithUr1" className='form-label'>Description With URL:</label>
            <Field as="textarea" id="descriptionWithUr1" name="descriptionWithUr1" className="form-control" 
            value={formValues.descriptionWithUr1}
            onChange={handleChange} placeholder="your project description with url" />
            <ErrorMessage name="descriptionWithUr1" component="div" className="error form-text" />
           </div>
           {/* --------------------------second project details------------------- */}
           <div className='mb-3 mx-5'>
            <label for="project2" className='form-label'>Project Title:</label>
            <Field type="text" id="project2" name="project2" className="form-control" 
            value={formValues.project2}
            onChange={handleChange} placeholder="your project title"/>
            <ErrorMessage name="project2" component="div" className="error form-text" />
           </div> 

           <div className='mb-3 mx-5'>
            <label for="descriptionWithUr2" className='form-label'>Description With URL:</label>
            <Field as="textarea" id="descriptionWithUr2" name="descriptionWithUr2" className="form-control"
            value={formValues.descriptionWithUr2}
            onChange={handleChange} placeholder="your project description with url"/>
            <ErrorMessage name="descriptionWithUr2" component="div" className="error form-text" />
           </div>
                   </div>

          {/*------------------------------------------- experience -----------------------------------------*/}
          <h3 className='fw-bold p-3'>Experience</h3>

         <div>

         <div className='mb-3 mx-5'>
            <label for="companyName" className='form-label'>Company/Institute Name:</label>
            <Field type="text" id="companyName" name="companyName" className="form-control" 
            value={formValues.companyName}
            onChange={handleChange} placeholder="Amazon"/>
            <ErrorMessage name="companyName" component="div" className="error form-text" />
           </div> 
          
          <div className='mb-3 mx-5'>
            <label for="exp" className='form-label'>Experience:</label>
            <Field type="text" id="exp" name="exp" className="form-control"
            value={formValues.exp}
            onChange={handleChange} placeholder="your experience" />
            <ErrorMessage name="exp" component="div" className="error form-text" />
          </div>

          <div className="row g-2 mb-3 mx-5" >

          <div class="col-md-6">
          <label for="start" className='form-label'>Start date:</label>
            <Field type="date" id="start" name="start" className="form-control" value={formValues.start}
            onChange={handleChange} />
            <ErrorMessage name="start" component="div" className="error form-text" />
         </div>

         <div class="col-md-6">
         <label for="end" className='form-label'>End Date:</label>
            <Field type="date" id="end" name="end" className="form-control" value={formValues.end}
                  onChange={handleChange} />
            <ErrorMessage name="end" component="div" className="error form-text" />
         </div>

         <div class="form-check mt-3">
  <input className="form-check-input" type="checkbox" id="flexCheckDefault" name="currentlyWorking" checked={formValues.currentlyWorking}  onChange={handleChange}/>
  <label class="form-check-label" for="flexCheckDefault">
   Currently Working
  </label>
</div>
          </div>
         </div>

          {/*------------------------------------------- social media -----------------------------------------*/}
          <h3 className='fw-bold p-3'>Social Media</h3>
                                         {/* --------github link ----------*/}
          <div className='mb-3 mx-5'>
            <label for="githubLinks" className='form-label'>Github Link:</label>
            <Field type="text" id="githubLinks" name="githubLinks" className="form-control"
            value={formValues.githubLinks}
            onChange={handleChange} placeholder="github url"/>
            <ErrorMessage name="githubLinks" component="div" className="error form-text" />
           </div>
                            {/* --------github link ----------*/}

            <div className='mb-3 mx-5'>
            <label for="linkedinLinks" className='form-label'>Linkedin Link:</label>
            <Field type="text" id="linkedinLinks" name="linkedinLinks" className="form-control" 
            value={formValues.linkedinLinks}
            onChange={handleChange} placeholder="linkedin url"/>
            <ErrorMessage name="linkedinLinks" component="div" className="error form-text" />
           </div> 

          {/* --------------------------submit button----------------------------------- */}
<div className='col-md-4 ms-auto d-flex justify-content-end me-5 '>         
   <button type="submit" className='btn btn-dark my-3 py-2 px-5'>Submit</button>
</div>        </Form>
      </Formik>
    </div>
  );
};

export default PortfolioForm;
