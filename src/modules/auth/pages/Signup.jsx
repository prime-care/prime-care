import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { IconContext } from "react-icons";

const Signup = () => {
  return (
    <div className="min-h-screen flex">
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-24 py-8">
        <div className="text-left">
          <h2 className="text-3xl font-bold mb-2">creat account</h2>
          <p className="text-gray-600 mb-6">
            sign up to access your financial insights and management tools 
          </p>
          <form className="space-y-6">
            <div>
              <label className="block mb-1 text-gray-700" htmlFor="firstName">
                First name
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full border rounded-lg px-4 py-2 focus:ring focus:outline-none"
                placeholder="Enter First Name"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700" htmlFor="lastName">
              Last name
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full border rounded-lg px-4 py-2 focus:ring focus:outline-none"
                placeholder="Enter Last Name"
              />
            </div>
            <div>
            <label className="block mb-1 text-gray-700" htmlFor="email">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="w-full border rounded-lg px-4 py-2 focus:ring focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
            <div>
            <label className="block mb-1 text-gray-700" htmlFor="email">
               Password
              </label>
              <input
                type="password"
                id="email"
                className="w-full border rounded-lg px-4 py-2 focus:ring focus:outline-none"
                placeholder="Createe a password"
              />
            </div>
          
            <button className="w-full bg-black text-white rounded-lg py-3 font-semibold">
              Sign Up 
            </button>
         
          </form>
          <div className="flex items-center justify-center my-4">
            <span className="text-gray-400">OR</span>
          </div>
          <div className="flex justify-center space-x-4">
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200">
              <IconContext.Provider value={{ size: "20px" }}>
                <FaApple />
              </IconContext.Provider>
            </button>
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200">
              <IconContext.Provider value={{ size: "20px" }}>
                <FcGoogle />
              </IconContext.Provider>
            </button>
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200">
              <IconContext.Provider value={{ size: "20px" }}>
                <FaFacebook />
              </IconContext.Provider>
            </button>
          </div>
          <div className="text-center mt-8">
            <span className="text-gray-500">Already have an account? </span>
            <a href="#" className="text-purple-600 hover:underline">
              Log in
            </a>
          </div>
        </div>
      </div>

      <div className="hidden lg:block lg:w-1/2 bg-gradient-to-r from-purple-500 to-purple-700 text-white relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-12">
            <h2 className="text-3xl font-bold mb-4">Welcome to Prime care</h2>
            <p className="mb-8">
              Our platform provides a comprehensive online shopping experience
              for all your medicine and medical care needs, offering you a wide
              selection of trusted products, seamless ordering, and reliable
              delivery to ensure your health and wellness are always a priority.
            </p>
            <img
              src="http://localhost:5173/images/logo.png"
              alt=""
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
