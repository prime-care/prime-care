// import MainTitle from "../components/my-account/MainTitle";
// import OrderHistory from "../components/my-account/OrderHistory";
// import Dashboard from "../components/my-account/Dashboard";
// import UserOrders from "../components/my-account/userOrders";
// import EditProfile from "../components/my-account/EditProfile";
import { UserSideBar } from "../components/my-account/UserSideBar";
import { Outlet } from "react-router-dom";

const MyAccount = () => {
  return (
    <div className="flex">
      <UserSideBar className="w-1/4 bg-gray-100" />

      <div className="flex-1 p-6 overflow-auto">
          <Outlet />
        </div>
      </div>
  );
};

export default MyAccount;
