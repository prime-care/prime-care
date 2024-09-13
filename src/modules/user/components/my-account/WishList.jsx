import { useEffect, useState } from "react";

// components
import { Spinner } from "flowbite-react";
import ProductCard from "../../../common/components/ProductCard";
import { db } from "../../../../services/firebase";
import { useSelector } from "react-redux";
import { collection, getDocs, query, where } from "firebase/firestore";

const WishList = () => {
  const [loading, setLoading] = useState(true);
  const [wishList, setWishList] = useState([]);
  const userId = useSelector((state) => state.user.uid);

  useEffect(() => {
    const fetchWishList = async () => {
      try {
        setLoading(true);
        const wishListRef = collection(db, "wishList");
        const q = query(wishListRef, where("userId", "==", userId));
        const querySnapshot = await getDocs(q);

        const wishListData = await Promise.all(
          querySnapshot.docs.map(async (wishListDoc) => {
            const wishListItem = wishListDoc.data();
            const productQuery = query(
              collection(db, "products"),
              where("productId", "==", wishListItem.productId)
            );
            const productSnapshot = await getDocs(productQuery);

            if (!productSnapshot.empty) {
              const productDoc = productSnapshot.docs[0];
              const productData = productDoc.data();
              return {
                ...wishListItem,
                name: productData.name,
                price: productData.price,
                image: productData.image,
                averageRating: 0,
                categoryName: productData.categoryName,
              };
            } else {
              console.error(
                "No product found with productId:",
                wishListItem.productId
              );
              return wishListItem;
            }
          })
        );

        setWishList(wishListData);
      } catch (error) {
        console.error("Error fetching wishlist:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWishList();
  }, [userId]);

  console.log(wishList);

  return (
    <div>
      <div className="head">
        <h1 className="mb-6 text-2xl font-medium text-gray-700">Wishlist</h1>
      </div>

      {loading ? (
        <div className="loading text-center my-4 text-xl font-semibold">
          <Spinner aria-label="Extra large spinner example" size="xl" />
        </div>
      ) : wishList.length === 0 ? (
        <div className="py-10 mt-4 bg-secondaryBg rounded-lg">
          <p className="no-data text-center text-xl font-semibold text-gray-700">
            No Products Found
          </p>
        </div>
      ) : (
        <div
          className="products grid gap-4 
          grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {wishList.map((product) => (
            <ProductCard key={product.productId} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default WishList;
