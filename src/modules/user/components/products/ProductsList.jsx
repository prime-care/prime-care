import { useState, useEffect } from "react";

// components
import Search from "../../../common/components/Search";
import PaginationComponent from "../../../common/components/Pagination";
import { Spinner } from "flowbite-react";
// icons
import { IoCartOutline } from "react-icons/io5";

function addToCart(id) {
  console.log(id);
}

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

                <div
                  onClick={() => {
                    addToCart(product.id);
                  }}
                  className="add-to-cart bg-primary absolute p-3 w-1/4 flex justify-center items-center top-0 rounded-r-md h-full cursor-pointer">
                  <IoCartOutline className="text-2xl text-white" />
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

      {products.length > 0 && <PaginationComponent />}
    </main>
  );
};

export default ProductsList;
