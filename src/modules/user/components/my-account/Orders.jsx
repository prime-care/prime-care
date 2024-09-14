import React, { useState, useEffect } from "react";
// components
import { Table } from "flowbite-react";
import { Button } from "flowbite-react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Modal } from "flowbite-react";

import { useSelector } from "react-redux";
import { db } from "../../../../services/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const userId = useSelector((state) => state.user.uid);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const ordersRef = collection(db, "orders");
        const q = query(ordersRef, where("userId", "==", userId));
        const querySnapshot = await getDocs(q);

        const ordersData = await Promise.all(
          querySnapshot.docs.map(async (orderDoc) => {
            const orderData = orderDoc.data();
            const productsWithDetails = await Promise.all(
              orderData.products.map(async (product) => {
                const productQuery = query(
                  collection(db, "products"),
                  where("productId", "==", product.productId)
                );
                const productSnapshot = await getDocs(productQuery);

                if (!productSnapshot.empty) {
                  const productDoc = productSnapshot.docs[0];
                  const productData = productDoc.data();
                  return {
                    ...product,
                    name: productData.name,
                    price: productData.price,
                    image: productData.image,
                  };
                } else {
                  console.error(
                    "No product found with productId:",
                    product.productId
                  );
                  return product;
                }
              })
            );
            return {
              id: orderDoc.id,
              ...orderData,
              products: productsWithDetails,
            };
          })
        );

        setOrders(ordersData);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, [userId]);

  const openModal = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedOrder(null);
    setIsModalOpen(false);
  };

  return (
    <div className="overflow-x-auto">
      <div className="head">
        <h1 className="mb-6 text-2xl font-medium text-gray-700">
          Orders History
        </h1>
      </div>

      {orders.length === 0 ? (
        <div className="py-10 mt-4 bg-secondaryBg rounded-lg">
          <p className="no-data text-center text-xl font-semibold text-gray-700">
            No Orders Found
          </p>
        </div>
      ) : (
        <>
          {/* order products modal */}
          <Modal show={selectedOrder} onClose={closeModal}>
            <Modal.Header>Order Products</Modal.Header>
            <Modal.Body>
              <div className="flex flex-col gap-3">
                {selectedOrder?.products.map((product) => (
                  <div
                    key={product.productId}
                    className="p-3 flex justify-between items-center gap-3 border border-gray-300 rounded-lg">
                    <img src={product.image} className="w-12 h-12" alt="" />
                    <span>{product.name}</span>
                    <span>
                      {product.price}{" "}
                      <span className="text-sm font-medium text-gray-500">
                        $
                      </span>{" "}
                      x {product.quantity}
                    </span>
                    <span>
                      ${(product.price * product.quantity).toFixed(2)}
                      <span className="text-sm font-medium text-gray-500">
                        $
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button color="gray" onClick={closeModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          <Table>
            <Table.Head>
              <Table.HeadCell>ID</Table.HeadCell>
              <Table.HeadCell>Products</Table.HeadCell>
              <Table.HeadCell>Total</Table.HeadCell>
              <Table.HeadCell>Status</Table.HeadCell>
              <Table.HeadCell>Date</Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Edit</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {orders.map((order) => (
                <Table.Row
                  key={order.id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>{order.id}</Table.Cell>
                  <Table.Cell>
                    <FaExternalLinkAlt
                      size={20}
                      className="text-gray-500 cursor-pointer transition-all duration-300 hover:text-primary"
                      onClick={() => openModal(order)}
                    />
                  </Table.Cell>
                  <Table.Cell>
                    {order.totalAmount + " "}
                    <span>$</span>
                  </Table.Cell>
                  <Table.Cell>{order.status}</Table.Cell>
                  <Table.Cell>
                    {new Date(order.createdAt).toLocaleDateString()}
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </>
      )}
    </div>
  );
};

export default Orders;
