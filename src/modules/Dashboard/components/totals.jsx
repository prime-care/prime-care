import { GrMoney } from "react-icons/gr";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { BiSolidOffer } from "react-icons/bi";
import { HiCurrencyDollar } from "react-icons/hi2";



export default function Totals() {
  return (
    <div className="flex justify-around  p-4 px-8  ">
      <div className="flex items-center space-x-4 p-4 px-8  bg-white rounded-lg shadow">
        <div className="text-secondary flex justify-center items-center h-10 w-10 text-3xl rounded-lg bg-gray-100">
          <GrMoney />
        </div>
        <div>
          <h2 className="text-gray-500">Total Sales</h2>
          <p className="text-2xl font-semibold">$135,320</p>
        </div>
      </div>
      <div className="flex items-center space-x-4 p-4 px-8 bg-white rounded-lg shadow">
        <div className="text-secondary flex justify-center items-center  h-10 w-10 text-3xl rounded-lg bg-gray-100">
          <BiSolidPurchaseTag />
        </div>
        <div>
          <h2 className="text-gray-500">Total Purchases</h2>
          <p className="text-2xl font-semibold">$64,850</p>
        </div>
      </div>
      <div className="flex items-center space-x-4 p-4 px-8 bg-white rounded-lg shadow">
        <div className="text-secondary flex justify-center items-center  h-10 w-10 text-3xl rounded-lg bg-gray-100">
          <BiSolidOffer />
        </div>
        <div>
          <h2 className="text-gray-500">Total Taxes</h2>
          <p className="text-2xl font-semibold">$10,540</p>
        </div>
      </div>
      <div className="flex items-center space-x-4 p-4 px-8 bg-white rounded-lg shadow">
        <div className="text-secondary flex justify-center items-center  h-10 w-10 text-3xl rounded-lg bg-gray-100">
          <HiCurrencyDollar />
        </div>
        <div>
          <h2 className="text-gray-500">Total Profit</h2>
          <p className="text-2xl font-semibold">$59,930</p>
        </div>
      </div>
    </div>
  );
}
