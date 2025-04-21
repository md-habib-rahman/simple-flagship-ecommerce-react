import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-116px)]">
        <div className="mx-auto px-8 md:px-16 lg:px-32 xl:px-64">
          <Outlet></Outlet>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MainLayout;
