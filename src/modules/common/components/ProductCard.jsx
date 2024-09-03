// icons
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { Rating } from "flowbite-react";

export default function ProductsCard({ product }) {
  return (
    <div className="single-product p-3 border border-gray-300 rounded-md flex flex-col gap-1 cursor-pointer">
      <div className="product-image mb-2 relative h-52">
        <img
          src={product?.image}
          alt={product?.name}
          title={product?.name}
          className="rounded-md h-full w-full object-contain"
          onClick={() => navigateToProduct(product?.productId)}
        />

        <div className="product-actions absolute w-1/4 h-full top-0 bg-primary rounded-r-md overflow-hidden">
          <div
            onClick={() => {
              addToCart(product?.id);
            }}
            className="add-to-cart flex justify-center items-center h-1/2 cursor-pointer transition-all duration-300"
          >
            <IoCartOutline className="text-2xl text-white" />
          </div>

          <div
            onClick={() => {
              addToWishlist(product?.id);
            }}
            className="add-to-wishlist flex justify-center items-center h-1/2 cursor-pointer transition-all duration-300"
          >
            <FaRegHeart className="text-2xl text-white" />
          </div>
        </div>
      </div>
      <span className="text-sm font-medium text-gray-500">
        {product?.categoryName}
      </span>
      <h3 className="text-base font-semibold text-primary truncate overflow-hidden whitespace-nowrap">
        {product?.name}
      </h3>
      {product.averageRating !== 0 && (
        <Rating>
          <Rating>
            {Array.from({ length: 5 }, (_, i) => (
              <Rating.Star key={i} filled={i < product.averageRating} />
            ))}
          </Rating>
        </Rating>
      )}
      <span className="text-base font-bold text-primary">
        {product?.price} <span className="text-sm text-gray-500">USD</span>
      </span>
    </div>
  );
}
