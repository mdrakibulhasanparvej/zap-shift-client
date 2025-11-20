import React from "react";
import { Link } from "react-router";

const ResetPassword = () => {
  return (
    <div className="card-body mx-auto w-96">
      <h2 className="text-3xl font-bold">Reset Password</h2>
      <p>Reset your password</p>

      <fieldset className="fieldset">
        <label className="label font-bold">New Password</label>
        <input type="password" className="input" placeholder="Password" />
        <label className="label font-bold">Confirm Password</label>
        <input type="password" className="input" placeholder="Password" />
        <button className="btn bg-[#CAEB66] hover:bg-[#89a72c] mt-4">
          Reset Password
        </button>
      </fieldset>
    </div>
  );
};

export default ResetPassword;
