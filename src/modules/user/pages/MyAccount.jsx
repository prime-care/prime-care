import MainTitle from "../components/my-account/MainTitle";
import OrderHistory from "../components/my-account/OrderHistory";
import Dashboard from "../components/my-account/Dashboard";
const MyAccount = () => {
  return (
    <>
      <MainTitle title={"My Account"} />

      <div className="mt-9 ">
        <OrderHistory />
      </div>
      <div className="mt-9">
        <Dashboard />
      </div>
    </>
  );
};

export default MyAccount;
