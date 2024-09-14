// redux
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  adjustQuantity,
} from "../../../../redux/slices/cartSlice";

// components
import { Button } from "flowbite-react";

// icons
import { AiOutlineMinus, AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

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
    <div className="lg:col-span-2 bg-white rounded-[1rem] border">
      {cartItems.length > 0 ? (
        <table className="w-full">
          <thead>
            <tr className="border-b hover:bg-[#f6f8f8] duration-200">
              <th className="text-left py-6 px-8">Product</th>
              <th className="text-left p-4">Price</th>
              <th className="text-left p-4">Quantity</th>
              <th className="text-left p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr
                key={item.id}
                className="border-b hover:bg-[#f6f8f8] duration-200">
                <td className="px-4 py-7 flex gap-6 items-center font-bold text-[#26658c] ">
                  <Link
                    to={`/products/${item.id}`}
                    className="flex gap-3 flex-col md:flex-row items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="md:w-24 md:h-24 h-16 w-16 mr-4"
                    />
                    <span className="max-w-52">{item.name}</span>
                  </Link>
                </td>
                <td className="px-4 py-7">
                  <span className="text-xl font-bold text-primary">
                    {item.price}
                    <span className="text-sm font-medium text-gray-500">
                      {" "}
                      $
                    </span>
                  </span>
                </td>
                <td className="px-4 py-7 text-gray-500">
                  <div className="p-2 flex gap-5 w-fit border border-gray-200 rounded-xl">
                    {/* minus */}
                    <button
                      className="hover:text-red-600 transition-all duration-300"
                      onClick={() => handleDecreaseQuantity(item.id)}>
                      <AiOutlineMinus />
                    </button>
                    <span>{item.quantity}</span>
                    {/* plus */}
                    <button
                      className="hover:text-green-600 transition-all duration-300"
                      onClick={() => handleIncreaseQuantity(item.id)}>
                      <AiOutlinePlus />
                    </button>
                  </div>
                </td>

                <td className="px-1 py-7">
                  {/* delete */}
                  <Button
                    color="failure"
                    onClick={() => handleRemoveItem(item.id)}>
                    <AiOutlineDelete className="mr-2 h-5 w-5" />
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="p-10 text-center text-gray-500">
          <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
          <p>Looks like you haven't added anything to your cart yet.</p>
          <Link to="/products" className="text-blue-500 mt-4 inline-block">
            Continue shopping
          </Link>
        </div>
      )}
    </div>
  );
}
