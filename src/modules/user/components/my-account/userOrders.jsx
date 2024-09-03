
const UserOrders = () => {
  return (
    <div className=" container">
      <h2 className="text-2xl font-semibold mb-4">Order History</h2>
      <div className="border rounded-lg p-4  mx-auto">
        <div className="flex justify-between items-center mb-2">
          <div>
            <span className="font-semibold">Order ID: </span>
            <span className="font-bold">8924</span>
            <span className="text-secondary ml-2">Shipped</span>
          </div>
          <div className="flex gap-3 flex-wrap">
            <button className="border border-red-500 text-red-500 px-2 py-1 rounded">
              CANCEL ORDER
            </button>
            <button className="bg-primary text-white px-2 py-1 rounded">
              TRACK ORDER
            </button>
          </div>
        </div>
        <div className="text-sm text-gray-500 mb-4">Date: 16 December 2022</div>

        <div className="grid grid-cols-3 border-t pt-4 gap-4 mb-4">
          <div className="border-r">
            <h3 className="font-semibold">Contact</h3>
            <p>Mike Johatan</p>
            <p>Phone: 371-295-9131</p>
            <p>Email: info@mywebsite.com</p>
          </div>

          <div className="border-r">
            <h3 className="font-semibold">Shipping address</h3>
            <p>United States</p>
            <p>3601 Old Capitol Trail, Unit A-7,</p>
            <p>Suite 170777, Wilmington, DE 19808</p>
          </div>

          <div>
            <h3 className="font-semibold">Payment</h3>
            <p className="text-secondary">Visa **** 4216</p>
            <p>Shipping fee: $56</p>
            <p>Total paid: $456</p>
          </div>
        </div>

        <div className="flex justify-between gap-3 flex-wrap border-t pt-4">
          <div className="flex items-center space-x-2">
            <img
              src="public\images\cat-3.png"
              alt="T-shirt"
              className="w-12 h-12 object-cover"
            />
            <div>
              <p>T-shirts with multiple colors</p>
              <p>2x = $25.98</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <img
              src="public\images\cat-2.png"
              alt="Headset"
              className="w-12 h-12 object-cover"
            />
            <div>
              <p>Gaming Headset 32db Black</p>
              <p>2x = $339.90</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <img
              src="public\images\cat-1.png"
              alt="Watch"
              className="w-12 h-12 object-cover"
            />
            <div>
              <p>Apple Watch Series 4 Space Gray</p>
              <p>2x = $339.90</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserOrders;
