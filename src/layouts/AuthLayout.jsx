import React from "react";
import { Outlet } from "react-router";
import authimg from "../assets/authImage.png";
import Logo from "../component/logo/logo";

const AuthLayout = () => {
  return (
    <div className="flex items-center min-h-screen justify-center ">
      <div className="flex flex-col flex-1 pl-10">
        <div className="self-start my-10">
          <Logo />
        </div>
        <Outlet />
      </div>
      <div className="flex-1 md:inline-block h-screen hidden lg:flex justify-center items-center bg-[#FAFDF0]">
        <img src={authimg} alt="" />
      </div>
    </div>
  );
};

export default AuthLayout;
