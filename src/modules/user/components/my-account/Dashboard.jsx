const Dashboard = () => {
  return (
    <div className="container w-full mt-9">
      <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-lg">
          Hello, John Doe (not John Doe? <a href="#" className="text-blue-500">Sign out</a>)
        </p>
        <p className="mt-4">
          From your account dashboard you can view your recent orders, manage your shipping and billing addresses and
          <a href="#" className="text-blue-500"> edit your password and account details</a>.
        </p>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-2">My Address</h3>
          <p>The following addresses will be used on the checkout page by default.</p>

          <div className="flex flex-wrap mt-4">
            <div className="w-full md:w-1/2 p-4">
              <h4 className="font-semibold">Billing Address</h4>
              <p>John Doe</p>
              <p>Green street</p>
              <p>12345 New York</p>
              <p>USA</p>
              <button className="mt-4 text-white bg-teal-500 px-4 py-2 rounded">Edit</button>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <h4 className="font-semibold">Shipping Address</h4>
              <p>John Doe</p>
              <p>Green street</p>
              <p>12345 New York</p>
              <p>USA</p>
              <button className="mt-4 text-white bg-teal-500 px-4 py-2 rounded">Edit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
