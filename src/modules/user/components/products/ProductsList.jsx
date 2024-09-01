import { useState, useEffect } from "react";

// components
import Search from "../../../common/components/Search";
import PaginationComponent from "../../../common/components/Pagination";
import { Spinner } from "flowbite-react";
// icons
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch products from the API
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  function addToCart(id) {
    console.log(id);
  }

  function addToWishlist(id) {
    console.log(id);
  }

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
              className="single-product p-3 border border-gray-300 rounded-md flex flex-col gap-1">
              <div className="product-image relative h-52">
                <img
                  src={product.image}
                  alt={product.title}
                  title={product.title}
                  className="rounded-md h-full w-full object-contain"
                />

                <div className="product-actions absolute w-1/4 h-full top-0 bg-primary rounded-r-md overflow-hidden">
                  <div
                    onClick={() => {
                      addToCart(product.id);
                    }}
                    className="add-to-cart flex justify-center items-center h-1/2 cursor-pointer transition-all duration-300">
                    <IoCartOutline className="text-2xl text-white" />
                  </div>

                  <div
                    onClick={() => {
                      addToWishlist(product.id);
                    }}
                    className="add-to-wishlist flex justify-center items-center h-1/2 cursor-pointer transition-all duration-300">
                    <FaRegHeart className="text-2xl text-white" />
                  </div>
                </div>
              </div>
              <h3 className="text-base font-medium text-gray-700">
                {product.title}
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
