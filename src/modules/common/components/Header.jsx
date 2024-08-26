import React from "react";
import { navLinks } from "../../../constants";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io"; // search icon
import { FiUser } from "react-icons/fi"; // user icon
import { IoCartOutline } from "react-icons/io5"; // cart icon

export default function Header() {
  return (
    <header className=" px-11 py-2 flex justify-between items-center text-white bg-primary">
      <Link to="/" className=" pr-24">
        <img src="images/logo.png" alt="" className="w-32" />
      </Link>
      <nav className="flex-1">
        <ul className="flex gap-10">
          {navLinks.map((link) => (
            <li key={link.name} className="hover:text-secondary">
              <Link to={link.path} className="text-lg	font-medium">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex gap-8">
        <Link to="/">
          <IoIosSearch className="text-3xl" />
        </Link>
        <Link to="/profile">
          <FiUser className="text-3xl" />
        </Link>
        <Link to="/cart" className="flex items-center gap-1">
          <div className="relative">
            <IoCartOutline className="text-3xl" />
            <span className=" font-semibold absolute w-4 h-4 bg-[#d94945] rounded-full text-center text-[11px] leading-[17px] top-4 right-[-3px]">
              3
            </span>
          </div>
          <span className=" w font-semibold">48.99$</span>
        </Link>
      </div>
    </header>
  );
}
