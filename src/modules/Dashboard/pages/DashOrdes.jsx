import { useState } from "react";
import { Checkbox, Table, Modal, Button, Label } from "flowbite-react";
import { MdOutlineDeleteSweep } from "react-icons/md";

export default function DashOrders() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrderProducts, setSelectedOrderProducts] = useState([]);

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

  const products = [
    {
      productId: "p1",
      name: "Face Cream",
      description: "A moisturizing face cream.",
      price: 50,
      categoryId: "c1",
      categoryName: "Skincare",
      image: "face_cream_image_url",
      bestSeller: true,
    },
    {
      productId: "p2",
      name: "Vitamin C",
      description: "Essential Vitamin C supplement.",
      price: 20,
      categoryId: "c2",
      categoryName: "Vitamins",
      image: "vitamin_c_image_url",
      bestSeller: false,
    },
    {
      productId: "p3",
      name: "Hair Oil",
      description: "Nourishing hair oil.",
      price: 30,
      categoryId: "c3",
      categoryName: "Haircare",
      image: "hair_oil_image_url",
      bestSeller: true,
    },
    {
      productId: "p4",
      name: "Protein Powder",
      description: "High-quality protein powder.",
      price: 40,
      categoryId: "c4",
      categoryName: "Fitness",
      image: "protein_powder_image_url",
      bestSeller: false,
    },
  ];

  const orderStatusOptions = [
    { value: "pending", label: "Pending" },
    { value: "shipped", label: "Shipped" },
    { value: "delivered", label: "Delivered" },
    { value: "canceled", label: "Canceled" },
  ];

  const handleShowOrderClick = (orderProducts) => {
    // Map the order's products to include details from the products array
    const detailedProducts = orderProducts.map((orderProduct) => {
      const productDetails = products.find(
        (product) => product.productId === orderProduct.productId
      );
      return {
        ...productDetails,
        quantity: orderProduct.quantity,
        totalPrice: orderProduct.quantity * productDetails.price,
      };
    });
    setSelectedOrderProducts(detailedProducts);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedOrderProducts([]);
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
                  <button
                    className="text-blue-500 underline"
                    onClick={() => handleShowOrderClick(order.products)}
                  >
                    Show order
                  </button>
                </Table.Cell>
                <Table.Cell>{order.totalAmount}</Table.Cell>
                <Table.Cell>
                  <select
                    name="status"
                    value={order.status}
                    className="bg-white border border-gray-300 rounded-md p-2"
                  >
                    {orderStatusOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </Table.Cell>
                <Table.Cell>
                  {new Date(order.createdAt).toLocaleString()}
                </Table.Cell>
                <Table.Cell>{order.phoneNumber}</Table.Cell>
                <Table.Cell>{order.address}</Table.Cell>
                <Table.Cell className="flex gap-4 items-center">
                  <button className="text-pink-700 text-xl">
                    <MdOutlineDeleteSweep />
                  </button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>

      {/* Modal for showing order details */}
      <Modal show={isModalOpen} onClose={handleModalClose}>
        <Modal.Header>Order Details</Modal.Header>
        <Modal.Body>
          <div className="space-y-4">
            {selectedOrderProducts.map((product) => (
              <div
                key={product.productId}
                className="flex gap-4 items-center border-b py-2"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <Label className="block text-primary">Product Name</Label>
                  <p className="font-semibold">{product.name}</p>

                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <div>
                      <Label className="block text-primary">Price</Label>
                      <p>${product.price}</p>
                    </div>
                    <div>
                      <Label className="block text-primary">Quantity</Label>
                      <p>{product.quantity}</p>
                    </div>
                  </div>
                  <div className="mt-2">
                    <Label className="block text-primary">Total Price</Label>
                    <p className="font-semibold text-lg">
                      ${product.totalPrice}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleModalClose}>Close</Button>
          <Button color="gray" onClick={handleModalClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
