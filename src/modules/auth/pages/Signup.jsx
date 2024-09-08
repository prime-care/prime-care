import React, { useState } from "react";

//redux
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/slices/userSlice";

//firebase
import { auth, db } from "../../../services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

// icons
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";
import { IconContext } from "react-icons";
import { doc, setDoc } from "firebase/firestore";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  // create account and add new user into users collection
  const handleSignUp = async (e) => {
    e.preventDefault();
    // create account
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // store basic user data into users collection
      await setDoc(doc(db, "users", user.uid), {
        userId: user.uid,
        name,
        email,
        phone: "", // initially empty, will be filled with the first order
        address: "", // ~
      });

      dispatch(setUser({ uid: user.uid, email: user.email, name }));
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-24 py-8">
        <div className="text-left">
          <h2 className="text-3xl font-bold mb-2">Create Account</h2>
          <p className="text-gray-600 mb-6">
            Sign up to access your financial insights and management tools
          </p>
          <form onSubmit={handleSignUp} className="space-y-6">
            <div>
              <label className="block mb-1 text-gray-700" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="w-full border rounded-lg px-4 py-2 focus:ring focus:outline-none"
                placeholder="Enter your username"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border rounded-lg px-4 py-2 focus:ring focus:outline-none"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full border rounded-lg px-4 py-2 focus:ring focus:outline-none"
                placeholder="Create a password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
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

      <div className="hidden lg:block lg:w-1/2 bg-[#1f5373] text-white relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-12">
            <h2 className="text-3xl font-bold mb-4">Welcome to Prime Care</h2>
            <p className="mb-8">
              Our platform provides a comprehensive online shopping experience
              for all your medicine and medical care needs, offering you a wide
              selection of trusted products, seamless ordering, and reliable
              delivery.
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
