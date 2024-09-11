import { useState } from "react";

// components
import { Table } from "flowbite-react";
import { Button } from "flowbite-react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { Modal } from "flowbite-react";

const Orders = () => {
  const [productsModal, setProductsModal] = useState(false);
  const [orderProducts, setOrderProducts] = useState([]);
  const [deleteModal, setDeleteModal] = useState(false);
  const [orderToDelete, setOrderToDelete] = useState();

  const orders = [
    {
      id: 1,
      user: {
        id: 1,
        name: "John Doe",
      },
      products: [
        { id: 1, name: "Product 1", price: 100, quantity: 1, subtotal: 100 },
        { id: 2, name: "Product 2", price: 75, quantity: 2, subtotal: 150 },
      ],
      total: 120,
      status: {
        id: 1,
        name: "Pending",
      },
      createdAt: "11-09-2024",
    },
  ];

  const openOrderProductsModal = (products) => {
    setOrderProducts(products);
    setProductsModal(true);
  };

  const openDeleteOrderModal = (id) => {
    setOrderToDelete(id);
    setDeleteModal(true);
    // example
    console.log(orderToDelete);
  };

  return (
    <div className="overflow-x-auto">
      <div className="head">
        <h1 className="mb-6 text-2xl font-medium text-gray-700">
          Orders History
        </h1>
      </div>

      {/* order products modal */}
      <Modal show={productsModal} onClose={() => setProductsModal(false)}>
        <Modal.Header>Order Products</Modal.Header>
        <Modal.Body>
          <div className="flex flex-col gap-3">
            {orderProducts.map((product) => (
              <div
                key={product.id}
                className="p-3 flex justify-between items-center gap-3 border border-gray-300 rounded-lg">
                <span>{product.name}</span>
                <span>
                  {product.price}{" "}
                  <span className="text-sm font-medium text-gray-500">EGP</span>{" "}
                  x {product.quantity}
                </span>
                <span>
                  {product.subtotal + " "}
                  <span className="text-sm font-medium text-gray-500">EGP</span>
                </span>
              </div>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="gray" onClick={() => setProductsModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* delete order modal */}
      <Modal show={deleteModal} onClose={() => setDeleteModal(false)}>
        <Modal.Header>Delete Order</Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete this order?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button color="failure" onClick={() => setDeleteModal(false)}>
            Yes, delete
          </Button>
          <Button color="gray" onClick={() => setDeleteModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>

      <Table>
        <Table.Head>
          <Table.HeadCell>User</Table.HeadCell>
          <Table.HeadCell>Products</Table.HeadCell>
          <Table.HeadCell>Total</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {orders.map((order) => (
            <Table.Row
              key={order.id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {order.user.name}
              </Table.Cell>
              <Table.Cell>
                <FaExternalLinkAlt
                  size={20}
                  className="text-gray-500 cursor-pointer transition-all duration-300 hover:text-primary"
                  onClick={() => openOrderProductsModal(order.products)}
                />
              </Table.Cell>
              <Table.Cell>
                {order.total + " "}
                <span>EGP</span>
              </Table.Cell>
              <Table.Cell>{order.status.name}</Table.Cell>
              <Table.Cell>
                <div className="flex gap-3">
                  <Button
                    color="failure"
                    onClick={() => openDeleteOrderModal(order.id)}>
                    <FaTrashAlt />
                  </Button>
                </div>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default Orders;
