import React from "react";
import { Link } from "react-router";

const ForgetPassword = () => {
  return (
    <div className="card-body mx-auto w-96">
      <h2 className="text-3xl font-bold">Forgot Password</h2>
      <p>Enter your email address and we’ll send you a reset link.</p>

      <fieldset className="fieldset">
        <label className="label font-bold">Email</label>
        <input type="email" className="input" placeholder="Email" />
        <button className="btn bg-[#CAEB66] hover:bg-[#89a72c] mt-4">
          Send
        </button>
        <div>
          <p>
            Remember your password?{" "}
            <Link to="/login" className="link link-hover">
              {" "}
              Login
            </Link>
          </p>
        </div>
      </fieldset>
    </div>
  );
};

export default ForgetPassword;
