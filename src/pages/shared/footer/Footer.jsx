import React from "react";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Logo from "../../../component/logo/logo";

const Footer = () => {
  return (
    <footer className="rounded-xl shadow-sm footer footer-horizontal footer-center bg-white text-base-content rounded p-10">
      <div>
        <Logo />
      </div>
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">Services</a>
        <a className="link link-hover">Coverage</a>
        <a className="link link-hover">About Us</a>
        <a className="link link-hover">Pricing</a>
        <a className="link link-hover">Blog</a>
        <a className="link link-hover">Contact</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <FaLinkedin />
          <FaSquareXTwitter />
          <FaFacebook />
          <FaYoutube />
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          zapShift Ltd
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
