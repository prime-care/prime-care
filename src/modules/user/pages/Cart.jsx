import React from "react";
import CartItems from "../components/cart/CartItems";
import CartSummary from "../components/cart/CartSummary";
import SubscribeBox from "../components/home/SubscribeBox";

export default function CartPage() {
  return (
    <div className="container  my-24">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items Section */}
        <CartItems />

        {/* Cart Summary Section */}
        <CartSummary />
      </div>
      <SubscribeBox />
    </div>
  );
}
