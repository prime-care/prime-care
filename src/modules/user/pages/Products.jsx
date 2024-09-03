import { useEffect, useState } from "react";

// components
import Filter from "../components/products/Filter";
import ProductsList from "../components/products/ProductsList";

// firebase
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../services/firebase";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
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
  const handleFilterChange = async ({ categories }) => {
    try {
      let filtered = [...products];

      if (categories.length > 0) {
        filtered = filtered.filter((product) =>
          categories.includes(product.categoryId)
        );
      }

      setFilteredProducts(filtered);
    } catch (error) {
      console.error("Error filtering products:", error);
    }
  };

  return (
    <div className="products-page p-4">
      <div className="container">
        <div className="shop-grid gap-4">
          <Filter categories={categories} onFilterChange={handleFilterChange} />
          <ProductsList products={filteredProducts} loading={loading} />
        </div>
      </div>
    </div>
  );
};

export default Products;
