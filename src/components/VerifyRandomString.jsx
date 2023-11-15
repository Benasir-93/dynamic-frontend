import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../styles/form.css'

export default function VerifyRandomString() {
  const [verificationStatus, setVerificationStatus] = useState("Verifying...");
  const navigate = useNavigate();
  const { randomString } = useParams();

  useEffect(() => {
    async function verifyRandomString() {
      try {
        const response = await axios.get(
          `https://dynamicportfoliobackend.onrender.com/api/user/verifyRandomString/${randomString}`
        );

        if (response.data.message === "Random String Verified") {
          // If the random string is verified, display a success message
          toast.success("Random String Verified Successfully", {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setVerificationStatus("Random String Verified");
        } else {
          // If verification fails, display an error message
          setVerificationStatus("Random String Verification Failed");
          toast.error("Random String Verification Failed", {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      } catch (error) {
        // Handle API request error
        setVerificationStatus("Random String is Invalid or Expires");
        toast.error("Random String is Invalid or Expires", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        console.error(error);
      }
    }

    if (randomString) {
      verifyRandomString();
    }
  }, [randomString]);

  // Handle the "Continue" button click
  const handleContinueClick = () => {
    navigate(`/resetPassword/${randomString}`);
  };

  return (
    <div class="card cardform m-5 mx-auto py-5 py-md-0 w-50 " >
<div class="row g-0">
       
        <div class="col-md-12">
      <div class="card-body mx-5 mx-md-0">
            <h1 className="text-white fw-bolder">Verify Random String</h1>
            <p className="mt-3 text-light">{verificationStatus}</p>
            {verificationStatus === "Random String Verified" && (
              <button
                onClick={handleContinueClick}
                className="btn btn-outline-light fw-bold  text-center mt-3 w-100"
              >
                Continue to Reset Password
              </button> )}
              <p className="text-light mt-4 fw-bold ">back to 
              <Link to="/forgotPassword">
              <button className=" btn btn-outline-light fw-bold  py-2 px-3 ms-2">
                Send Reset Link
              </button>
            </Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}
