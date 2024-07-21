import React from "react";
import logo from "../assets/logo.jpg";

const AuthLayouts = ({ children }) => {
  return (
    <>
      <header className="flex justify-center items-center py-3 h-20 shadow-md bg-white">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="logo" className="h-16 w-16 object-cover" />
          <span className="text-2xl font-bold text-gray-800">QuickChat  </span>
        </div>
      </header>
      {children}
    </>
  );
};

export default AuthLayouts;
