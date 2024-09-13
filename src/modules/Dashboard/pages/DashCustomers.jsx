import { useState, useEffect } from "react";
import { Table, Button, Spinner } from "flowbite-react";
import { db } from "../../../services/firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import Pagination from "../../common/components/Pagination";
import usePagination from "../../common/hooks/usePagination";
import Search from "../../common/components/Search";
import useSearch from "../../common/hooks/useSearch";
import { Modal } from "flowbite-react";
import { FaTrashAlt } from "react-icons/fa";

export default function DashCustomers() {
  const [users, setUsers] = useState([]);
  const [deleteModal, setDeleteModal] = useState(false);
  const [customerToDelete, setCustomerToDelete] = useState();
  const [isDeleting, setIsDeleting] = useState(false);
  const [loading, setLoading] = useState(true);

  const { searchResults, handleSearch } = useSearch(users);

  const itemsPerPage = 8;
  const { currentPage, currentItems, totalPages, handlePageChange, resetPage } =
    usePagination(
      searchResults.length === 0 ? users : searchResults,
      itemsPerPage
    );

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const usersCollection = collection(db, "users");
        const usersSnapshot = await getDocs(usersCollection);
        const usersList = usersSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsers(usersList);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const openDeleteCustomerModal = (categoryId) => {
    setCustomerToDelete(categoryId);
    setDeleteModal(true);
  };

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      await deleteDoc(doc(db, "users", customerToDelete));
      setUsers(users.filter((user) => user.id !== customerToDelete));
      setDeleteModal(false);
    } catch (error) {
      console.error("Error deleting user:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div>
      {/* delete customer modal */}
      <Modal show={deleteModal} onClose={() => setDeleteModal(false)}>
        <Modal.Header>Delete Customer</Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete this customer?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            color="failure"
            onClick={() => handleDelete()}
            disabled={isDeleting}>
            {isDeleting ? "Deleting..." : "Yes, delete"}{" "}
          </Button>
          <Button color="gray" onClick={() => setDeleteModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="overflow-x-auto">
        <div className="flex mb-4">
          <Search onSearch={handleSearch} resetPage={resetPage} />
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Spinner aria-label="Loading spinner" size="xl" />
          </div>
        ) : (
          <>
            <Table hoverable className="mb-3">
              <Table.Head className="p-4 text-primary">
                <Table.HeadCell>user Id</Table.HeadCell>
                <Table.HeadCell>name</Table.HeadCell>
                <Table.HeadCell>email</Table.HeadCell>
                <Table.HeadCell>phone</Table.HeadCell>
                <Table.HeadCell>address</Table.HeadCell>
                <Table.HeadCell>actions</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {currentItems.map((user) => (
                  <Table.Row
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    key={user.id}>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {user.userId}
                    </Table.Cell>
                    <Table.Cell>{user.name}</Table.Cell>
                    <Table.Cell>{user.email}</Table.Cell>
                    <Table.Cell>{user.phone}</Table.Cell>
                    <Table.Cell>{user.address}</Table.Cell>
                    <Table.Cell className="flex gap-4 items-center">
                      <Button
                        color="failure"
                        onClick={() => openDeleteCustomerModal(user.id)}
                        disabled={isDeleting}>
                        <FaTrashAlt />
                      </Button>
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
    </div>
  );
}
