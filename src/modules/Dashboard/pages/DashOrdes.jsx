import { MdOutlineModeEdit, MdOutlineDeleteSweep } from "react-icons/md";

import { Checkbox, Table } from "flowbite-react";
export default function DashOrdes() {
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
  return (
    <div>
      <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head className="p-4 text-primary">
            <Table.HeadCell className="p-4">
              <Checkbox />
            </Table.HeadCell>
            <Table.HeadCell>order Id</Table.HeadCell>
            <Table.HeadCell>user id</Table.HeadCell>
            <Table.HeadCell>products</Table.HeadCell>
            <Table.HeadCell>totalAmount</Table.HeadCell>
            <Table.HeadCell>status</Table.HeadCell>
            <Table.HeadCell>createdAt</Table.HeadCell>
            <Table.HeadCell>phoneNumber</Table.HeadCell>
            <Table.HeadCell>address</Table.HeadCell>
            <Table.HeadCell>actions</Table.HeadCell>


          </Table.Head>
          <Table.Body className="divide-y">
            {orders.map((order) => (
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
                <Table.Cell></Table.Cell>
                <Table.Cell>{order.totalAmount}</Table.Cell>
                <Table.Cell>{order.status}</Table.Cell>
                <Table.Cell>{order.createdAt}</Table.Cell>
                <Table.Cell>{order.phoneNumber}</Table.Cell>
                <Table.Cell>{order.address}</Table.Cell>
                <Table.Cell className="flex gap-4 items-center ">
                  <button className="text-secondary text-xl">
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
    </div>
  );
}
