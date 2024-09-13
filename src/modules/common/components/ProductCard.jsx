import { Link, useNavigate } from "react-router-dom";
// redux
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../redux/slices/cartSlice";
// icons
import { IoCartOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
//flowbite components
import { FaRegHeart } from "react-icons/fa";
import { Rating } from "flowbite-react";
// hooks
import useWishlist from "../hooks/useWishlist";

export default function ProductsCard({ product }) {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const userId = useSelector((state) => state.user.uid);

  const { isInWishlist, toggleWishlist } = useWishlist(
    userId,
    product.productId
  );

  const handleAddToCart = (product) => {
    if (!userId) {
      navigate("/auth/login");
      return;
    }

    const quantity = 1;
    dispatch(
      addToCart({
        id: product.productId,
        name: product.name,
        image: product.image, // {id: 2,name:chair,image:"dsfmks",price:25}
        price: product.price,
        quantity,
      })
    );
  };

  return (
    <div className="single-product p-3 border border-gray-300 rounded-md flex flex-col gap-1">
      <div className="product-image mb-2 relative h-52">
        <Link to={`/products/${product.productId}`}>
          <img
            src={product?.image}
            alt={product?.name}
            title={product?.name}
            className="rounded-md h-full w-full object-contain"
          />
        </Link>

        <div className="product-actions absolute w-[70px] h-full top-0 bg-primary rounded-r-md overflow-hidden">
          <div
            onClick={() => {
              handleAddToCart(product);
            }}
            className="add-to-cart flex justify-center items-center h-1/2 cursor-pointer transition-all duration-300"
          >
            <IoCartOutline className="text-3xl text-white" />
          </div>

          <div
            onClick={toggleWishlist}
            className="add-to-wishlist flex justify-center items-center h-1/2 cursor-pointer transition-all duration-300"
          >
            {isInWishlist ? (
              <FaHeart className="text-2xl text-white" />
            ) : (
              <FaRegHeart className="text-2xl text-white" />
            )}
          </div>
        </div>
      </div>
      <span className="text-sm font-medium text-gray-500">
        {product?.categoryName}
      </span>
      <Link to={`/products/${product.productId}`}>
        <h3 className="text-base font-semibold text-primary truncate overflow-hidden whitespace-nowrap">
          {product?.name}
        </h3>
      </Link>
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
        {product.price} <span className="text-sm text-gray-500">USD</span>
      </span>
    </div>
  );
}
