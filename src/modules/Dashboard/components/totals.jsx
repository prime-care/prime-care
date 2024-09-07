import { GrMoney } from "react-icons/gr";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { BiSolidOffer } from "react-icons/bi";
import { HiCurrencyDollar } from "react-icons/hi2";

export default function Totals() {
  return (
    <div className="grid  grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {/* Total Sales */}
      <div className="flex items-center space-x-4 p-3 sm:p-4 px-6 sm:px-8 bg-white rounded-lg shadow">
        <div className="text-secondary flex justify-center items-center h-8 w-8 sm:h-10 sm:w-10 text-2xl sm:text-3xl rounded-lg bg-gray-100">
          <GrMoney />
        </div>
        <div>
          <h2 className="text-gray-500 text-sm sm:text-base">Total Sales</h2>
          <p className="text-xl sm:text-2xl font-semibold">$135,320</p>
        </div>
      </div>

      {/* Total Purchases */}
      <div className="flex items-center space-x-4 p-3 sm:p-4 px-6 sm:px-8 bg-white rounded-lg shadow">
        <div className="text-secondary flex justify-center items-center h-8 w-8 sm:h-10 sm:w-10 text-2xl sm:text-3xl rounded-lg bg-gray-100">
          <BiSolidPurchaseTag />
        </div>
        <div>
          <h2 className="text-gray-500 text-sm sm:text-base">
            Total Purchases
          </h2>
          <p className="text-xl sm:text-2xl font-semibold">$64,850</p>
        </div>
      </div>

      {/* Total Taxes */}
      <div className="flex items-center space-x-4 p-3 sm:p-4 px-6 sm:px-8 bg-white rounded-lg shadow">
        <div className="text-secondary flex justify-center items-center h-8 w-8 sm:h-10 sm:w-10 text-2xl sm:text-3xl rounded-lg bg-gray-100">
          <BiSolidOffer />
        </div>
        <div>
          <h2 className="text-gray-500 text-sm sm:text-base">Total Taxes</h2>
          <p className="text-xl sm:text-2xl font-semibold">$10,540</p>
        </div>
      </div>

      {/* Total Profit */}
      <div className="flex items-center space-x-4 p-3 sm:p-4 px-6 sm:px-8 bg-white rounded-lg shadow">
        <div className="text-secondary flex justify-center items-center h-8 w-8 sm:h-10 sm:w-10 text-2xl sm:text-3xl rounded-lg bg-gray-100">
          <HiCurrencyDollar />
        </div>
        <div>
          <h2 className="text-gray-500 text-sm sm:text-base">Total Profit</h2>
          <p className="text-xl sm:text-2xl font-semibold">$59,930</p>
        </div>
      </div>
    </div>
  );
}
