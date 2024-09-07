import { useState } from "react";
import { Checkbox, Table, Modal, Button, Label, TextInput } from "flowbite-react";
import { MdOutlineModeEdit, MdOutlineDeleteSweep } from "react-icons/md";

export default function DashCustomers() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

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

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveChanges = () => {
    // firbase logic
    console.log("Updated user data:", selectedUser);
    handleModalClose();
  };

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
                key={user.userId}
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
                  <button className="text-secondary text-xl" onClick={() => handleEditClick(user)}>
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

      {selectedUser && (
        <Modal show={isModalOpen} onClose={handleModalClose}>
          <Modal.Header>Edit User</Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <div>
                <Label className="text-primary" htmlFor="name" value="Name" />
                <TextInput
                  id="name"
                  name="name"
                  value={selectedUser.name}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label className="text-primary" htmlFor="email" value="Email" />
                <TextInput
                  id="email"
                  name="email"
                  value={selectedUser.email}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label className="text-primary" htmlFor="phone" value="Phone" />
                <TextInput
                  id="phone"
                  name="phone"
                  value={selectedUser.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label className="text-primary" htmlFor="address" value="Address" />
                <TextInput
                  id="address"
                  name="address"
                  value={selectedUser.address}
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
      )}
    </div>
  );
}
