import { useEffect, useState } from "react";

import { toast } from "react-toastify";

//flowbite components
import { Rating, Label, Textarea } from "flowbite-react";

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
  const [hasReviewed, setHasReviewed] = useState(false); // state to check if the current user has already reviewed this product
  const [loading, setLoading] = useState(false); // loading state for button
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
    if (!userId || loading) return; // prevent multiple submissions

    setLoading(true); // start loading

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
      toast.success("Thank you for your review");
    } else {
      toast.error("You can only review products you have purchased.");
    }

    setLoading(false); // stop loading
  };

  if (hasReviewed) {
    return (
      <div className="container mb-4">
        <p className="text-base font-semibold text-gray-700 text-center">
          You have already reviewed this product.
        </p>
      </div>
    );
  }

  return (
    <div className="container pb-4 mb-4 border-b border-gray-300">
      <h3 className="mb-4 text-xl font-semibold text-gray-700">
        Rate this product
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
      <div className="max-w-md">
        <div className="mb-2 block">
          <Label htmlFor="comment" value="Your Comment" />
        </div>
        <Textarea
          id="comment"
          placeholder="Add your comment"
          required
          rows={4}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>

      <button
        onClick={handleRatingSubmit}
        disabled={loading || rating == 0}
        className={`mt-4 px-4 py-2 bg-[#0e7490] text-white rounded-md hover:bg-[#0c6373] ${
          loading || rating == 0 ? "cursor-not-allowed opacity-50" : ""
        }`}>
        {loading ? "Submitting..." : "Submit Review"}
      </button>
    </div>
  );
};

export default ProductRating;
