import React from "react";
import { Outlet } from "react-router";
import Footer from "../pages/shared/footer/Footer";
import Navbar from "../pages/shared/navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 w-7xl mx-auto p-5">
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
