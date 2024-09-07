import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Footer Top */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Company Info */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-2">Prime Care</h2>
            <p className="text-sm text-secondary">
              Your trusted online pharmacy.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex space-x-8 mb-6 md:mb-0">
            <div>
              <h3 className="font-semibold mb-2 text-secondary">Quick Links</h3>
              <ul className="text-sm space-y-1">
                <li>
                  <a href="#" className="hover:text-indigo-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-300">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-300">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-300">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-secondary">Support</h3>
              <ul className="text-sm space-y-1">
                <li>
                  <a href="#" className="hover:text-indigo-300">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-300">
                    Shipping & Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-300">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-300">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-2 text-secondary">Contact Us</h3>
            <p className="text-sm text-secondary mb-1">
              Email: support@pharmaco.com
            </p>
            <p className="text-sm text-secondary">Phone: +1 800 123 456</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-6 flex justify-between items-center">
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-secondary hover:text-indigo-300">
              <FaFacebookF />
            </a>
            <a href="#" className="text-secondary hover:text-indigo-300">
              <FaTwitter />
            </a>
            <a href="#" className="text-secondary hover:text-indigo-300">
              <FaInstagram />
            </a>
            <a href="#" className="text-secondary hover:text-indigo-300">
              <FaLinkedinIn />
            </a>
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
