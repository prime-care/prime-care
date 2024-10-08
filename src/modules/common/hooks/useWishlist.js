import { toast } from "react-toastify";

import { useEffect, useState } from "react";
// firebase
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../../services/firebase";
// uuid
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const useWishlist = (userId, productId) => {
  const [isInWishlist, setIsInWishlist] = useState(false);
  // state to save the wishListId to delete it if the user decide to remove it from his wish list
  const [wishListDocId, setWishListDocId] = useState(null);

  const navigate = useNavigate();

  // check if the current user already has this product in his wishlist
  useEffect(() => {
    const checkWishlist = async () => {
      const q = query(
        collection(db, "wishList"),
        where("userId", "==", userId),
        where("productId", "==", productId)
      );
      const querySnapshot = await getDocs(q);

      //if current user has the product ih his wish list
      if (!querySnapshot.empty) {
        setIsInWishlist(true);
        setWishListDocId(querySnapshot.docs[0].id);
      } else {
        setIsInWishlist(false);
      }
    };

    checkWishlist();
  }, [userId, productId]);

  // function to add or remove the product from user's wish list
  const toggleWishlist = async () => {
    if (!userId) {
      navigate("/auth/login");
      return;
    }

    // if its there => remove it
    if (isInWishlist) {
      toast.warning("Item removed from wishlist!");
      await deleteDoc(doc(db, "wishList", wishListDocId));
      setIsInWishlist(false);
      //else add it
    } else {
      const newWishListId = uuidv4();
      const newDoc = await addDoc(collection(db, "wishList"), {
        wishListId: newWishListId,
        userId,
        productId,
      });
      setWishListDocId(newDoc.id);
      setIsInWishlist(true);
      toast.success("Item added to wishlist successfully");
    }
  };

  return { isInWishlist, toggleWishlist };
};

export default useWishlist;
