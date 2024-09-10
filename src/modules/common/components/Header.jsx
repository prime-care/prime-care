import { navLinks } from "../../../constants";
import { Link } from "react-router-dom";

// redux
import { useSelector } from "react-redux";
import { selectTotal } from "../../../redux/slices/cartSlice";

// icons
import { FiUser } from "react-icons/fi"; // user icon
import { IoCartOutline } from "react-icons/io5"; // cart icon
import { useEffect, useState } from "react";

export default function Header() {
  // select total and the cart from redux
  const total = useSelector(selectTotal);
  const cart = useSelector((state) => state.cart.items);

  // bump animation
  const [btnIsBumbed, setBtnIsBumbed] = useState(false);

  useEffect(() => {
    if (cart.length === 0) {
      return;
    }
    setBtnIsBumbed(true);

    const timer = setTimeout(() => {
      setBtnIsBumbed(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [total]);

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
        <Link to="/profile/info">
          <FiUser className="text-2xl sm:text-3xl" />
        </Link>
        <Link
          to="/cart"
          className={`flex items-center gap-1 ${btnIsBumbed && "bump"}`}>
          <div className="relative">
            <IoCartOutline className="text-2xl sm:text-3xl" />
            {cart.length !== 0 && (
              <span className="font-semibold absolute w-4 h-4 bg-[#d94945] rounded-full text-center text-[10px] sm:text-[11px] leading-[16px] sm:leading-[17px] top-4 right-[-3px]">
                {cart.length}
              </span>
            )}
          </div>
          {cart.length !== 0 && (
            <span className="text-sm sm:text-base font-semibold">
              {total.toFixed(2)}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
