import { useEffect, useState } from "react";
import { FaProductHunt } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { HiMiniUsers } from "react-icons/hi2";
import { BiCategory } from "react-icons/bi";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../services/firebase";

export default function Totals() {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalCategories, setTotalCategories] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);

  useEffect(() => {
    // Fetch users count
    const fetchUsersCount = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        setTotalUsers(querySnapshot.size); // Get the number of documents in the users collection
      } catch (error) {
        console.error("Error fetching users count:", error);
      }
    };

    // Fetch products count
    const fetchProductsCount = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        setTotalProducts(querySnapshot.size); // Get the number of documents in the products collection
      } catch (error) {
        console.error("Error fetching products count:", error);
      }
    };

    // Fetch categories count
    const fetchCategoriesCount = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "categories"));
        setTotalCategories(querySnapshot.size); // Get the number of documents in the categories collection
      } catch (error) {
        console.error("Error fetching categories count:", error);
      }
    };

    // Fetch orders count
    const fetchOrdersCount = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "orders"));
        setTotalOrders(querySnapshot.size); // Get the number of documents in the orders collection
      } catch (error) {
        console.error("Error fetching orders count:", error);
      }
    };

    fetchUsersCount();
    fetchProductsCount();
    fetchCategoriesCount();
    fetchOrdersCount();
  }, []);

  return (
    <div className="mb-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Total Sales */}
      <div className="flex items-center space-x-4 p-3 sm:p-4 px-6 sm:px-8 bg-white rounded-lg shadow">
        <div className="text-secondary flex justify-center items-center h-8 w-8 sm:h-10 sm:w-10 text-2xl sm:text-3xl rounded-lg bg-gray-100">
          <HiMiniUsers />
        </div>
        <div>
          <h2 className="text-gray-500 text-sm sm:text-base">
            Total Customers
          </h2>
          <p className="text-xl sm:text-2xl font-semibold">
            {totalUsers}{" "}
            <span className="text-base font-medium text-gray-500">$</span>
          </p>
        </div>
      </div>

      {/* Total Categories */}
      <div className="flex items-center space-x-4 p-3 sm:p-4 px-6 sm:px-8 bg-white rounded-lg shadow">
        <div className="text-secondary flex justify-center items-center h-8 w-8 sm:h-10 sm:w-10 text-2xl sm:text-3xl rounded-lg bg-gray-100">
          <BiCategory />
        </div>
        <div>
          <h2 className="text-gray-500 text-sm sm:text-base">
            Total Categories
          </h2>
          <p className="text-xl sm:text-2xl font-semibold">
            {totalCategories}{" "}
            <span className="text-base font-medium text-gray-500">
              categories
            </span>
          </p>
        </div>
      </div>

      {/* Total Products */}
      <div className="flex items-center space-x-4 p-3 sm:p-4 px-6 sm:px-8 bg-white rounded-lg shadow">
        <div className="text-secondary flex justify-center items-center h-8 w-8 sm:h-10 sm:w-10 text-2xl sm:text-3xl rounded-lg bg-gray-100">
          <FaProductHunt />
        </div>
        <div>
          <h2 className="text-gray-500 text-sm sm:text-base">Total Products</h2>
          <p className="text-xl sm:text-2xl font-semibold">
            {totalProducts}{" "}
            <span className="text-base font-medium text-gray-500">items</span>
          </p>
        </div>
      </div>

      {/* Total Orders */}
      <div className="flex items-center space-x-4 p-3 sm:p-4 px-6 sm:px-8 bg-white rounded-lg shadow">
        <div className="text-secondary flex justify-center items-center h-8 w-8 sm:h-10 sm:w-10 text-2xl sm:text-3xl rounded-lg bg-gray-100">
          <FaShoppingBag />
        </div>
        <div>
          <h2 className="text-gray-500 text-sm sm:text-base">Total Orders</h2>
          <p className="text-xl sm:text-2xl font-semibold">
            {totalOrders}{" "}
            <span className="text-base font-medium text-gray-500">orders</span>
          </p>
        </div>
      </div>
    </div>
  );
}
