// components
import { Link } from "react-router-dom";

const DashHeader = () => {
  return (
    <nav className="flex border-b items-center justify-between bg-white ">
      {/* Logo Section */}
      <div className="logo">
        <Link to="/" className="flex justify-start items-center">
          <img src="/images/logo.png" alt="" className="w-28" />
          <span className="text-lg font-semibold text-primary">Prime Care</span>
        </Link>
      </div>
    </nav>
  );
};

export default DashHeader;
