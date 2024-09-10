// components
import { HiUserCircle, HiClipboardList } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa6";
import { Outlet, NavLink } from "react-router-dom";

const MyAccount = () => {
  return (
    <div className="account-page pt-4 container">
      <div className="tabs flex justify-start items-center border-b border-gray-200">
        <NavLink
          to="info"
          className={({ isActive }) =>
            `tab p-3 flex items-center gap-3 border-b border-transparent rounded-t-lg transition-all duration-300 ${
              isActive
                ? "text-primary border-blue-900 bg-secondaryBg"
                : "text-gray-500"
            } hover:text-primary hover:border-blue-900 hover:bg-secondaryBg`
          }>
          <HiUserCircle className="w-6 h-6" />
          <span>Profile</span>
        </NavLink>

        <NavLink
          to="orders"
          className={({ isActive }) =>
            `tab p-3 flex items-center gap-3 border-b border-transparent rounded-t-lg transition-all duration-300 ${
              isActive
                ? "text-primary border-blue-900 bg-secondaryBg"
                : "text-gray-500"
            } hover:text-primary hover:border-blue-900 hover:bg-secondaryBg`
          }>
          <HiClipboardList className="w-6 h-6" />
          <span>Orders</span>
        </NavLink>

        <NavLink
          to="wishlist"
          className={({ isActive }) =>
            `tab p-3 flex items-center gap-3 border-b border-transparent rounded-t-lg transition-all duration-300 ${
              isActive
                ? "text-primary border-blue-900 bg-secondaryBg"
                : "text-gray-500"
            } hover:text-primary hover:border-blue-900 hover:bg-secondaryBg`
          }>
          <FaRegHeart className="w-6 h-6" />
          <span>Wishlist</span>
        </NavLink>
      </div>

      <div className="profile-views py-8">
        <Outlet />
      </div>
    </div>
  );
};

export default MyAccount;
