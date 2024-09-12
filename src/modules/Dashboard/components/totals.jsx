import { FaProductHunt } from "react-icons/fa";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";

export default function Totals() {
  return (
    <div className="mb-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Total Sales */}
      <div className="flex items-center space-x-4 p-3 sm:p-4 px-6 sm:px-8 bg-white rounded-lg shadow">
        <div className="text-secondary flex justify-center items-center h-8 w-8 sm:h-10 sm:w-10 text-2xl sm:text-3xl rounded-lg bg-gray-100">
          <FaMoneyBill1Wave />
        </div>
        <div>
          <h2 className="text-gray-500 text-sm sm:text-base">Total Sales</h2>
          <p className="text-xl sm:text-2xl font-semibold">
            1250{" "}
            <span className="text-base font-medium text-gray-500">EGP</span>
          </p>
        </div>
      </div>

      {/* Total Purchases */}
      <div className="flex items-center space-x-4 p-3 sm:p-4 px-6 sm:px-8 bg-white rounded-lg shadow">
        <div className="text-secondary flex justify-center items-center h-8 w-8 sm:h-10 sm:w-10 text-2xl sm:text-3xl rounded-lg bg-gray-100">
          <BiCategory />
        </div>
        <div>
          <h2 className="text-gray-500 text-sm sm:text-base">
            Total Categories
          </h2>
          <p className="text-xl sm:text-2xl font-semibold">
            12 <span className="text-base font-medium text-gray-500">EGP</span>
          </p>
        </div>
      </div>

      {/* Total Taxes */}
      <div className="flex items-center space-x-4 p-3 sm:p-4 px-6 sm:px-8 bg-white rounded-lg shadow">
        <div className="text-secondary flex justify-center items-center h-8 w-8 sm:h-10 sm:w-10 text-2xl sm:text-3xl rounded-lg bg-gray-100">
          <FaProductHunt />
        </div>
        <div>
          <h2 className="text-gray-500 text-sm sm:text-base">Total Products</h2>
          <p className="text-xl sm:text-2xl font-semibold">
            21 <span className="text-base font-medium text-gray-500">EGP</span>
          </p>
        </div>
      </div>

      {/* Total Profit */}
      <div className="flex items-center space-x-4 p-3 sm:p-4 px-6 sm:px-8 bg-white rounded-lg shadow">
        <div className="text-secondary flex justify-center items-center h-8 w-8 sm:h-10 sm:w-10 text-2xl sm:text-3xl rounded-lg bg-gray-100">
          <FaShoppingBag />
        </div>
        <div>
          <h2 className="text-gray-500 text-sm sm:text-base">Total Orders</h2>
          <p className="text-xl sm:text-2xl font-semibold">6</p>
        </div>
      </div>
    </div>
  );
}
