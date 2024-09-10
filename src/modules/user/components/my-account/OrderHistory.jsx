import { useState } from "react";
import { Table } from "flowbite-react"; // Ensure Flowbite CSS is included in your project

const OrderHistory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const orders = [
    {
      orderId: "o1",
      userId: "u1",
      products: [
        { productId: "p1", quantity: 2 },
        { productId: "p2", quantity: 1 },
      ],
      totalAmount: 120,
      status: "pending",
      createdAt: "2024-08-29T12:00:00Z",
      phoneNumber: "0123456789",
      address: "123 Elm Street, City, Country",
    },
    {
      orderId: "o2",
      userId: "u2",
      products: [{ productId: "p3", quantity: 1 }],
      totalAmount: 30,
      status: "completed",
      createdAt: "2024-08-28T10:00:00Z",
      phoneNumber: "0987654321",
      address: "456 Maple Avenue, City, Country",
    },
  ];

  const handleShowDetails = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedOrder(null);
  };

  return (
    <div className="container overflow-x-auto w-full m-11">
      <h2 className="text-2xl font-semibold mb-4">Order History</h2>
      <Table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <Table.Head>
          <Table.HeadCell>Order</Table.HeadCell>
          <Table.HeadCell>Date</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell>Total</Table.HeadCell>
          <Table.HeadCell>Action</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {orders.map((order) => (
            <Table.Row key={order.orderId}>
              <Table.Cell>
                <a href={`/order/${order.orderId}`} className="text-primary">
                  {order.orderId}
                </a>
              </Table.Cell>
              <Table.Cell>
                {new Date(order.createdAt).toLocaleString()}
              </Table.Cell>
              <Table.Cell>{order.status}</Table.Cell>
              <Table.Cell>${order.totalAmount}</Table.Cell>
              <Table.Cell>
                <button
                  onClick={() => handleShowDetails(order)}
                  className="text-primary"
                >
                  Show Details...
                </button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      {selectedOrder && (
        <Modal
          show={isModalOpen}
          onClose={handleModalClose}
          orderDetails={selectedOrder}
        />
      )}
    </div>
  );
};

const Modal = ({ show, onClose, orderDetails }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-primary">Order Details</h2>
          <button onClick={onClose} className="text-red-500 hover:text-red-700">
            ✕
          </button>
        </div>
        <div className="space-y-4">
          <DetailRow label="Order ID" value={orderDetails.orderId} />
          <DetailRow label="User ID" value={orderDetails.userId} />
          <DetailRow
            label="Products"
            value={
              <ul className="list-disc ml-6">
                {orderDetails.products.map((product, index) => (
                  <li key={index}>
                    Product ID: {product.productId}, Quantity:{" "}
                    {product.quantity}
                  </li>
                ))}
              </ul>
            }
          />
          <DetailRow
            label="Total Amount"
            value={`$${orderDetails.totalAmount}`}
          />
          <DetailRow label="Status" value={orderDetails.status} />
          <DetailRow
            label="Created At"
            value={new Date(orderDetails.createdAt).toLocaleString()}
          />
          <DetailRow label="Phone Number" value={orderDetails.phoneNumber} />
          <DetailRow label="Address" value={orderDetails.address} />
        </div>
        <div className="mt-6 flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-primary text-white rounded hover:bg-secondary"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const DetailRow = ({ label, value }) => (
  <div className="flex justify-between items-center border-b pb-2">
    <span className="text-gray-900 font-medium">{label}:</span>
    <span className="text-gray-600">{value}</span>
  </div>
);

export default OrderHistory;
