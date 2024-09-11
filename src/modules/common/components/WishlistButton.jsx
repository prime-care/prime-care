import { IoHeartOutline, IoHeart } from "react-icons/io5";
import useWishlist from "../hooks/useWishlist";
import { Button } from "flowbite-react";

const WishlistTextButton = ({ userId, productId }) => {
  const { isInWishlist, toggleWishlist } = useWishlist(userId, productId);

  return (
    <Button
      onClick={toggleWishlist}
      color="gray"
      className="flex justify-center items-center w-fit"
    >
      {isInWishlist ? (
        <IoHeart className="mr-2 h-5 w-5 text-[#0e7490]" />
      ) : (
        <IoHeartOutline className="mr-2 h-5 w-5" />
      )}
      <span className={isInWishlist ? "text-[#0e7490]" : ""}>
        {isInWishlist ? "Remove from wish list" : "Add to wish list"}
      </span>
    </Button>
  );
};

export default WishlistTextButton;
