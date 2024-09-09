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
//component
import { Button } from "flowbite-react";
//icon
import { CiHeart } from "react-icons/ci";

const WishlistButton = ({ userId, productId }) => {
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [wishListDocId, setWishListDocId] = useState(null);

  useEffect(() => {
    const checkWishlist = async () => {
      const q = query(
        collection(db, "wishList"),
        where("userId", "==", userId),
        where("productId", "==", productId)
      );
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        setIsInWishlist(true);
        setWishListDocId(querySnapshot.docs[0].id);
      } else {
        setIsInWishlist(false);
      }
    };

    checkWishlist();
  }, [userId, productId]);

  const handleWishlistToggle = async () => {
    if (isInWishlist) {
      if (wishListDocId) {
        await deleteDoc(doc(db, "wishList", wishListDocId));
        setIsInWishlist(false);
      }
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
      <CiHeart className="mr-2 h-5 w-5" />
      {isInWishlist ? "Remove from wish list" : "Add to wish list"}
    </Button>
  );
};

export default WishlistButton;
