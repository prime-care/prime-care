import { Outlet } from "react-router-dom";
import DashHeader from "../components/DashHeader";
import { DashSideBar } from "../components/DashSideBar";
import Totals from "../components/Totals";
import Footer from "../components/DashFooter";

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <DashHeader />

      {/* Main content area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <DashSideBar />

        {/* Main content */}
        <div className="flex-1 p-4 overflow-auto">
          {/* Totals Component */}
          <Totals />

          {/* Outlet for nested routes */}
          <Outlet />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
