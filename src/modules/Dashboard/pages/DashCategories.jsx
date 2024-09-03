import { Checkbox, Table } from "flowbite-react";
import { MdOutlineModeEdit, MdOutlineDeleteSweep } from "react-icons/md";

export default function DashCategories() {
  const users = [
    {
      userId: "u1",
      name: "John Doe",
      email: "john@example.com",
      phone: "0123456789",
      address: "123 Elm Street, City, Country",
    },
    {
      userId: "u2",
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "0987654321",
      address: "456 Maple Avenue, City, Country",
    },
  ];
  return (
    <div>
      <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head className="p-4 text-primary">
            <Table.HeadCell className="p-4 text-primary">
              <Checkbox />
            </Table.HeadCell>
            <Table.HeadCell>user Id</Table.HeadCell>
            <Table.HeadCell>name</Table.HeadCell>
            <Table.HeadCell>email</Table.HeadCell>
            <Table.HeadCell>phone</Table.HeadCell>
            <Table.HeadCell>address</Table.HeadCell>
            <Table.HeadCell>actions</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {users.map((user) => (
              <Table.Row
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                key={user.id}
              >
                <Table.Cell className="p-4">
                  <Checkbox />
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {user.userId}
                </Table.Cell>
                <Table.Cell>{user.name}</Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>
                <Table.Cell>{user.phone}</Table.Cell>
                <Table.Cell>{user.address}</Table.Cell>
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
