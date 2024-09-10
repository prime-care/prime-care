import React, { useEffect, useState } from "react";
// flowbite components
import { Rating } from "flowbite-react";
// firebase
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../../../services/firebase";

const ProductReviews = ({ productId }) => {
  const [reviews, setReviews] = useState([]);

  // fetch reviews and user's names who reviewd this product
  useEffect(() => {
    const fetchReviewsAndUsers = async () => {
      const reviewsQuery = query(
        collection(db, "reviews"),
        where("productId", "==", productId)
      );
      const reviewsSnapshot = await getDocs(reviewsQuery);
      const fetchedReviews = reviewsSnapshot.docs
        .map((doc) => doc.data())
        .filter((review) => review.comment !== ""); // fetchedReviews => reviews who has comments in this product

      // Fetching user details
      const userIds = fetchedReviews.map((review) => review.userId);
      const usersQuery = query(
        collection(db, "users"),
        where("userId", "in", userIds)
      );
      const usersSnapshot = await getDocs(usersQuery); // usersSnapshot.docs.map(doc=>doc.data) => array of users who had reviewed the product

      const usersData = {};
      usersSnapshot.docs.forEach((doc) => {
        const user = doc.data();
        usersData[user.userId] = user.name; // {u1: moamen, u2:omar, ...}
      });

      const reviewsWithUserNames = fetchedReviews.map((review) => ({
        ...review,
        userName: usersData[review.userId], // userName : userData.u1 (moamen)
      }));
      //ex: reviewsWithUserNames =>[{...review data + username : moamen },{{...review data + username : omar} ...]

      setReviews(reviewsWithUserNames);
    };

    fetchReviewsAndUsers();
  }, [productId]);

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h3 className="text-xl font-semibold mb-4">User Reviews:</h3>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index} className="mb-4">
            <p className="text-teal-600 font-medium">{review.userName}</p>
            <p className="text-gray-700">{review.comment}</p>
            <div className="flex items-center">
              <Rating>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Rating.Star key={star} filled={star <= review.rating} />
                ))}
              </Rating>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No reviews yet.</p>
      )}
    </div>
  );
};

export default ProductReviews;
