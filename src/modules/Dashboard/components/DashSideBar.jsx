import { BiBuoy } from "react-icons/bi";
import { HiChartPie, HiViewBoards } from "react-icons/hi";
import { RxDashboard } from "react-icons/rx";
import { LuUsers } from "react-icons/lu";
import { GiMedicines } from "react-icons/gi";
import { TbCategoryPlus, TbCalculator } from "react-icons/tb";
import { BiShoppingBag } from "react-icons/bi";

import { NavLink } from "react-router-dom";
export function DashSideBar() {
  return (
    <div className="bg-white w-52 h-screen border-r border-gray-200">
      <div className="flex flex-col p-4 space-y-4">
        {/* Main items */}
        <div className="space-y-2 border-b ">
          <NavLink
            to="/dashboard"
            className="flex items-center text-gray-500 hover:bg-primary hover:text-slate-200 p-2 rounded"
          >
            <RxDashboard className="mr-3" />
            Dashboard
          </NavLink>
          <NavLink
            to="customers"
            className={({ isActive }) =>
              `flex items-center p-2 rounded ${
                isActive
                  ? "bg-primary text-slate-200"
                  : "text-gray-500 hover:bg-primary hover:text-slate-200"
              }`
            }
          >
            <LuUsers className="mr-3" />
            Customers
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
            <GiMedicines className="mr-3" />
            Products
          </NavLink>
          <NavLink
            to="categories"
            className={({ isActive }) =>
              `flex items-center p-2 rounded ${
                isActive
                  ? "bg-primary text-slate-200"
                  : "text-gray-500 hover:bg-primary hover:text-slate-200"
              }`
            }
          >
            <TbCategoryPlus className="mr-3" />
            Categories
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
            Orders
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
