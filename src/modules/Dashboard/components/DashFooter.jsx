import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 justify-between items-start">
          {/* Column 1: Company Info */}
          <div>
            <h2 className="text-xl font-bold mb-2">Prime Care</h2>
            <p className="text-sm text-secondary">
              Your trusted online pharmacy.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-semibold mb-2 text-secondary">Quick Links</h3>
            <ul className="text-sm space-y-1">
              <li>
                <Link to="/" className="hover:text-indigo-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-indigo-300">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-indigo-300">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Support Links */}
          <div>
            <h3 className="font-semibold mb-2 text-secondary">Support</h3>
            <ul className="text-sm space-y-1">
              <li>
                <Link to="/help-center" className="hover:text-indigo-300">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-indigo-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="font-semibold mb-2 text-secondary">Contact Us</h3>
            <p className="text-sm text-secondary mb-1">
              Email: support@primecare.com
            </p>
            <p className="text-sm text-secondary">Phone: +20 1201456635</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          {/* Social Icons */}
          <div className="flex space-x-4 mb-6 md:mb-0">
            <Link to="#" className="text-secondary hover:text-indigo-300">
              <FaFacebookF />
            </Link>
            <Link to="#" className="text-secondary hover:text-indigo-300">
              <FaTwitter />
            </Link>
            <Link to="#" className="text-secondary hover:text-indigo-300">
              <FaInstagram />
            </Link>
            <Link to="#" className="text-secondary hover:text-indigo-300">
              <FaLinkedinIn />
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-sm text-secondary">
            © {new Date().getFullYear()} PharmaCo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
