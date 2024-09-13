import React, { useEffect, useState } from "react";
// flowbite components
import { Rating } from "flowbite-react";
// firebase
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../../../services/firebase";

const ProductReviews = ({ productId }) => {
  const [reviews, setReviews] = useState([]);

  // fetch reviews and user's names who reviewed this product
  useEffect(() => {
    const fetchReviewsAndUsers = async () => {
      // Fetching reviews
      const reviewsQuery = query(
        collection(db, "reviews"),
        where("productId", "==", productId)
      );
      const reviewsSnapshot = await getDocs(reviewsQuery);
      const fetchedReviews = reviewsSnapshot.docs
        .map((doc) => doc.data())
        .filter((review) => review.comment !== ""); // fetchedReviews => reviews with comments

      // If no reviews with comments, return an empty array
      if (fetchedReviews.length === 0) {
        setReviews([]);
        return;
      }

      // Fetching user details only if there are reviews
      const userIds = fetchedReviews.map((review) => review.userId);

      // Check if userIds array is not empty
      if (userIds.length > 0) {
        const usersQuery = query(
          collection(db, "users"),
          where("userId", "in", userIds)
        );
        const usersSnapshot = await getDocs(usersQuery);

        const usersData = {};
        usersSnapshot.docs.forEach((doc) => {
          const user = doc.data();
          usersData[user.userId] = user.name; // Mapping user IDs to names
        });

        const reviewsWithUserNames = fetchedReviews.map((review) => ({
          ...review,
          userName: usersData[review.userId], // Adding userName to review
        }));

        setReviews(reviewsWithUserNames);
      }
    };

    fetchReviewsAndUsers();
  }, [productId]);

  return (
    <div className="container mb-8">
      <h3 className="mb-4 text-xl font-semibold text-gray-700">
        User Reviews:
      </h3>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div
            key={index}
            className={`mb-3 flex flex-col gap-1 pb-3 max-w-96 ${
              index !== reviews.length - 1 ? "border-b border-gray-300" : ""
            }`}
          >
            <p className="text-base font-medium text-primary ">
              {review.userName}
            </p>
            <div className="flex items-center">
              <Rating>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Rating.Star key={star} filled={star <= review.rating} />
                ))}
              </Rating>
            </div>
            <p className="text-base font-normal text-gray-700">
              {review.comment}
            </p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No reviews yet.</p>
      )}
    </div>
  );
};

export default ProductReviews;
