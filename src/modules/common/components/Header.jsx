import { navLinks } from "../../../constants";
import { Link, useNavigate } from "react-router-dom";

// redux
import { useSelector } from "react-redux";
import { selectTotal } from "../../../redux/slices/cartSlice";

// icons
import { FiUser } from "react-icons/fi"; // user icon
import { IoCartOutline } from "react-icons/io5"; // cart icon
import { FiMenu, FiX } from "react-icons/fi"; // burger and close icons
import { useEffect, useState } from "react";

import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { clearUser } from "../../../redux/slices/userSlice";
import { auth } from "../../../services/firebase";

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // select total and the cart from redux
  const total = useSelector(selectTotal);
  const cart = useSelector((state) => state.cart.items);
  const user = useSelector((state) => state.user.uid);

  // bump animation
  const [btnIsBumbed, setBtnIsBumbed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // burger menu state

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

  // Handle profile click
  const handleProfileClick = () => {
    if (!user) {
      navigate("/auth/login"); // Redirect to login if not authenticated
    } else {
      navigate("/profile/info"); // Go to profile if authenticated
    }
  };

  // Handle cart click
  const handleCartClick = () => {
    if (!user) {
      navigate("/auth/login"); // Redirect to login if not authenticated
    } else {
      navigate("/cart"); // Go to cart if authenticated
    }
  };

  // Toggle menu for small screens
  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  // handle logout
  const handleLogout = async () => {
    try {
      await signOut(auth);

      dispatch(clearUser());

      navigate("/");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <>
      <header className="px-4 sm:px-8 lg:px-11 py-2 flex justify-between items-center text-white bg-primary">
        <Link to="/" className="pr-5 sm:pr-12 lg:pr-24">
          <img src="/images/logo.png" alt="" className="w-24 sm:w-28 lg:w-32" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1">
          <ul className="flex gap-4 sm:gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <li key={link.name} className="hover:text-secondary">
                <Link
                  to={link.path}
                  className="text-sm sm:text-base lg:text-lg font-medium"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex gap-4 sm:gap-6 lg:gap-8">
          <button onClick={handleProfileClick}>
            <FiUser className="text-2xl sm:text-3xl" />
          </button>

          <button
            onClick={handleCartClick}
            className={`flex items-center gap-1 ${btnIsBumbed && "bump"}`}
          >
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
          </button>
          {/* login, logout and sign up buttons */}

          {user ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <div>
              <button
                className=" mr-2 "
                onClick={() => navigate("/auth/login")}
              >
                Login
              </button>
              <button onClick={() => navigate("/auth/signup")}>Sign Up</button>
            </div>
          )}
          {/* Burger Icon */}

          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {menuOpen ? (
                <FiX className="text-2xl" /> // Close icon
              ) : (
                <FiMenu className="text-2xl" /> // Burger icon
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Dropdown Menu - Separate from the header */}
      {menuOpen && (
        <nav className="fixed top-[65px] left-0 w-full bg-primary text-white md:hidden z-50">
          <ul className="flex flex-col items-center gap-4 py-4">
            {navLinks.map((link) => (
              <li key={link.name} className="hover:text-secondary">
                <Link
                  to={link.path}
                  onClick={() => setMenuOpen(false)} // Close the menu on link click
                  className="text-sm font-medium"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}
