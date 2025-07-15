import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "../pages/Menu";

const Layout = () => {
  return (
   <div className="pt-[40px] flex items-center justify-center min-h-screen">
   <div className="pt-[40px] w-[80%] p-5 shadow-sm border rounded bg-blue-700/20">
      <ToastContainer />
      <Navigation />
      {console.log("layout page")}
      <Outlet />
    </div>
    </div>
  );
};

export default Layout;