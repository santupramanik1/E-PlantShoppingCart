// src/components/Layout.jsx
import React from "react";
import { Navbar } from "./Navbar";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {

    const location = useLocation();

  // Define pages where Navbar should appear
  const showNavbar = ["/cart", "/products"].includes(location.pathname);

  return (
    <div className="relative min-h-screen overflow-hidden border">
      {/* Background Image with Blur */}
      <div
        className="fixed inset-0 bg-cover bg-center blur-sm"
        style={{ backgroundImage: "url('/bg-image.jpg')" }}
      ></div>

{/* Conditionally render Navbar */}
      {showNavbar && <Navbar />}

      {/* Glassmorphism Content Area */}
      <div className="relative z-10 flex justify-center items-center min-h-screen px-4">
        <div className=" p-8 text-white ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
