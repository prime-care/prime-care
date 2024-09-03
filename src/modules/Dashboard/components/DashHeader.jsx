import { MdNotificationsActive } from "react-icons/md";
import { BiSolidMessageAltDots } from "react-icons/bi";

const DashHeader = () => {
  return (
    <nav className="flex border-b items-center justify-between p-4 bg-white ">
      {/* Logo Section */}
      <div className="flex items-center w-52 ">
        <img src="\images\logo.png" alt="" className=" w-20" />
        <span className="text-lg font-semibold text-primary">Prime Care</span>
      </div>

      {/* Search Bar */}
      <div className="mx-4 ju flex-1">
        <input
          type="text"
          placeholder="Search"
          className="lg:w-1/2 md:w-3/4 px-3 py-2 text-sm bg-gray-100 rounded-full focus:border-0 focus:outline-none focus:ring-primary"
        />
      </div>

      {/* Icons and User Profile */}
      <div className="flex items-center  space-x-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-primary hover:text-white ">
          <MdNotificationsActive />
        </div>
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-primary hover:text-white">
          <BiSolidMessageAltDots className="" />
        </div>
        {/* <div className="flex items-center space-x-2">
          <img
            src="public\images\banner-2.jpg"
            alt="User Profile"
            className="w-12 h-12 rounded-full"
          />
          <span className="text-sm font-medium text-gray-700">
            Tommy Fisher
          </span>
        </div> */}
      </div>
    </nav>
  );
};

export default DashHeader;
