// redux
import { useSelector } from "react-redux";

import CartItems from "../components/cart/CartItems";
import CartSummary from "../components/cart/CartSummary";
// import SubscribeBox from "../components/home/SubscribeBox";
import MainTitle from "../components/my-account/MainTitle";

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <>
      <MainTitle title={"Cart"} />
      <div className="container mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items Section */}
          <CartItems />

          {/* Cart Summary Section - only show if there are items in the cart */}
          {cartItems.length > 0 && <CartSummary />}
        </div>
        {/* <SubscribeBox /> */}
      </div>
    </>
  );
}
