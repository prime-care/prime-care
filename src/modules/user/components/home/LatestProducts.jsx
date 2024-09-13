import { useState, useEffect } from "react";

// firebase
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../services/firebase";

// components
import ProductCard from "../../../common/components/ProductCard";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import useCarousel from "../../../common/hooks/useCarousel";

// const products = [
//   {
//     productId: "p1",
//     name: "Face Cream",
//     description: "A moisturizing face cream.",
//     price: 50,
//     categoryId: "c1",
//     categoryName: "Skincare",
//     image: "https://missionpharma.com/wp-content/uploads/Products.jpg",
//     bestSeller: true,
//   },
//   {
//     productId: "p2",
//     name: "Vitamin C",
//     description: "Essential Vitamin C supplement.",
//     price: 20,
//     categoryId: "c2",
//     categoryName: "Vitamins",
//     image: "https://missionpharma.com/wp-content/uploads/Products-2.jpg",
//     bestSeller: false,
//   },
//   {
//     productId: "p3",
//     name: "Hair Oil",
//     description: "Nourishing hair oil.",
//     price: 30,
//     categoryId: "c3",
//     categoryName: "Haircare",
//     image: "https://missionpharma.com/wp-content/uploads/Products.jpg",
//     bestSeller: true,
//   },
//   {
//     productId: "p4",
//     name: "Protein Powder",
//     description: "High-quality protein powder.",
//     price: 40,
//     categoryId: "c4",
//     categoryName: "Fitness",
//     image: "https://missionpharma.com/wp-content/uploads/Products-2.jpg",
//     bestSeller: false,
//   },
//   {
//     productId: "p5",
//     name: "Lip Balm",
//     description: "Hydrating lip balm.",
//     price: 15,
//     categoryId: "c5",
//     categoryName: "Beauty",
//     image: "https://missionpharma.com/wp-content/uploads/Products.jpg",
//     bestSeller: true,
//   },
//   {
//     productId: "p6",
//     name: "Weight Loss Tea",
//     description: "Effective weight loss tea.",
//     price: 25,
//     categoryId: "c6",
//     categoryName: "Diet",
//     image: "https://missionpharma.com/wp-content/uploads/Products.jpg",
//     bestSeller: false,
//   },
//   {
//     productId: "p7",
//     name: "Eye Cream",
//     description: "Cream for reducing dark circles.",
//     price: 35,
//     categoryId: "c1",
//     categoryName: "Skincare",
//     image: "https://missionpharma.com/wp-content/uploads/Products.jpg",
//     bestSeller: true,
//   },
//   {
//     productId: "p8",
//     name: "Omega-3",
//     description: "Omega-3 fatty acids supplement.",
//     price: 22,
//     categoryId: "c2",
//     categoryName: "Vitamins",
//     image: "https://missionpharma.com/wp-content/uploads/Products.jpg",
//     bestSeller: false,
//   },
//   {
//     productId: "p9",
//     name: "Shampoo",
//     description: "Gentle shampoo for all hair types.",
//     price: 18,
//     categoryId: "c3",
//     categoryName: "Haircare",
//     image: "https://missionpharma.com/wp-content/uploads/Products.jpg",
//     bestSeller: true,
//   },
//   {
//     productId: "p10",
//     name: "Yoga Mat",
//     description: "Comfortable yoga mat.",
//     price: 28,
//     categoryId: "c4",
//     categoryName: "Fitness",
//     image: "https://missionpharma.com/wp-content/uploads/Products.jpg",
//     bestSeller: false,
//   },
//   {
//     productId: "p11",
//     name: "Moisturizer",
//     description: "Hydrating moisturizer for face and body.",
//     price: 40,
//     categoryId: "c1",
//     categoryName: "Skincare",
//     image: "https://missionpharma.com/wp-content/uploads/Products.jpg",
//     bestSeller: true,
//   },
//   {
//     productId: "p12",
//     name: "Multivitamins",
//     description: "Daily multivitamins for overall health.",
//     price: 35,
//     categoryId: "c2",
//     categoryName: "Vitamins",
//     image: "https://missionpharma.com/wp-content/uploads/Products.jpg",
//     bestSeller: false,
//   },
//   {
//     productId: "p13",
//     name: "Hair Mask",
//     description: "Deep conditioning hair mask.",
//     price: 45,
//     categoryId: "c3",
//     categoryName: "Haircare",
//     image: "https://missionpharma.com/wp-content/uploads/Products.jpg",
//     bestSeller: true,
//   },
//   {
//     productId: "p14",
//     name: "Resistance Bands",
//     description: "Set of resistance bands for workout.",
//     price: 30,
//     categoryId: "c4",
//     categoryName: "Fitness",
//     image: "https://missionpharma.com/wp-content/uploads/Products.jpg",
//     bestSeller: false,
//   },
//   {
//     productId: "p15",
//     name: "Nail Polish",
//     description: "Long-lasting nail polish.",
//     price: 20,
//     categoryId: "c5",
//     categoryName: "Beauty",
//     image: "https://missionpharma.com/wp-content/uploads/Products.jpg",
//     bestSeller: true,
//   },
//   {
//     productId: "p16",
//     name: "Detox Drink",
//     description: "Detox drink for cleansing.",
//     price: 25,
//     categoryId: "c6",
//     categoryName: "Diet",
//     image: "https://missionpharma.com/wp-content/uploads/Products.jpg",
//     bestSeller: false,
//   },
// ];

export default function LatestProducts() {
  const [products, setProducts] = useState([]);
  const { currentIndex, visibleCategories, handlePrev, handleNext } =
    useCarousel(products);

  // fetch products and put it into products array
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
      } catch (error) {
        console.error("Error fetching products or reviews:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="container latest-products mx-auto px-4 sm:px-6 lg:px-8 relative mt-14">
      <div className="head mb-6 flex flex-col items-center gap-2">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-700">
          Explore Our Latest Products
        </h2>
        <p className="text-center text-sm sm:text-base font-medium text-gray-500">
          Discover a selection of our best-selling products, carefully curated{" "}
          <br className="hidden sm:block" />
          to meet your needs and elevate your everyday life.
        </p>
      </div>

      <div className="overflow-hidden relative">
        <div
          className="products transition-transform duration-500"
          style={{
            transform: `translateX(-${
              (currentIndex * 100) / visibleCategories
            }%)`,
          }}
        >
          {products?.map((product) => (
            <ProductCard key={product.productId} product={product} />
          ))}
        </div>

        {/* Prev Button */}
        <button
          className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-[#dce3e6] text-gray-700 text-xs sm:text-sm md:text-lg p-2 rounded-full z-10"
          onClick={handlePrev}
        >
          <IoIosArrowBack />
        </button>

        {/* Next Button */}
        <button
          className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-[#dce3e6] text-gray-700 text-xs sm:text-sm md:text-lg p-2 rounded-full z-10"
          onClick={handleNext}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </section>
  );
}