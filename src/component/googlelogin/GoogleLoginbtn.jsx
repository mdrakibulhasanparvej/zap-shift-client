import React from "react";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router";

const GoogleLoginbtn = ({ children }) => {
  const { signInGoogle } = useAuth();
  const locations = useLocation();
  const navigate = useNavigate();
  const handleWithGoogle = () => {
    signInGoogle()
      .then((result) => {
        console.log(result.user);
        navigate(locations?.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <button
        className="btn bg-[#CAEB66] hover:bg-[#89a72c]"
        onClick={handleWithGoogle}
      >
        {children}
      </button>
    </div>
  );
};

export default GoogleLoginbtn;
