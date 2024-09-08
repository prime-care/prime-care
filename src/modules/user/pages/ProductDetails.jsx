// components
import { Rating } from "flowbite-react";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { BsCartPlus } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { Button } from "flowbite-react";
import { FaTruckFast } from "react-icons/fa6";
import { RiRefund2Fill } from "react-icons/ri";
import { MdOutlinePayment } from "react-icons/md";
import { FaShop } from "react-icons/fa6";

const ProductDetails = () => {
  const product = {
    id: 1,
    image:
      "https://avrellecosmetics.com/cdn/shop/files/Bundle2_3c486e20-66a6-4814-8a7e-d4766fc3b245_1080x1080.png?v=1715784248",
    name: "Ultimate Grow Strong Set",
    rate: 4,
    price: 160,
    currency: "EGP",
    description:
      "This Ultimate Grow Strong Set is designed to nourish and strengthen hair, promoting healthy growth. The set includes a shampoo, conditioner, and serum, all formulated with natural ingredients to revitalize your hair from root to tip.",
    category: "Hair Care",
    inCart: false,
    inWishlist: false,
  };

  const features = [
    {
      id: 1,
      icon: <FaTruckFast size={35} className="text-primary" />,
      name: "Fast Delivery",
      description: "Within 1-4 business days",
    },
    {
      id: 1,
      icon: <RiRefund2Fill size={35} className="text-primary" />,
      name: "Return & Refund",
      description: "30 days return policy",
    },
    {
      id: 1,
      icon: <MdOutlinePayment size={35} className="text-primary" />,
      name: "Safe Shopping",
      description: "100% secure payment",
    },
    {
      id: 1,
      icon: <FaShop size={35} className="text-primary" />,
      name: "Click & Collect",
      description: "Collect in any of our stores",
    },
  ];

  return (
    <main className="product-details">
      <div className="product-grid container my-8">
        <div className="product-image max-w-[450px]">
          <img src={product?.image} alt={product?.name} className="w-full" />
        </div>

        <div className="product-info">
          <h1 className="mb-3 text-2xl md:text-3xl font-medium text-gray-900">
            {product?.name}
          </h1>

          <Rating>
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star filled={false} />
          </Rating>

          <span className="block my-4 text-xl font-semibold text-primary">
            {product?.price + " "}
            <span className="text-base font-semibold text-gray-500">
              {product?.currency}
            </span>
          </span>

          <p className="mb-7 text-base font-medium text-gray-500 leading-6">
            {product?.description}
          </p>

          <div className="actions mb-3 flex flex-col">
            <span className="block mb-2 text-base font-medium text-gray-500">
              Quantity
            </span>

            <div className="mb-4 flex gap-3">
              <div className="p-3 flex justify-center items-center gap-6 border border-gray-300 rounded-lg">
                <FaMinus className="cursor-pointer transition-all duration-300 hover:text-red-500" />
                <span className="text-base font-medium text-gray-900">1</span>
                <FaPlus className="cursor-pointer transition-all duration-300 hover:text-green-500" />
              </div>
              <Button className="flex justify-center items-center">
                <BsCartPlus className="mr-2 h-5 w-5" />
                Add To Cart
              </Button>
            </div>

            <Button
              color="gray"
              className="flex justify-center items-center w-fit">
              <CiHeart className="mr-2 h-5 w-5" />
              Add To Wishlist
            </Button>
          </div>

          <div className="product-category ">
            <span className="text-base font-medium text-gray-700">
              Category:{" "}
            </span>
            <span className="text-base font-medium text-primary">
              {product?.category}
            </span>
          </div>
        </div>

        <div className="features">
          <div className="p-3 mx-auto flex flex-col gap-6 max-w-80 bg-gray-100 rounded-md">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="feature flex justify-start items-center gap-4">
                {feature?.icon}
                <div className="flex flex-col">
                  <span className="text-base font-semibold text-gray-900">
                    {feature?.name}
                  </span>
                  <span className="text-sm font-medium text-gray-500">
                    {feature?.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
