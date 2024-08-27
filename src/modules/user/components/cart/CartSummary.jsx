import React from "react";

export default function CartSummary() {
  return (
    <div className=" h-fit p-6 rounded-[1rem] border">
      <h2 className="text-xl font-semibold border-b pb-4 text-[#46a69c]">
        Cart Totals
      </h2>
      <div className="mt-4">
        <div className=" border-b pb-4 ">
          <span className="font-semibold py-6 px-8">Subtotal</span>
          <span className="py-6 px-8 text-gray-600">$25.94</span>
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
          <span className="py-6 px-8">$25.94</span>
        </div>
        <button className=" duration-300 py-4 px-8 bg-[#4abfd9] hover:bg-[#41a8bf] text-white w-full mt-4 rounded-[1rem] text-xl font-semibold">
          Proceed to Checkout →
        </button>
      </div>
    </div>
  );
}
