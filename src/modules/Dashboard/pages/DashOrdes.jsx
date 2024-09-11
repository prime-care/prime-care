import { useState, useEffect } from "react";
import { Checkbox, Table, Modal, Button, Label } from "flowbite-react";
import { MdOutlineDeleteSweep } from "react-icons/md";

import { db } from "../../../services/firebase";
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
  getDoc,
} from "firebase/firestore";

import Pagination from "../../common/components/Pagination";
import usePagination from "../../common/hooks/usePagination";
import Search from "../../common/components/Search";
import useSearch from "../../common/hooks/useSearch";

export default function DashOrders() {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const ordersCollection = collection(db, "orders");
        const ordersSnapshot = await getDocs(ordersCollection);
        const ordersList = ordersSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setOrders(ordersList);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    // Fetch products from Firestore
    const fetchProducts = async () => {
      try {
        const productsCollection = collection(db, "products");
        const productsSnapshot = await getDocs(productsCollection);
        const productsList = productsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsList);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchOrders();
    fetchProducts();
  }, []);

  const handleDeleteOrder = async (orderId) => {
    try {
      await deleteDoc(doc(db, "orders", orderId));
      setOrders(orders.filter((order) => order.id !== orderId));
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  const handleViewProducts = (order) => {
    setSelectedOrder(order);
  };

  const handleCloseModal = () => {
    setSelectedOrder(null);
  };

  const handleUpdateStatus = async (orderId, newStatus) => {
    try {
      const orderDoc = doc(db, "orders", orderId);

      const orderSnapshot = await getDoc(orderDoc);

      if (orderSnapshot.exists()) {
        const orderData = orderSnapshot.data();
        const orderOwnerId = orderData.userId; // we will use it in notification

        await updateDoc(orderDoc, { status: newStatus });

        const updatedOrders = orders.map((order) =>
          order.orderId === orderId ? { ...order, status: newStatus } : order
        );
        setOrders(updatedOrders);
      } else {
        console.error("Order not found");
      }
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  const { searchResults, handleSearch } = useSearch(orders);

  const itemsPerPage = 8;
  const { currentPage, currentItems, totalPages, handlePageChange, resetPage } =
    usePagination(
      searchResults.length === 0 ? orders : searchResults,
      itemsPerPage
    );

  const getProductDetails = (productId) => {
    return products.find((product) => product.productId === productId);
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <Search onSearch={handleSearch} resetPage={resetPage} />
        <Table hoverable>
          <Table.Head className="p-4 text-primary">
            <Table.HeadCell className="p-4">
              <Checkbox />
            </Table.HeadCell>
            <Table.HeadCell>Order Id</Table.HeadCell>
            <Table.HeadCell>User Id</Table.HeadCell>
            <Table.HeadCell>Products</Table.HeadCell>
            <Table.HeadCell>Total Amount</Table.HeadCell>
            <Table.HeadCell>Created At</Table.HeadCell>
            <Table.HeadCell>Phone Number</Table.HeadCell>
            <Table.HeadCell>Address</Table.HeadCell>
            <Table.HeadCell>Actions</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {currentItems.map((order) => (
              <Table.Row
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                key={order.id}
              >
                <Table.Cell className="p-4">
                  <Checkbox />
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {order.orderId}
                </Table.Cell>
                <Table.Cell>{order.userId}</Table.Cell>
                <Table.Cell>
                  <button
                    className="text-blue-500 underline"
                    onClick={() => handleViewProducts(order)}
                  >
                    View Products
                  </button>
                </Table.Cell>
                <Table.Cell>{order.totalAmount}</Table.Cell>
                <Table.Cell>
                  {new Date(order.createdAt).toLocaleString()}
                </Table.Cell>
                <Table.Cell>{order.phoneNumber}</Table.Cell>
                <Table.Cell>{order.address}</Table.Cell>
                <Table.Cell className="flex gap-4 items-center">
                  <button
                    className="text-pink-700 text-xl"
                    onClick={() => handleDeleteOrder(order.id)}
                  >
                    <MdOutlineDeleteSweep />
                  </button>
                  {order.status === "pending" && (
                    <button
                      onClick={() => handleUpdateStatus(order.id, "completed")}
                      className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600 ml-2"
                    >
                      Mark as Completed
                    </button>
                  )}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>

      {/* Modal for showing order details */}

      <Modal show={selectedOrder} onClose={handleCloseModal}>
        <Modal.Header>Order Details</Modal.Header>
        <Modal.Body>
          <div className="space-y-4">
            {selectedOrder?.products.map((orderProduct) => {
              const productDetails = getProductDetails(orderProduct.productId);
              return (
                <li
                  key={orderProduct.productId}
                  className="flex items-center bg-gray-100 p-4 rounded-lg"
                >
                  {productDetails ? (
                    <>
                      <img
                        src={productDetails.image}
                        alt={productDetails.name}
                        className="w-20 h-20 object-cover rounded mr-6"
                      />
                      <div className="flex flex-col">
                        <p className="text-lg font-semibold text-gray-700">
                          {productDetails.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          <strong>Price:</strong> ${productDetails.price}
                        </p>
                        <p className="text-sm text-gray-500">
                          <strong>Quantity:</strong> {orderProduct.quantity}
                        </p>
                        <p className="text-sm text-gray-800 font-semibold">
                          <strong>Total:</strong> $
                          {productDetails.price * orderProduct.quantity}
                        </p>
                      </div>
                    </>
                  ) : (
                    <p className="text-gray-500">Product details not found</p>
                  )}
                </li>
              );
            })}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
