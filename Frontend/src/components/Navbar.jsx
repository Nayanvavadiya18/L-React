import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="shrink-0">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              Logo
            </Link>
          </div>
          
          <div className="flex space-x-8 items-center">
            <Link 
              to="/home" 
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/profile" 
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              Profile
            </Link>
            <Link 
              to="/" 
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              Login
            </Link>
            <Link 
              to="/signup" 
              className="btn-primary"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
