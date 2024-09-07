import { useState } from "react";
import {
  Checkbox,
  Table,
  Modal,
  Button,
  Label,
  TextInput,
} from "flowbite-react";
import { MdOutlineModeEdit, MdOutlineDeleteSweep } from "react-icons/md";

export default function DashOrders() {
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

  const handleEditClick = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedOrder(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedOrder((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveChanges = () => {
    // firebase logic
    console.log("Updated order data:", selectedOrder);
    handleModalClose();
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head className="p-4 text-primary">
            <Table.HeadCell className="p-4">
              <Checkbox />
            </Table.HeadCell>
            <Table.HeadCell>Order Id</Table.HeadCell>
            <Table.HeadCell>User Id</Table.HeadCell>
            <Table.HeadCell>Products</Table.HeadCell>
            <Table.HeadCell>Total Amount</Table.HeadCell>
            <Table.HeadCell>Status</Table.HeadCell>
            <Table.HeadCell>Created At</Table.HeadCell>
            <Table.HeadCell>Phone Number</Table.HeadCell>
            <Table.HeadCell>Address</Table.HeadCell>
            <Table.HeadCell>Actions</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {orders.map((order) => (
              <Table.Row
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                key={order.orderId}
              >
                <Table.Cell className="p-4">
                  <Checkbox />
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {order.orderId}
                </Table.Cell>
                <Table.Cell>{order.userId}</Table.Cell>
                <Table.Cell>
                  {order.products.map((product) => (
                    <div key={product.productId}>
                      {product.productId} - Qty: {product.quantity}
                    </div>
                  ))}
                </Table.Cell>
                <Table.Cell>{order.totalAmount}</Table.Cell>
                <Table.Cell>{order.status}</Table.Cell>
                <Table.Cell>
                  {new Date(order.createdAt).toLocaleString()}
                </Table.Cell>
                <Table.Cell>{order.phoneNumber}</Table.Cell>
                <Table.Cell>{order.address}</Table.Cell>
                <Table.Cell className="flex gap-4 items-center">
                  <button
                    className="text-secondary text-xl"
                    onClick={() => handleEditClick(order)}
                  >
                    <MdOutlineModeEdit />
                  </button>
                  <button className="text-pink-700 text-xl">
                    <MdOutlineDeleteSweep />
                  </button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>

      {/* Modal for Editing Order */}
      <Modal show={isModalOpen} onClose={handleModalClose}>
        <Modal.Header>Edit Order</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <div>
              <Label className="text-primary" htmlFor="userId" value="User ID" />
              <TextInput
                id="userId"
                name="userId"
                value={selectedOrder?.userId || ""}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label className="text-primary" htmlFor="totalAmount" value="Total Amount" />
              <TextInput
                id="totalAmount"
                name="totalAmount"
                type="number"
                value={selectedOrder?.totalAmount || ""}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label className="text-primary" htmlFor="status" value="Status" />
              <TextInput
                id="status"
                name="status"
                value={selectedOrder?.status || ""}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label className="text-primary" htmlFor="phoneNumber" value="Phone Number" />
              <TextInput
                id="phoneNumber"
                name="phoneNumber"
                value={selectedOrder?.phoneNumber || ""}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label className="text-primary" htmlFor="address" value="Address" />
              <TextInput
                id="address"
                name="address"
                value={selectedOrder?.address || ""}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSaveChanges}>Save Changes</Button>
          <Button color="gray" onClick={handleModalClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
