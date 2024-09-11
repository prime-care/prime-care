import React, { useState, useEffect } from "react";
import { Checkbox, Table } from "flowbite-react";
import { MdOutlineModeEdit, MdOutlineDeleteSweep } from "react-icons/md";
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

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCollection = collection(db, "products");
        const productsSnapshot = await getDocs(productsCollection);
        const productsList = productsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsList);
      } catch (error) {
        console.error("Error fetching products:", error);
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

  const handleDelete = async (productId) => {
    try {
      await deleteDoc(doc(db, "products", productId));
      setProducts(products.filter((product) => product.id !== productId));
    } catch (error) {
      console.error("Error deleting product:", error);
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
      <div className="overflow-x-auto">
        <Search onSearch={handleSearch} resetPage={resetPage} />
        <button
          className="bg-primary mb-3 text-white px-4 py-2 rounded-lg hover:bg-secondary transition"
          onClick={() => setIsModalOpen(true)}
        >
          Add Product
        </button>
        <Table hoverable>
          <Table.Head className="p-4 text-primary">
            <Table.HeadCell className="p-4">
              <Checkbox />
            </Table.HeadCell>
            <Table.HeadCell>Product Id</Table.HeadCell>
            <Table.HeadCell>name</Table.HeadCell>

            <Table.HeadCell>image</Table.HeadCell>
            <Table.HeadCell>category name</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>bestSeller</Table.HeadCell>
            <Table.HeadCell>actions</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {currentItems.map((product) => (
              <Table.Row
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                key={product.id}
              >
                <Table.Cell className="p-4">
                  <Checkbox />
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {product.productId}
                </Table.Cell>
                <Table.Cell>{product.name}</Table.Cell>

                <Table.Cell>
                  <img src={product.image} width={50}></img>
                </Table.Cell>
                <Table.Cell>{product.categoryName}</Table.Cell>
                <Table.Cell>{product.price} LE</Table.Cell>
                <Table.Cell>{product.bestSeller ? "Yes" : "No"}</Table.Cell>
                <Table.Cell className="flex gap-4 items-center ">
                  <button
                    className="text-secondary text-xl"
                    onClick={() => handleEdit(product)}
                  >
                    <MdOutlineModeEdit />
                  </button>
                  <button
                    className="text-pink-700 text-xl"
                    onClick={() => handleDelete(product.id)}
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
        className="mt-4"
      />
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
