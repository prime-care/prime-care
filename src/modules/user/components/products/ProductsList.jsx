import { useState, useEffect } from "react";

// components
import Search from "../../../common/components/Search";
import PaginationComponent from "../../../common/components/Pagination";
import { Spinner } from "flowbite-react";
import ProductCard from "../../../common/components/ProductCard";

// navigate
import { useNavigate } from "react-router-dom";

const ProductsList = ({ products, loading }) => {
  const navigate = useNavigate(); // Initialize the navigate function

  function addToCart(id) {
    console.log(id);
  }

  function addToWishlist(id) {
    console.log(id);
  }

  // Navigate to the product details page
  const navigateToProduct = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <main className="products-list rounded-md">
      <Search />
      {loading ? (
        <div className="loading text-center my-4 text-xl font-semibold">
          <Spinner aria-label="Extra large spinner example" size="xl" />
        </div>
      ) : products.length === 0 ? (
        <div className="py-10 mt-4 bg-secondaryBg rounded-lg">
          <p className="no-data text-center text-xl font-semibold text-gray-700">
            No Products Found
          </p>
        </div>
      ) : (
        <div className="products gap-3 my-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {products.length > 0 && (
        <div className="mb-10">
          <PaginationComponent />
        </div>
      )}
    </main>
  );
};

export default ProductsList;
