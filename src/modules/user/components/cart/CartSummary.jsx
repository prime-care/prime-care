// redux
import { useSelector } from "react-redux";
import { selectTotal } from "../../../../redux/slices/cartSlice";
import { Link } from "react-router-dom";

export default function CartSummary() {
  const total = useSelector(selectTotal);
  const cart = useSelector((state) => state.cart.items);
  console.log(cart);

  // payment integration
  const makePayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51PyZ141ZDVTzrKJZgFt1Zzd5BbqGVUjl0pl0Zs1NVhS8smvattnP4MY1tlCmSRSSBRm6wFpZS6xHZRkq1pJHybPv00guI3jkvT"
    );

    const body = {
      products: cart,
    };

    const headers = {
      "Content-Type": "application/json",
    };
  };

  return (
    <div className=" h-fit p-6 rounded-[1rem] border">
      <h2 className="text-xl font-semibold border-b pb-4 text-[#46a69c]">
        Cart Totals
      </h2>
      <div className="mt-4">
        <div className=" border-b pb-4 ">
          <span className="font-semibold py-6 px-8">Subtotal</span>
          <span className="text-xl font-bold text-primary">
            {total}
            <span className="text-sm font-medium text-gray-500"> EGP</span>
          </span>
        </div>
        <div className="mt-4 flex text-gray-600">
          <span className=" self-start  px-8 font-semibold">Shipping</span>
          <div className="flex-col flex">
            <label className=" mb-2">
              <input type="radio" name="shipping" /> Free shipping
            </label>
            <label className=" mb-2">
              <input type="radio" name="shipping" /> Flat shipping
            </label>
            <p>
              Shipping options will be <br /> updated during checkout.
            </p>
          </div>
        </div>
        <div className=" mt-4 border-t pt-4 text-[#46a69c] font-semibold">
          <span className="py-6 px-8 ">Total</span>
          <span className="text-xl font-bold">
            {total}
            <span className="text-sm font-medium text-gray-500"> EGP</span>
          </span>
        </div>
        {/* <Link to={"/checkout"}> */}
        <button
          onClick={makePayment}
          className=" duration-300 py-4 px-8 bg-[#4abfd9] hover:bg-[#41a8bf] text-white w-full mt-4 rounded-[1rem] text-xl font-semibold">
          Proceed to Checkout →
        </button>
        {/* </Link> */}
      </div>
    </div>
  );
}
