import MainTitle from "../components/my-account/MainTitle";
// import OrderHistory from "../components/my-account/OrderHistory";
import Dashboard from "../components/my-account/Dashboard";
import UserOrders from "../components/my-account/userOrders";
import EditProfile from "../components/my-account/EditProfile";
const MyAccount = () => {
  return (
    <>
      <div className="">
        <MainTitle title={"My Account"} />

        <div className="mt-9 ">
          {/* <OrderHistory /> */}
          <UserOrders />
        </div>
        <div className="mt-9">
          <Dashboard />
        </div>
        <div className="mt-9">
          <EditProfile/>
        </div>
      </div>
    </>
  );
};

export default MyAccount;
