import { useState, useEffect } from "react";
import { Table, Button, Spinner } from "flowbite-react";
import { Modal } from "flowbite-react";
import { FaPencilAlt } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import AddProductModal from "../components/AddProductModal";
import { db } from "../../../services/firebase";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import Pagination from "../../common/components/Pagination";
import usePagination from "../../common/hooks/usePagination";
import Search from "../../common/components/Search";
import useSearch from "../../common/hooks/useSearch";

export default function DashProducts() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const [deleteModal, setDeleteModal] = useState(false);
  const [productToDelete, setProductToDelete] = useState();
  const [isDeleting, setIsDeleting] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const productsCollection = collection(db, "products");
        const productsSnapshot = await getDocs(productsCollection);
        const productsList = productsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsList);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

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

    fetchProducts();
    fetchCategories();
  }, []);

  const handleAddProduct = async (productData) => {
    try {
      if (editProduct) {
        // Update the existing product
        const productDoc = doc(db, "products", editProduct.id);
        await updateDoc(productDoc, productData);
      } else {
        // Add a new product
        await addDoc(collection(db, "products"), productData);
      }
      setIsModalOpen(false); // Close modal after adding/updating the product
      setEditProduct(null); // Clear editProduct state
    } catch (error) {
      console.error("Error adding/updating product:", error);
    }
  };

  const openDeleteProductModal = (categoryId) => {
    setProductToDelete(categoryId);
    setDeleteModal(true);
  };

  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, "products", productToDelete));
      setProducts(products.filter((product) => product.id !== productToDelete));
      setDeleteModal(false);
    } catch (error) {
      console.error("Error deleting product:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  const handleEdit = (product) => {
    setEditProduct(product);
    setIsModalOpen(true);
  };

  const { searchResults, handleSearch } = useSearch(products);

  const itemsPerPage = 8;
  const { currentPage, currentItems, totalPages, handlePageChange, resetPage } =
    usePagination(
      searchResults.length === 0 ? products : searchResults,
      itemsPerPage
    );

  return (
    <div>
      {/* delete product modal */}
      <Modal show={deleteModal} onClose={() => setDeleteModal(false)}>
        <Modal.Header>Delete Product</Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete this product?</p>
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
          className="bg-[#1f5373] text-white px-4 py-3  text-sm rounded ">
          Add New Product
        </button>
      </div>

      <div className="overflow-x-auto">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Spinner aria-label="Loading spinner" size="xl" />
          </div>
        ) : (
          <>
            <Table hoverable className="mb-3">
              <Table.Head className="p-4 text-primary">
                <Table.HeadCell>image</Table.HeadCell>
                <Table.HeadCell>name</Table.HeadCell>
                <Table.HeadCell>category name</Table.HeadCell>
                <Table.HeadCell>Price</Table.HeadCell>
                <Table.HeadCell>bestSeller</Table.HeadCell>
                <Table.HeadCell>actions</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {currentItems.map((product) => (
                  <Table.Row
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    key={product.id}>
                    <Table.Cell>
                      <img src={product.image} width={50}></img>
                    </Table.Cell>
                    <Table.Cell>{product.name}</Table.Cell>
                    <Table.Cell>{product.categoryName}</Table.Cell>
                    <Table.Cell>{product.price} LE</Table.Cell>
                    <Table.Cell>{product.bestSeller ? "Yes" : "No"}</Table.Cell>
                    <Table.Cell className="flex gap-4 items-center ">
                      <Button
                        color="success"
                        onClick={() => handleEdit(product)}>
                        <FaPencilAlt />
                      </Button>

                      <Button
                        color="failure"
                        onClick={() => openDeleteProductModal(product.id)}>
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

      {isModalOpen && (
        <AddProductModal
          onClose={() => {
            setIsModalOpen(false);
            setEditProduct(null);
          }}
          categories={categories}
          onSubmit={handleAddProduct}
          editMode={!!editProduct}
          initialData={editProduct}
        />
      )}
    </div>
  );
}
