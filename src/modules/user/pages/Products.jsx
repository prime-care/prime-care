import { useEffect, useState } from "react";

// components
import Filter from "../components/products/Filter";
import ProductsList from "../components/products/ProductsList";
import Search from "../../common/components/Search";
import PaginationComponent from "../../common/components/Pagination";

// firebase
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../services/firebase";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  // fetch products, reviews, categories and calc avg rating and put it into products array
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // fetch products
        const productsCollection = collection(db, "products");
        const productsSnapshot = await getDocs(productsCollection);

        // fetch reviews
        const reviewsCollection = collection(db, "reviews");
        const reviewsSnapshot = await getDocs(reviewsCollection);

        // reviews array
        const reviewsList = reviewsSnapshot.docs.map((doc) => doc.data());

        // calc average rating and put it into products array
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

          // return products array with avg rating
          return {
            id: doc.id,
            ...productData,
            averageRating,
          };
        });

        setProducts(productsList);
        setFilteredProducts(productsList);
      } catch (error) {
        console.error("Error fetching products or reviews:", error);
      } finally {
        setLoading(false);
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

  // filter function
  const handleFilterChange = async ({ categories, sortOrder, rating }) => {
    try {
      // clone products
      let filtered = [...products];

      // categories filter
      if (categories.length > 0) {
        filtered = filtered.filter((product) =>
          categories.includes(product.categoryId)
        );
      }

      // price filter
      if (sortOrder === "asc") {
        filtered.sort((a, b) => a.price - b.price);
      } else if (sortOrder === "desc") {
        filtered = filtered.sort((a, b) => b.price - a.price);
      }

      // rating filter
      if (rating) {
        filtered = filtered.filter(
          (product) => Math.round(product.averageRating) >= rating
        );
      }

      setFilteredProducts(filtered);
      setCurrentPage(1);
    } catch (error) {
      console.error("Error filtering products:", error);
    }
  };

  // search function
  const handleSearch = (searchTerm) => {
    let filtered = [...products];

    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.categoryName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  // pagination logic
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const itemsPerPage = 6;

  const indexOfLastProduct = currentPage * itemsPerPage; //ex : 1*8 = 8 || 2*8 = 16
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage; // ex: 8-8 = 0 || 16 -8 =8
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct // not include the end
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <div className="products-page p-4">
      <div className="container">
        <div className="shop-grid gap-4">
          <Filter categories={categories} onFilterChange={handleFilterChange} />
          <main className="products-list rounded-md">
            <Search onSearch={handleSearch} />
            <ProductsList products={currentProducts} loading={loading} />
            <div className="mb-10">
              {currentProducts.length > 0 && (
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
