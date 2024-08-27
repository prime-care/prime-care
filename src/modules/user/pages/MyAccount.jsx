import Account from "../components/my-account/Account";
import OrderHistory from "../components/my-account/OrderHistory";
import Dashboard from "../components/my-account/Dashboard";
const MyAccount = () => {
  return (
    <>
      <Account />

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
