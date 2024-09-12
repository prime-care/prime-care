import { useState, useEffect } from "react";
import { Table, Button } from "flowbite-react";
import { Modal } from "flowbite-react";
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
import { FaTrashAlt } from "react-icons/fa";

export default function DashCategories() {
  const [categories, setCategories] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState();
  const [isDeleting, setIsDeleting] = useState(false);

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

  const openDeleteCategoryModal = (categoryId) => {
    setCategoryToDelete(categoryId);
    setDeleteModal(true);
  };

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      await deleteDoc(doc(db, "categories", categoryToDelete));
      setCategories(
        categories.filter((category) => category.id !== categoryToDelete)
      );
      setDeleteModal(false);
    } catch (error) {
      console.error("Error deleting category:", error);
    } finally {
      setIsDeleting(false);
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
      {/* delete category modal */}
      <Modal show={deleteModal} onClose={() => setDeleteModal(false)}>
        <Modal.Header>Delete Category</Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete this category?</p>
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

      <div className="flex justify-between items-center mb-4">
        <Search onSearch={handleSearch} resetPage={resetPage} />
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#1f5373] text-white px-4 py-2 rounded mb-4">
          Add New Category
        </button>
      </div>

      <div className="overflow-x-auto">
        <Table hoverable className="mb-3">
          <Table.Head className="p-4 text-primary">
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Description</Table.HeadCell>
            <Table.HeadCell>Actions</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {currentItems.map((category) => (
              <Table.Row
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                key={category.categoryId}>
                <Table.Cell>{category.name}</Table.Cell>
                <Table.Cell>{category.description}</Table.Cell>
                <Table.Cell className="flex gap-4 items-center">
                  <Button
                    color="failure"
                    onClick={() => openDeleteCategoryModal(category.id)}
                    disabled={isDeleting}>
                    <FaTrashAlt />
                  </Button>
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
