import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// components
import WishlistButton from "../../common/components/WishlistButton";
import ProductRating from "../components/productDetails/ProductRating";
import { Spinner } from "flowbite-react";

// flowbite components
import { Rating } from "flowbite-react";
import { Button } from "flowbite-react";

// icons
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { BsCartPlus } from "react-icons/bs";
import { FaTruckFast } from "react-icons/fa6";
import { RiRefund2Fill } from "react-icons/ri";
import { MdOutlinePayment } from "react-icons/md";
import { FaShop } from "react-icons/fa6";

// redux
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../redux/slices/cartSlice";

//firebase
import { db } from "../../../services/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import ProductReviews from "../components/productDetails/ProductReviews";

const features = [
  {
    id: 1,
    icon: <FaTruckFast size={35} className="text-primary" />,
    name: "Fast Delivery",
    description: "Within 1-4 business days",
  },
  {
    id: 2,
    icon: <RiRefund2Fill size={35} className="text-primary" />,
    name: "Return & Refund",
    description: "30 days return policy",
  },
  {
    id: 3,
    icon: <MdOutlinePayment size={35} className="text-primary" />,
    name: "Safe Shopping",
    description: "100% secure payment",
  },
  {
    id: 4,
    icon: <FaShop size={35} className="text-primary" />,
    name: "Click & Collect",
    description: "Collect in any of our stores",
  },
];

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [avgRating, setQAvgRating] = useState(null); // state to save product's average rating

  const dispatch = useDispatch();

  const userId = useSelector((state) => state.user.uid); // current user

  // fetch the product
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRef = collection(db, "products");
        const q = query(productRef, where("productId", "==", productId));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const productDoc = querySnapshot.docs[0];
          setProduct(productDoc.data());
        } else {
          console.error("No user data found!");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  // fetch product's reviews and calc its average rating
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsRef = collection(db, "reviews");
        const q = query(reviewsRef, where("productId", "==", productId));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          // if there is any review to this product

          //calc avgerage rating
          const productReviews = querySnapshot.docs.map((doc) => doc.data());
          const averageRating =
            productReviews.reduce((acc, review) => acc + review.rating, 0) /
            productReviews.length;

          setQAvgRating(averageRating);
        }
      } catch (error) {
        console.error("Error fetching reviews", error);
      }
    };
    fetchReviews();
  }, []);

  // handle the quantity
  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // add to cart
  const handleAddToCart = () => {
    if (product) {
      dispatch(
        addToCart({
          id: productId,
          name: product.name,
          image: product.image,
          price: product.price,
          quantity,
        })
      );
    }
  };

  if (!product) {
    return (
      <div className="flex justify-center items-center h-[500px]">
        <Spinner size="xl" />
      </div>
    );
  }

  return (
    <main className="product-details">
      <div className="container my-8 pb-8 border-b border-gray-300">
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="product-image max-w-[450px]">
            <img src={product.image} alt={product.name} className="w-full" />
          </div>
          <div className="product-info">
            <h1 className="mb-3 text-2xl md:text-3xl font-medium text-gray-900">
              {product.name}
            </h1>

            {avgRating && (
              <Rating>
                {Array.from({ length: 5 }, (_, i) => (
                  <Rating.Star key={i} filled={i < avgRating} />
                ))}
              </Rating>
            )}

            <span className="block my-4 text-xl font-semibold text-primary">
              {product.price + " "}
              <span className="text-base font-semibold text-gray-500">EGP</span>
            </span>

            <p className="mb-7 text-base font-medium text-gray-500 leading-6">
              {product.description}
            </p>

            <div className="actions mb-3 flex flex-col">
              <span className="block mb-2 text-base font-medium text-gray-500">
                Quantity
              </span>

              <div className="mb-4 flex gap-3">
                <div className="p-3 flex justify-center items-center gap-6 border border-gray-300 rounded-lg">
                  <FaMinus
                    className="cursor-pointer transition-all duration-300 hover:text-red-500"
                    onClick={decreaseQuantity}
                  />
                  <span className="text-base font-medium text-gray-900">
                    {quantity}
                  </span>
                  <FaPlus
                    className="cursor-pointer transition-all duration-300 hover:text-green-500"
                    onClick={increaseQuantity}
                  />
                </div>
                <Button
                  className="flex justify-center items-center"
                  onClick={handleAddToCart}>
                  <BsCartPlus className="mr-2 h-5 w-5" />
                  Add To Cart
                </Button>
              </div>

              <WishlistButton productId={productId} userId={userId} />
            </div>

            <div className="product-category ">
              <span className="text-base font-medium text-gray-700">
                Category: {product.categoryName}
              </span>
              <span className="text-base font-medium text-primary">
                {product?.category}
              </span>
            </div>
          </div>

          <div className="features hidden lg:block">
            <div className="p-3 mx-auto flex flex-col gap-6 max-w-80 bg-gray-100 rounded-md">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="feature flex justify-start items-center gap-4">
                  {feature?.icon}
                  <div className="flex flex-col">
                    <span className="text-base font-semibold text-gray-900">
                      {feature?.name}
                    </span>
                    <span className="text-sm font-medium text-gray-500">
                      {feature?.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <ProductRating productId={productId} />
      </div>

      <div>
        <ProductReviews productId={productId} />
      </div>
    </main>
  );
};

export default ProductDetails;
