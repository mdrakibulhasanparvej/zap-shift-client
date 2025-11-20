import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

const Login = () => {
  const { register } = useForm();
  return (
    <div className="card-body mx-auto w-96">
      <h2 className="text-3xl font-bold">Welcome Back</h2>
      <p>Login with grabShift</p>
      <fieldset className="fieldset">
        <label className="label font-bold">Email</label>
        <input
          type="email"
          {...register("email")}
          className="input"
          placeholder="Email"
        />
        <label className="label font-bold">Password</label>
        <input
          type="password"
          {...register("password")}
          className="input"
          placeholder="Password"
        />
        <div>
          <Link to="/forgetPassword" className="link link-hover">
            Forgot password?
          </Link>
        </div>
        <button className="btn bg-[#CAEB66] hover:bg-[#89a72c] mt-4">
          Login
        </button>

        <div className="flex flex-col items-start">
          <p>
            Don't have any account?{" "}
            <Link to="/register" className="link link-hover">
              {" "}
              Register
            </Link>
          </p>
          <p className="flex items-center">OR</p>
        </div>
        <button className="btn bg-[#CAEB66] hover:bg-[#89a72c] mt-4">
          Login with Google
        </button>
      </fieldset>
    </div>
  );
};

export default Login;
