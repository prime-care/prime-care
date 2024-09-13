import { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { LuUsers } from "react-icons/lu";
import { GiMedicines } from "react-icons/gi";
import { TbCategoryPlus } from "react-icons/tb";
import { BiShoppingBag } from "react-icons/bi";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";

import { NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { clearUser } from "../../../redux/slices/userSlice";
import { auth } from "../../../services/firebase";
import { useNavigate } from "react-router-dom";

export function DashSideBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleLogout = async () => {
    try {
      await signOut(auth);

      dispatch(clearUser());

      navigate("/auth/login");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <div className="">
      <button
        onClick={toggleSidebar}
        className={`md:hidden p-4 ${
          isSidebarOpen ? "hidden" : "block"
        } text-gray-500 focus:outline-none`}
      >
        <MdKeyboardDoubleArrowRight size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`bg-white  w-52 border-r border-gray-200 transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:block fixed md:static h-full md:h-auto z-40`}
      >
        <div className="flex  flex-col p-4 space-y-4">
          {/* Main items */}
          <div className="space-y-2 border-b">
            <NavLink
              to="/dashboard"
              className="flex items-center text-gray-500 hover:bg-primary hover:text-slate-200 p-2 rounded"
              onClick={toggleSidebar}
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
              onClick={toggleSidebar}
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
              onClick={toggleSidebar}
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
              onClick={toggleSidebar}
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
              onClick={toggleSidebar}
            >
              <BiShoppingBag className="mr-3" />
              Orders
            </NavLink>
          </div>

          {/* Additional items */}
          <div className="space-y-2 mt-auto">
            <div
              onClick={handleLogout}
              className="flex items-center text-gray-500 hover:bg-primary hover:text-slate-200 p-2 rounded transition-all duration-200 cursor-pointer"
            >
              <IoIosLogOut className="mr-3" />
              Logout
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && (
        <div className="fixed inset-0 md:hidden" onClick={toggleSidebar}></div>
      )}
    </div>
  );
}
