import { useState, useEffect } from "react";
import { Checkbox, Table } from "flowbite-react";
import { MdOutlineDeleteSweep } from "react-icons/md";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../../services/firebase";
import Pagination from "../../common/components/Pagination";
import usePagination from "../../common/hooks/usePagination";
import Search from "../../common/components/Search";
import useSearch from "../../common/hooks/useSearch";
import AddCategoryModal from "../components/AddCategoryModal";

export default function DashCategories() {
  const [categories, setCategories] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesCollection = collection(db, "categories");
        const categoriesSnapshot = await getDocs(categoriesCollection);
        const categoriesList = categoriesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCategories(categoriesList);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleDelete = async (categoryId) => {
    try {
      await deleteDoc(doc(db, "categories", categoryId));
      setCategories(
        categories.filter((category) => category.id !== categoryId)
      );
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  const handleAddCategory = async (categoryData) => {
    try {
      await addDoc(collection(db, "categories"), categoryData);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };

  const { searchResults, handleSearch } = useSearch(categories);

  const itemsPerPage = 8;
  const { currentPage, currentItems, totalPages, handlePageChange, resetPage } =
    usePagination(
      searchResults.length === 0 ? categories : searchResults,
      itemsPerPage
    );

  return (
    <div>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-[#1f5373] text-white px-4 py-2 rounded mb-4"
      >
        Add New Category
      </button>
      <Search onSearch={handleSearch} resetPage={resetPage} />
      <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head className="p-4 text-primary">
            <Table.HeadCell className="p-4 text-primary">
              <Checkbox />
            </Table.HeadCell>
            <Table.HeadCell>Category Id</Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Description</Table.HeadCell>
            <Table.HeadCell>Actions</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {currentItems.map((category) => (
              <Table.Row
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                key={category.id}
              >
                <Table.Cell className="p-4">
                  <Checkbox />
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {category.categoryId}
                </Table.Cell>
                <Table.Cell>{category.name}</Table.Cell>
                <Table.Cell>{category.description}</Table.Cell>
                <Table.Cell className="flex gap-4 items-center">
                  <button
                    className="text-pink-700 text-xl"
                    onClick={() => handleDelete(category.id)}
                  >
                    <MdOutlineDeleteSweep />
                  </button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>

      {/* Modal for Editing Category */}

      {isModalOpen && (
        <AddCategoryModal
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddCategory}
        />
      )}
    </div>
  );
}
