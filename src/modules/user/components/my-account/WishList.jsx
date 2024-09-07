import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  adjustQuantity,
} from "../../../../redux/slices/cartSlice";
import { Button } from "flowbite-react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { RiDislikeLine } from "react-icons/ri";

export default function WishList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleIncreaseQuantity = (id) => {
    dispatch(adjustQuantity({ id, quantity: 1 }));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(adjustQuantity({ id, quantity: -1 }));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="lg:col-span-2 bg-white rounded-[1rem] border p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="border-b hover:bg-[#f6f8f8] duration-200">
              <th className="text-left py-4 px-2 lg:px-4">Product</th>
              <th className="text-left py-4 px-2 lg:px-4">Price</th>
              <th className="text-left py-4 px-2 lg:px-4">Quantity</th>
              <th className="text-left py-4 px-2 lg:px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr
                key={item.id}
                className="border-b hover:bg-[#f6f8f8] duration-200"
              >
                <td className="px-2 py-4 lg:px-4">
                  <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2 lg:gap-4">
                    <Link
                      to={`/products/${item.id}`}
                      className="flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 object-cover rounded"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full"
                      />
                    </Link>
                    <span className="text-sm lg:text-base font-bold text-[#26658c] lg:w-64 w-32 truncate">
                      {item.name}
                    </span>
                  </div>
                </td>
                <td className="px-2 py-4 lg:px-4">
                  <span className="text-lg lg:text-xl font-bold text-primary block">
                    {item.price}
                    <span className="text-sm font-medium text-gray-500">
                      {" "}
                      EGP
                    </span>
                  </span>
                </td>
                <td className="px-2 py-4 lg:px-4">
                  <div className="p-2 flex items-center gap-2 lg:gap-4 w-fit border border-gray-200 rounded-xl">
                    <button
                      className="hover:text-red-600 transition-all duration-300"
                      onClick={() => handleDecreaseQuantity(item.id)}
                    >
                      <AiOutlineMinus />
                    </button>
                    <span className="text-center">{item.quantity}</span>
                    <button
                      className="hover:text-green-600 transition-all duration-300"
                      onClick={() => handleIncreaseQuantity(item.id)}
                    >
                      <AiOutlinePlus />
                    </button>
                  </div>
                </td>
                <td className="px-2 py-4 lg:px-4">
                  <div className="flex items-center justify-center">
                    <Button
                      color="failure"
                      onClick={() => handleRemoveItem(item.id)}
                      className="flex items-center justify-center w-full max-w-[85px] lg:max-w-none  overflow-hidden whitespace-nowrap truncate"
                    >
                      <RiDislikeLine className="mr-1 h-5 w-5" />
                      Remove
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="py-4 px-2 lg:px-7 flex flex-col lg:flex-row items-center lg:justify-between gap-4 hover:bg-[#f6f8f8] duration-200">
        <button className="h-12 w-full px-6 py-3 lg:w-auto bg-[#4abfd9] hover:bg-[#41a8bf] font-semibold text-lg text-white rounded-[1rem] duration-300">
          Add to cart
        </button>
        <button className="hover:bg-primary hover:text-white duration-300 bg-[#edf1f2] px-6 py-3 rounded-[1rem] font-semibold text-lg w-full lg:w-auto">
          Go to Cart
        </button>
      </div>
    </div>
  );
}
