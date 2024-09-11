import { useState, useEffect } from "react";
import { Checkbox, Table } from "flowbite-react";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { db } from "../../../services/firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import Pagination from "../../common/components/Pagination";
import usePagination from "../../common/hooks/usePagination";
import Search from "../../common/components/Search";
import useSearch from "../../common/hooks/useSearch";

export default function DashCustomers() {
  const [users, setUsers] = useState([]);

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
        const usersCollection = collection(db, "users");
        const usersSnapshot = await getDocs(usersCollection);
        const usersList = usersSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsers(usersList);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (userId) => {
    try {
      await deleteDoc(doc(db, "users", userId));
      setUsers(users.filter((user) => user.id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <Search onSearch={handleSearch} resetPage={resetPage} />
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
            {currentItems.map((user) => (
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
                  <button
                    className="text-pink-700 text-xl"
                    onClick={() => handleDelete(user.id)}
                  >
                    <MdOutlineDeleteSweep />
                  </button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
