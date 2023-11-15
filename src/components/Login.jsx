import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Oval } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { togglePasswordVisibility } from "../Utils/Utils";
import '../styles/form.css'

export default function Login() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const validation = yup.object({
    email: yup
      .string()
      .required("Email is required")
      .email("Email is not valid"),
    password: yup.string().required("Password is required"),
  });
  async function sendDataToLogin(values) {
    console.log("Working sendDataToLogin");
    setLoading(true);
    let { data } = await axios
      .post(
        // `https://password-reset-backend-lo0n.onrender.com/api/user/login/`,
        `https://dynamicportfoliobackend.onrender.com/api/user/login`,
        values
      )
      .then((response) => {
        return response;
      })
      .catch((err) => {
        setLoading(false);
        setError("Email or password is not valid");
        toast.error("Email or password is not valid", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
    setLoading(false);
    console.log(data);
    localStorage.setItem("Auth Token", `${data?.authToken}`);
    localStorage.setItem("userName", `${data?.userName}`);
    localStorage.setItem("userID", `${data?.userID}`);

    toast.success("Welcome To Dashoard", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    navigate("/Dashboard", { state: { message: "Welcome back" } });
  }
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validation,
    onSubmit: sendDataToLogin,
  });
  function changeBgLogin() {
    document.getElementById("change").classList.add("auth");
    console.log("Working changeBgLogin");
  }
  return (
    <>
              {/* Login form */}
      <div className="card m-5 mx-auto  py-5 py-md-0 w-50 cardform" >
  <div className="row g-0">
   
    <div className="col-md-12">
      <div className="card-body mx-5">
        <h1 className="text-white fw-bolder text-center">Login Now</h1>

        <form onSubmit={formik.handleSubmit}>
                  {error ? <p className="text-light ">{error}</p> : ""}
                  <input
                    type="email"
                    className="form-control mt-3"
                    placeholder="Enter Email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.email && formik.touched.email ? (
                    <p className="fs-small ps-1 text-light text-start">
                      {formik.errors.email}
                    </p>
                  ) : (
                    ""
                  )}
                  
                  <div className="position-relative">
                  
                    <input
                      id="password-input"
                      type="password"
                      className="form-control mt-3"
                      placeholder="Enter Password"
                      name="password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />

                    <i
                      onClick={() => togglePasswordVisibility()}
                      className="fa-regular fa-eye-slash eyeIcon"
                      style={{
                        position: 'absolute',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        right: '10px', 
                        cursor: 'pointer',
                      }}
                    ></i>
                  </div>
                  {formik.errors.password && formik.touched.password ? (
                    <p className="fs-small ps-1 text-light text-start">
                      {formik.errors.password}
                    </p>
                  ) : (
                    ""
                  )}
                  <button
                    onClick={() => changeBgLogin()}
                    id="change"
                    type="submit"
                    className="btn btn-outline-light fw-bold text-center mt-3 w-100"
                  >
                    {loading ? (
                      <div className="d-flex justify-content-center ">
                        <Oval
                          height={30}
                          width={30}
                          color="#fff"
                          wrapperStyle={{}}
                          wrapperClass=""
                          visible={true}
                          ariaLabel="oval-loading"
                          secondaryColor="white"
                          strokeWidth={2}
                          strokeWidthSecondary={2}
                        />
                      </div>
                    ) : (
                      "Login"
                    )}
                  </button>
                  <div className="mt-4 text-center">
                    <Link to="/forgotPassword" style={{textDecoration: "none" ,color:"white",fontWeight:"bold"}}>Forgot Password</Link>
                  </div>
                  <br />
                <p className="m-3 text-white"> Don't have an Account? Register Here
                <Link to={"/signup"}>
                  <button className=" btn btn-outline-light fw-bold text-center mt-3 w-100 ">
                    Register
                  </button>
                </Link>
                </p>
                </form>
      </div>
    </div>
  </div>
</div>
    </>
  );
}
