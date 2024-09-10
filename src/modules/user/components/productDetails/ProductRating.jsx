import React, { useEffect, useState } from "react";
//flowbite components
import { Rating } from "flowbite-react";
//redux
import { useSelector } from "react-redux";
// firebase
import {
  doc,
  setDoc,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../../../services/firebase";

// uuid
import { v4 as uuidv4 } from "uuid";

const ProductRating = ({ productId }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [hasReviewed, setHasReviewed] = useState(false); // state to check if the current user has already reviwed this product
  const userId = useSelector((state) => state.user.uid);

  // check if the current use has already reviewed this product
  useEffect(() => {
    const checkIfReviewed = async () => {
      const reviewsRef = collection(db, "reviews");
      const q = query(
        reviewsRef,
        where("productId", "==", productId),
        where("userId", "==", userId)
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        setHasReviewed(true);
      }
    };

    checkIfReviewed();
  }, [productId, userId]);

  const handleRatingSubmit = async () => {
    if (!userId) return;

    // check if the user has purchased the product
    const ordersQuery = query(
      collection(db, "orders"),
      where("userId", "==", userId),
      where("products", "array-contains", { productId: productId })
    );
    const ordersSnapshot = await getDocs(ordersQuery);

    if (!ordersSnapshot.empty) {
      const reviewId = uuidv4();
      await setDoc(doc(db, "reviews", reviewId), {
        reviewId,
        productId,
        userId,
        rating,
        comment,
      });
      setHasReviewed(true);
      alert("Thank you for your review!");
    } else {
      alert("You can only review products you have purchased.");
    }
  };

  if (hasReviewed) {
    return (
      <p className="text-[#0e7490] bg-[#e0f7fa] p-4  border border-t-[#0e7490] text-center">
        You have already reviewed this product.
      </p>
    );
  }

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-4 text-[#0e7490]">
        Rate this product:
      </h3>
      <div className="flex items-center mb-4">
        <Rating>
          {[1, 2, 3, 4, 5].map((star) => (
            <Rating.Star
              key={star}
              filled={star <= rating}
              onClick={() => setRating(star)}
              className="cursor-pointer"
            />
          ))}
        </Rating>
      </div>
      <textarea
        className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-[#0e7490]"
        placeholder="Add your comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <button
        onClick={handleRatingSubmit}
        className="mt-4 px-4 py-2 bg-[#0e7490] text-white rounded-md hover:bg-[#0c6373]"
      >
        Submit Review
      </button>
    </div>
  );
};

export default ProductRating;
