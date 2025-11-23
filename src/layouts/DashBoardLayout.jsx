import React from "react";
import { GoSidebarCollapse } from "react-icons/go";
import { TiHomeOutline } from "react-icons/ti";
import { IoSettingsOutline } from "react-icons/io5";
import { Link, Outlet } from "react-router";
import Logo from "../component/logo/logo";

const DashBoardLayout = () => {
  return (
    <div className="drawer bg-gray-100 mx-auto p-5 lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      {/* Drawer Content */}
      <div className="drawer-content ml-3">
        {/* Navbar */}
        <nav className="navbar w-full bg-white shadow-sm rounded-xl ">
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            <GoSidebarCollapse className="my-1.5 inline-block size-4" />
          </label>
          <div className="px-4 font-semibold">
            <Logo />
          </div>
        </nav>

        {/* Page content */}
        <div className="my-4 p-4 bg-white shadow-sm rounded-xl">
          <Outlet />
        </div>
      </div>

      {/* Sidebar */}
      <div className="drawer-side bg-white shadow-sm rounded-xl is-drawer-close:overflow-visible">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

        <div
          className="flex min-h-full flex-col items-start 
                bg-white shadow-sm rounded-xl
                is-drawer-close:w-14 is-drawer-open:w-64"
        >
          <ul className="menu w-full grow">
            <li>
              <Link
                to="/"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Homepage"
              >
                <TiHomeOutline className="my-1.5 inline-block size-4" />
                <span className="is-drawer-close:hidden">Homepage</span>
              </Link>
            </li>

            <li>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Settings"
              >
                <IoSettingsOutline className="my-1.5 inline-block size-4" />
                <span className="is-drawer-close:hidden">Settings</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
