import { useState, useEffect } from "react";

// components
import Search from "../../../common/components/Search";
import PaginationComponent from "../../../common/components/Pagination";
import { Spinner } from "flowbite-react";
// icons
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

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
            <div
              key={product.id}
              className="single-product p-3 border border-gray-300 rounded-md flex flex-col gap-1 cursor-pointer"
            >
              <div className="product-image mb-2 relative h-52">
                <img
                  src={product.image}
                  alt={product.name}
                  title={product.name}
                  className="rounded-md h-full w-full object-contain"
                  onClick={() => navigateToProduct(product.productId)}
                />

                <div className="product-actions absolute w-1/4 h-full top-0 bg-primary rounded-r-md overflow-hidden">
                  <div
                    onClick={() => {
                      addToCart(product.id);
                    }}
                    className="add-to-cart flex justify-center items-center h-1/2 cursor-pointer transition-all duration-300"
                  >
                    <IoCartOutline className="text-2xl text-white" />
                  </div>

                  <div
                    onClick={() => {
                      addToWishlist(product.id);
                    }}
                    className="add-to-wishlist flex justify-center items-center h-1/2 cursor-pointer transition-all duration-300"
                  >
                    <FaRegHeart className="text-2xl text-white" />
                  </div>
                </div>
              </div>
              <h3
                className="text-sm font-medium text-gray-500"
                onClick={() => navigateToProduct(product.productId)}
              >
                {product.categoryName}
              </h3>
              <h3
                className="text-base font-medium text-gray-700"
                onClick={() => navigateToProduct(product.productId)}
              >
                {product.name}
              </h3>
              <span className="text-base font-bold text-primary">
                {product.price}{" "}
                <span className="text-sm text-gray-500">USD</span>
              </span>
            </div>
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
