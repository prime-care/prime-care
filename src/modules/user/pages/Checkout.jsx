import { useState } from "react";
import { useSelector } from "react-redux";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../services/firebase";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import { Button, TextInput, Textarea } from "flowbite-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const userId = useSelector((state) => state.user.uid);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    phoneNumber: Yup.string()
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(10, "Phone number is too short")
      .max(15, "Phone number is too long")
      .required("Phone number is required"),
    address: Yup.string()
      .min(10, "Address must be at least 10 characters")
      .required("Address is required"),
  });

  const handlePlaceOrder = async (values, { setSubmitting }) => {
    setLoading(true);

    try {
      const products = cartItems.map((item) => ({
        productId: item.id,
        quantity: item.quantity,
      }));

      const totalAmount = cartItems
        .reduce((total, item) => total + item.price * item.quantity, 0)
        .toFixed(2);

      const order = {
        orderId: uuidv4(),
        userId: userId,
        products,
        totalAmount,
        status: "pending",
        createdAt: new Date().toISOString(),
        phoneNumber: values.phoneNumber,
        address: values.address,
      };

      const ordersCollection = collection(db, "orders");
      await addDoc(ordersCollection, order);

      toast.success("Order placed successfully");
      navigate("/profile/orders");
    } catch (error) {
      console.error("Error placing order:", error);
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  const getTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          <table className="w-full table-auto border-collapse border border-gray-200">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">Image</th>
                <th className="border border-gray-300 p-2">Name</th>
                <th className="border border-gray-300 p-2">Quantity</th>
                <th className="border border-gray-300 p-2">Price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td className="border border-gray-300 p-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover"
                    />
                  </td>
                  <td className="border border-gray-300 p-2">{item.name}</td>
                  <td className="border border-gray-300 p-2">
                    {item.quantity}
                  </td>
                  <td className="border border-gray-300 p-2">
                    ${item.price.toFixed(2)}
                  </td>
                </tr>
              ))}
              <tr>
                <td
                  colSpan="3"
                  className="border border-gray-300 p-2 font-bold">
                  Total:
                </td>
                <td className="border border-gray-300 p-2 font-bold">
                  ${getTotal()}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-2xl font-bold mb-4">Shipping Information</h2>
          <Formik
            initialValues={{ phoneNumber: "", address: "" }}
            validationSchema={validationSchema}
            onSubmit={handlePlaceOrder}>
            {({ isSubmitting }) => (
              <Form>
                <div className="mb-4">
                  <label
                    className="block text-lg font-medium mb-2"
                    htmlFor="phoneNumber">
                    Phone Number
                  </label>
                  <Field
                    name="phoneNumber"
                    type="text"
                    as={TextInput}
                    id="phoneNumber"
                  />
                  <ErrorMessage
                    name="phoneNumber"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-lg font-medium mb-2"
                    htmlFor="address">
                    Address
                  </label>
                  <Field name="address" as={Textarea} id="address" />
                  <ErrorMessage
                    name="address"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading || isSubmitting}
                  className="w-full">
                  {loading ? "Placing Order..." : "Place Order"}
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
