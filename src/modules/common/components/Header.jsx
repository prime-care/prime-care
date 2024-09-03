import { navLinks } from "../../../constants";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io"; // search icon
import { FiUser } from "react-icons/fi"; // user icon
import { IoCartOutline } from "react-icons/io5"; // cart icon

export default function Header() {
  return (
    <header className="px-4 sm:px-8 lg:px-11 py-2 flex justify-between items-center text-white bg-primary">
      <Link to="/" className="pr-5 sm:pr-12 lg:pr-24">
        <img src="/images/logo.png" alt="" className="w-24 sm:w-28 lg:w-32" />
      </Link>
      <nav className="hidden md:flex flex-1">
        <ul className="flex gap-4 sm:gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <li key={link.name} className="hover:text-secondary">
              <Link
                to={link.path}
                className="text-sm sm:text-base lg:text-lg font-medium">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex gap-4 sm:gap-6 lg:gap-8">
        <Link to="/">
          <IoIosSearch className="text-2xl sm:text-3xl" />
        </Link>
        <Link to="/profile">
          <FiUser className="text-2xl sm:text-3xl" />
        </Link>
        <Link to="/cart" className="flex items-center gap-1">
          <div className="relative">
            <IoCartOutline className="text-2xl sm:text-3xl" />
            <span className="font-semibold absolute w-4 h-4 bg-[#d94945] rounded-full text-center text-[10px] sm:text-[11px] leading-[16px] sm:leading-[17px] top-4 right-[-3px]">
              3
            </span>
          </div>
          <span className="text-sm sm:text-base font-semibold">48.99$</span>
        </Link>
      </div>
    </header>
  );
}
