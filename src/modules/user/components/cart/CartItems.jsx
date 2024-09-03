import React from "react";

// redux
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  adjustQuantity,
} from "../../../../redux/slices/cartSlice";

// icons
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";

export default function CartItems() {
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
    <div className="lg:col-span-2 bg-white  rounded-[1rem] border ">
      <table className="w-full">
        <thead>
          <tr className="border-b hover:bg-[#f6f8f8] duration-200">
            <th className="text-left py-6 px-8">Product</th>
            <th className="text-left p-4">Price</th>
            <th className="text-left p-4">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr
              key={item.id}
              className="border-b hover:bg-[#f6f8f8] duration-200"
            >
              <td className="px-8 py-7 flex gap-6 items-center font-bold text-[#26658c] ">
                {/* delete */}
                <AiOutlineDelete
                  className=" cursor-pointer w-8 h-8 text-[#515759]"
                  onClick={() => handleRemoveItem(item.id)}
                />
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24  mr-4"
                />
                <span className=" max-w-52">{item.name}</span>
              </td>
              <td className="px-8 py-7">${item.price}</td>
              <td className="px-8 py-7 text-gray-500">
                <div className="border border-gray-200 rounded-[1rem] p-2">
                  {/* minus */}
                  <button
                    className=" px-2 py-1"
                    onClick={() => handleDecreaseQuantity(item.id)}
                  >
                    <AiOutlineMinus />
                  </button>
                  <span className="mx-4">{item.quantity}</span>
                  {/* plus */}
                  <button
                    className=" px-2 py-1"
                    onClick={() => handleIncreaseQuantity(item.id)}
                  >
                    <AiOutlinePlus />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="py-5 px-7 flex items-center justify-between hover:bg-[#f6f8f8] duration-200">
        <div className="flex w-full max-w-[36rem]">
          <input
            type="text"
            placeholder="Enter coupon code"
            className="h-12 border border-gray-300 p-3 w-full rounded-l-[1rem]"
          />
          <button className="min-w-48 h-12 bg-[#4abfd9] hover:bg-[#41a8bf] font-semibold text-lg text-white rounded-r-[1rem] duration-300">
            Apply Coupon
          </button>
        </div>
        <button className="hover:bg-primary hover:text-white duration-300 bg-[#edf1f2] px-6 py-3 rounded-[1rem] font-semibold text-lg">
          Update Cart
        </button>
      </div>
    </div>
  );
}
