import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaRegUser } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

const Checkout = () => {
  const [step, setStep] = useState(1);
  const [billingDetails, setBillingDetails] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("creditcard");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });

  const handleBillingChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handlePayment = (e) => {
    e.preventDefault();
    if (paymentMethod === "creditcard") {
      if (Object.values(cardDetails).every((field) => field.trim() !== "")) {
        toast.success("Payment Successful!");
        setStep(3);
      } else {
        toast.error("Please fill in all credit card details.");
      }
    } else {
      toast.success(
        `${
          paymentMethod.charAt(0).toUpperCase() + paymentMethod.slice(1)
        } Payment Selected!`
      );
      setStep(3);
    }
  };

  const handleNextStep = () => {
    if (Object.values(billingDetails).every((field) => field.trim() !== "")) {
      setStep(2);
    } else {
      toast.error("Please fill in all billing details.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-center text-2xl font-semibold mb-6">Checkout</h1>

        {/* Step Indicator */}
        <div className="flex justify-between mb-6">
          <div
            className={`flex  flex-1 flex-col items-center ${
              step === 1 ? "text-primary" : "text-gray-400"
            }`}>
            <div
              className={`flex items-center justify-center w-10 h-10 text-white rounded-full ${
                step === 1 ? "bg-primary" : "bg-gray-500"
              }`}>
              <FaRegUser />
            </div>
            <p className="text-center mt-2">Billing</p>
          </div>
          <div
            className={`flex  flex-1 flex-col items-center ${
              step === 2 ? "text-primary" : "text-gray-400"
            }`}>
            <div
              className={`flex items-center justify-center w-10 h-10 text-white rounded-full ${
                step === 2 ? "bg-primary" : "bg-gray-500"
              }`}>
              <MdPayment />
            </div>
            <p className="text-center mt-2">Payment</p>
          </div>
          <div
            className={`flex  flex-1 flex-col items-center ${
              step === 3 ? "text-primary" : "text-gray-400"
            }`}>
            <div
              className={`flex items-center justify-center w-10 h-10 text-white rounded-full ${
                step === 3 ? "bg-primary" : "bg-gray-500"
              }`}>
              <FaCheck />
            </div>
            <p className="text-center mt-2">Place Order</p>
          </div>
        </div>

        {/* Billing Information */}
        {step === 1 && (
          <div>
            <h3 className="text-xl font-medium mb-4">Billing Information</h3>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={billingDetails.fullName}
                  onChange={handleBillingChange}
                  className="mt-1 block w-full p-2 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={billingDetails.email}
                  onChange={handleBillingChange}
                  className="mt-1 block w-full p-2 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Address</label>
                <input
                  type="text"
                  name="address"
                  value={billingDetails.address}
                  onChange={handleBillingChange}
                  className="mt-1 block w-full p-2 border rounded-md"
                />
              </div>
              <div className="flex gap-4 mb-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium">City</label>
                  <input
                    type="text"
                    name="city"
                    value={billingDetails.city}
                    onChange={handleBillingChange}
                    className="mt-1 block w-full p-2 border rounded-md"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    name="postalCode"
                    value={billingDetails.postalCode}
                    onChange={handleBillingChange}
                    className="mt-1 block w-full p-2 border rounded-md"
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={handleNextStep}
                className="w-full py-2 px-4 bg-primary text-white font-semibold rounded-md shadow-md hover:bg-gray-700 transition-all duration-300">
                Next
              </button>
            </form>
          </div>
        )}

        {/* Payment Method */}
        {step === 2 && (
          <div>
            <h3 className="text-xl font-medium mb-4">Payment Method</h3>
            <form onSubmit={handlePayment}>
              <div className="mb-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    value="creditcard"
                    checked={paymentMethod === "creditcard"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="form-radio text-primary"
                  />
                  <span className="ml-2">Credit Card</span>
                </label>
              </div>
              {paymentMethod === "creditcard" && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium">
                      Card Number
                    </label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={cardDetails.cardNumber}
                      onChange={handleCardChange}
                      className="mt-1 block w-full p-2 border rounded-md"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">
                      Name on Card
                    </label>
                    <input
                      type="text"
                      name="cardName"
                      value={cardDetails.cardName}
                      onChange={handleCardChange}
                      className="mt-1 block w-full p-2 border rounded-md"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="flex gap-4">
                    <div>
                      <label className="block text-sm font-medium">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        name="expiryDate"
                        value={cardDetails.expiryDate}
                        onChange={handleCardChange}
                        className="mt-1 block w-full p-2 border rounded-md"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium">CVV</label>
                      <input
                        type="text"
                        name="cvv"
                        value={cardDetails.cvv}
                        onChange={handleCardChange}
                        className="mt-1 block w-full p-2 border rounded-md"
                        placeholder="123"
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    value="cash"
                    checked={paymentMethod === "cash"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="form-radio text-indigo-600"
                  />
                  <span className="ml-2">Cash on Delivery</span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 mt-6 bg-primary text-white font-semibold rounded-md shadow-md hover:bg-gray-700 transition-all duration-300">
                Confirm Payment
              </button>
            </form>
          </div>
        )}

        {/* Place Order Confirmation */}
        {step === 3 && (
          <div className="text-center">
            <h3 className="text-xl font-medium mb-4">Review and Place Order</h3>
            <p>Review your order and place it by clicking the button below.</p>
            <button
              onClick={() => setStep(4)}
              className="mt-6 w-full py-2 px-4 bg-primary text-white font-semibold rounded-md shadow-md hover:bg-gray-700 transition-all duration-300">
              Place Order
            </button>
          </div>
        )}

        {/* Order Success */}
        {step === 4 && (
          <div className="text-center">
            <h3 className="text-xl font-medium mb-4">
              Order Placed Successfully!
            </h3>
            <p>
              Thank you for your purchase. Your order has been placed
              successfully.
            </p>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Checkout;
