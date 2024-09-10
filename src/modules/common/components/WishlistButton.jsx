import { useEffect, useState } from "react";
//firebase
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
//uuid
import { v4 as uuidv4 } from "uuid";
// flowbite component
import { Button } from "flowbite-react";
//icon
import { IoHeartOutline } from "react-icons/io5";
import { IoHeart } from "react-icons/io5";

const WishlistButton = ({ userId, productId }) => {
  const [isInWishlist, setIsInWishlist] = useState(false);
  // state to save the wishListId to delete it if the user decide to remove it from his wish list
  const [wishListDocId, setWishListDocId] = useState(null);

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
  const handleWishlistToggle = async () => {
    // if its there => remove it
    if (isInWishlist) {
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
    }
  };

  return (
    <Button
      onClick={handleWishlistToggle}
      color="gray"
      className="flex justify-center items-center w-fit"
    >
      {isInWishlist ? (
        <IoHeart className="mr-2 h-5 w-5 text-[#0e7490]" />
      ) : (
        <IoHeartOutline className="mr-2 h-5 w-5" />
      )}

      {isInWishlist ? (
        <span className=" text-[#0e7490]">Remove from wish list</span>
      ) : (
        "Add to wish list"
      )}
    </Button>
  );
};

export default WishlistButton;
