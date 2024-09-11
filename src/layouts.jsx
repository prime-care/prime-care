import { Outlet } from "react-router-dom";
import Header from "./modules/common/components/Header";
import Footer from "./modules/common/components/Footer";

// AuthLayout.js
const AuthLayout = () => {
  return <Outlet />;
};

// DashboardLayout.js
const DashboardLayout = () => {
  return <Outlet />;
};

// PublicLayout.js
const PublicLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export { AuthLayout, DashboardLayout, PublicLayout };
