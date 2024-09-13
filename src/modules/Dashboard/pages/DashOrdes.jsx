import { useState, useEffect } from "react";
import { Table, Modal, Button, Spinner } from "flowbite-react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

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
  const [deleteModal, setDeleteModal] = useState(false);
  const [orderToDelete, setOrderToDelete] = useState();
  const [isDeleting, setIsDeleting] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const ordersCollection = collection(db, "orders");
        const ordersSnapshot = await getDocs(ordersCollection);
        const ordersList = ordersSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setOrders(ordersList);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
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

  const openDeleteOrderModal = (categoryId) => {
    setOrderToDelete(categoryId);
    setDeleteModal(true);
  };

  const handleDeleteOrder = async () => {
    try {
      setIsDeleting(true);
      await deleteDoc(doc(db, "orders", orderToDelete));
      setOrders(orders.filter((order) => order.id !== orderToDelete));
      setDeleteModal(false);
    } catch (error) {
      console.error("Error deleting order:", error);
    } finally {
      setIsDeleting(false);
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
      {/* delete order modal */}
      <Modal show={deleteModal} onClose={() => setDeleteModal(false)}>
        <Modal.Header>Delete Order</Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete this order?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            color="failure"
            onClick={() => handleDeleteOrder()}
            disabled={isDeleting}>
            {isDeleting ? "Deleting..." : "Yes, delete"}{" "}
          </Button>
          <Button color="gray" onClick={() => setDeleteModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="flex mb-4">
        <Search onSearch={handleSearch} resetPage={resetPage} />
      </div>

      <div className="overflow-x-auto">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Spinner aria-label="Loading spinner" size="xl" />
          </div>
        ) : (
          <>
            <Table hoverable className="mb-3">
              <Table.Head className="p-4 text-primary">
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
                    key={order.id}>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {order.orderId}
                    </Table.Cell>
                    <Table.Cell>{order.userId}</Table.Cell>
                    <Table.Cell>
                      <FaExternalLinkAlt
                        onClick={() => handleViewProducts(order)}
                        size={20}
                        className="text-gray-500 transition-all duration-300 cursor-pointer hover:text-primary"
                      />
                    </Table.Cell>
                    <Table.Cell>{order.totalAmount}</Table.Cell>
                    <Table.Cell>
                      {new Date(order.createdAt).toLocaleString()}
                    </Table.Cell>
                    <Table.Cell>{order.phoneNumber}</Table.Cell>
                    <Table.Cell>{order.address}</Table.Cell>
                    <Table.Cell className="flex gap-4 items-center">
                      <Button
                        color="failure"
                        onClick={() => openDeleteOrderModal(order.id)}
                        disabled={isDeleting}>
                        <FaTrashAlt />
                      </Button>

                      {order.status === "pending" && (
                        <Button
                          color="success"
                          onClick={() =>
                            handleUpdateStatus(order.id, "completed")
                          }>
                          <FaCheck />
                        </Button>
                      )}
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
            {!loading && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </>
        )}
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
                  className="flex items-center bg-gray-100 p-4 rounded-lg">
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
