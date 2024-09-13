import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <div className="absolute bg-secondary blur-sm inset-0 z-0 overflow-hidden">
        {/* <img
          src="/images/Untitled design.png"
          alt="Background"
          className="w-full h-full object-cover blur-sm"
        /> */}
      </div>

      {/* 404 Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full py-8 px-4">
        <h1 className="text-9xl font-extrabold text-primary tracking-widest">
          404
        </h1>
        <div className="bg-green-500 px-2 text-sm rounded rotate-12 absolute">
          Page Not Found
        </div>
        <p className="text-2xl text-primary mt-4">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link to="/" className="mt-8">
          <button className="relative inline-block text-sm font-medium text-white group focus:outline-none focus:ring">
            <span className="absolute inset-0 transition-transform translate-x-0 translate-y-0 bg-green-500 group-hover:translate-y-1 group-hover:translate-x-1"></span>
            <span className="relative block px-8 py-3 bg-primary border border-current">
              Back to Prime Care!
            </span>
          </button>
        </Link>
        <div className="mt-16">
          <img
            src="public\images\sad-emoji-png-transparent.png"
            alt="Sad emoji"
            className="w-40 h-40 animate-bounce"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
