import { BiBuoy } from "react-icons/bi";
import { HiChartPie, HiViewBoards } from "react-icons/hi";

import { BiShoppingBag } from "react-icons/bi";
import { RiAccountCircleLine } from "react-icons/ri";
import { TbShoppingCartX } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";



import { NavLink } from "react-router-dom";
export function UserSideBar() {
  return (
    <div className="bg-white w-52 hidden md:block  border-r border-gray-200">
      <div className="flex flex-col p-4 space-y-4">
        {/* Main items */}
        <div className="space-y-2 border-b ">
          <NavLink
            to="/profile"
            className="flex items-center text-gray-500 hover:bg-primary hover:text-slate-200 p-2 rounded"
          >
            <RiAccountCircleLine className="mr-3" />
            My Profile
          </NavLink>
          <NavLink
            to="orders"
            className={({ isActive }) =>
              `flex items-center p-2 rounded ${
                isActive
                  ? "bg-primary text-slate-200"
                  : "text-gray-500 hover:bg-primary hover:text-slate-200"
              }`
            }
          >
            <BiShoppingBag className="mr-3" />
            My Orders
          </NavLink>
          <NavLink
            to="products"
            className={({ isActive }) =>
              `flex items-center p-2 rounded ${
                isActive
                  ? "bg-primary text-slate-200"
                  : "text-gray-500 hover:bg-primary hover:text-slate-200"
              }`
            }
          >
            <TbShoppingCartX className="mr-3" />
            Cancel
          </NavLink>
          <NavLink
            to="wishlist"
            className={({ isActive }) =>
              `flex items-center p-2 rounded ${
                isActive
                  ? "bg-primary text-slate-200"
                  : "text-gray-500 hover:bg-primary hover:text-slate-200"
              }`
            }
          >
            <FaRegHeart className="mr-3" />
            My Wishlist
          </NavLink>

          {/* <NavLink
            to="accounting"
            className="flex items-center text-gray-500 hover:bg-primary hover:text-slate-200 p-2 rounded"
          >
            <TbCalculator className="mr-3" />
            Accounting
          </NavLink> */}
        </div>

        {/* Additional items */}
        <div className="space-y-2 mt-auto">
          <NavLink
            to="#"
            className="flex items-center text-gray-500 hover:bg-primary hover:text-slate-200 p-2 rounded"
          >
            <HiChartPie className="mr-3" />
            Upgrade to Pro
          </NavLink>
          <NavLink
            to="#"
            className="flex items-center text-gray-500 hover:bg-primary hover:text-slate-200 p-2 rounded"
          >
            <HiViewBoards className="mr-3" />
            Documentation
          </NavLink>
          <NavLink
            to="#"
            className="flex items-center text-gray-500 hover:bg-primary hover:text-slate-200 p-2 rounded"
          >
            <BiBuoy className="mr-3" />
            Help
          </NavLink>
        </div>
      </div>
    </div>
  );
}
