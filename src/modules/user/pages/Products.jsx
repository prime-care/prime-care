import { useEffect, useState } from "react";

// components
import Filter from "../components/products/Filter";
import ProductsList from "../components/products/ProductsList";
import Search from "../../common/components/Search";
import PaginationComponent from "../../common/components/Pagination";

// firebase
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../services/firebase";
// hooks
import usePagination from "../../common/hooks/usePagination";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filters, setFilters] = useState({
    searchTerm: "",
    categories: [],
    sortOrder: null,
    rating: null,
  });
  const [loading, setLoading] = useState(true);

  // fetch products, reviews, categories and calc avg rating and put it into products array
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        //products snapshot
        const productsCollection = collection(db, "products");
        const productsSnapshot = await getDocs(productsCollection);

        //reviews snapshot
        const reviewsCollection = collection(db, "reviews");
        const reviewsSnapshot = await getDocs(reviewsCollection);

        // reviews array
        const reviewsList = reviewsSnapshot.docs.map((doc) => doc.data());

        // calc average rating
        const productsList = productsSnapshot.docs.map((doc) => {
          const productData = doc.data();
          const productReviews = reviewsList.filter(
            (review) => review.productId === productData.productId
          );

          const averageRating =
            productReviews.length > 0
              ? productReviews.reduce((acc, review) => acc + review.rating, 0) /
                productReviews.length
              : 0;

          return {
            id: doc.id,
            ...productData,
            averageRating,
          };
        });
        setLoading(false);
        setProducts(productsList);
      } catch (error) {
        console.error("Error fetching products or reviews:", error);
      }
    };

    const fetchCategories = async () => {
      try {
        const categoriesCollection = collection(db, "categories");
        const categoriesSnapshot = await getDocs(categoriesCollection);
        const categoriesList = categoriesSnapshot.docs.map((doc) => ({
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

  // filter and search logic in one place
  const getFilteredProducts = () => {
    let filtered = [...products];

    // apply category filters
    if (filters.categories.length > 0) {
      filtered = filtered.filter((product) =>
        filters.categories.includes(product.categoryName)
      );
    }

    // apply rating filter
    if (filters.rating) {
      filtered = filtered.filter(
        (product) => Math.round(product.averageRating) >= filters.rating
      );
    }

    // apply search filter
    if (filters.searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.name
            .toLowerCase()
            .includes(filters.searchTerm.toLowerCase()) ||
          product.categoryName
            .toLowerCase()
            .includes(filters.searchTerm.toLowerCase())
      );
    }

    // apply sort order
    if (filters.sortOrder === "asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (filters.sortOrder === "desc") {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  };

  // update filters state
  const handleFilterChange = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
    resetPage();
  };

  const handleSearch = (searchTerm) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      searchTerm,
    }));
    resetPage();
  };

  const filteredProducts = getFilteredProducts();
  console.log(filteredProducts);

  // pagination logic
  const { currentItems, currentPage, totalPages, handlePageChange, resetPage } =
    usePagination(filteredProducts, 8);

  return (
    <div className="products-page p-4">
      <div className="container">
        <div className="shop-grid gap-4">
          <Filter categories={categories} onFilterChange={handleFilterChange} />
          <main className="products-list rounded-md">
            <Search onSearch={handleSearch} resetPage={resetPage} />
            <ProductsList products={currentItems} loading={loading} />
            <div className="mb-10">
              {currentItems.length > 0 && (
                <PaginationComponent
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Products;
