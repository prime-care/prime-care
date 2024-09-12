import { useState } from "react";

// components
import { Spinner } from "flowbite-react";
import ProductCard from "../../../common/components/ProductCard";

const WishList = () => {
  const [loading, setLoading] = useState(false);

  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
    },
    {
      id: 3,
      name: "Product 3",
      price: 300,
    },
    {
      id: 4,
      name: "Product 4",
      price: 400,
    },
    {
      id: 5,
      name: "Product 5",
      price: 500,
    },
  ];

  return (
    <div>
      <div className="head">
        <h1 className="mb-6 text-2xl font-medium text-gray-700">Wishlist</h1>
      </div>

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
        <div
          className="products grid gap-4 
          grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default WishList;
