// import React from "react";

// import "primeicons/primeicons.css";

// const ProductPage = () => {
//   return (
//     <div className="container mx-auto p-4">
//       <div className="grid mt-9 grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* Left Column: Product Image and Thumbnails */}
//         <div className="lg:col-span-1 space-y-4">
//           <img
//             src="../../../../public/images/132322.jpg"
//             alt="Product Image"
//             className="w-full rounded-lg"
//           />
//           <div className="flex space-x-4">
//             <img
//               src="../../../../public/images/R.jpeg"
//               alt="Thumbnail 1"
//               className="w-12 h-12 rounded border-2 border-gray-300"
//             />
//             <img
//               src="../../../../public/images/brufen-600mg-strip-of-15-tablets-5.1-1641535899.webp"
//               alt="Thumbnail 2"
//               className="w-12 h-12 rounded border-2 border-gray-300"
//             />
//           </div>
//         </div>

//         {/* Middle Column: Product Details */}
//         <div className="lg:col-span-1">
//           <h1 className="text-2xl font-bold">
//             FakeBlaster Keto-Fit Protein Shake 300g
//           </h1>
//           <p className="text-gray-500 text-sm">By Naturopanica</p>
//           <div className="flex items-center space-x-2 my-4">
//             <span className="text-yellow-500 text-xl">★★★★☆</span>
//             <p className="text-sm">(2 Reviews)</p>
//           </div>

//           <div className="flex items-center space-x-4 my-4">
//             <p className="text-xl font-bold text-green-600">$22.11 - $29.11</p>
//             <p className="text-gray-400 line-through">$31.59 - $41.59</p>
//             <span className="text-red-500 bg-red-100 px-2 py-1 rounded-full text-sm">
//               Sale! -30%
//             </span>
//           </div>

//           <p className="text-sm text-gray-600 my-4">
//             Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit.
//             Aenean auctor wisi et urna. Aliquam erat volutpat.
//           </p>

//           {/* Color Options */}
//           <div className="my-4">
//             <label className="block text-sm font-medium text-gray-700">
//               Color
//             </label>
//             <div className="flex space-x-4 mt-2">
//               <button className="w-8 h-8 rounded-full bg-gray-300 border-2 border-gray-400"></button>
//               <button className="w-8 h-8 rounded-full bg-brown-700 border-2 border-gray-400"></button>
//             </div>
//           </div>

//           {/* Flavor Dropdown */}
//           <div className="my-4">
//             <label className="block text-sm font-medium text-gray-700">
//               Flavor
//             </label>
//             <select className="mt-2 block w-full p-2 border border-gray-300 rounded-lg">
//               <option>Please select</option>
//               <option>Chocolate</option>
//               <option>Vanilla</option>
//             </select>
//           </div>

//           {/* Quantity Selector */}
//           <div className="my-4">
//             <label className="block text-sm font-medium text-gray-700">
//               Quantity
//             </label>
//             <div className="flex items-center space-x-2 mt-2">
//               <button className="px-2 py-1 border border-gray-300 rounded">
//                 -
//               </button>
//               <input
//                 type="number"
//                 min="1"
//                 defaultValue="1"
//                 className="w-12 text-center border border-gray-300 rounded"
//               />
//               <button className="px-2 py-1 border border-gray-300 rounded">
//                 +
//               </button>
//             </div>
//           </div>

//           {/* Add to Cart Button */}
//           <button className="w-full bg-blue-600 text-white py-2 rounded-lg mt-4">
//             Add to Cart
//           </button>

//           {/* Additional Links */}
//           <div className="flex items-center space-x-4 mt-4">
//             <button className="text-blue-500 underline">Add to Wishlist</button>
//             <button className="text-blue-500 underline">Add to Compare</button>
//           </div>

//           {/* Product Information */}
//           <p className="text-sm text-gray-500 mt-4">SKU: 100396</p>
//           <p className="text-sm text-gray-500">
//             Category: Weight Loss & Fitness, Weight Management
//           </p>
//           <p className="text-sm text-gray-500">Tags: keto, protein, slimming</p>
//         </div>

//         {/* Right Column: Sidebar */}
//         <div className="lg:col-span-1">
//           <div className="bg-gray-50  p-4 lg:w-64 rounded-lg space-y-4">
//             <div className="flex justify-center items-center gap-2">
//               <span>
//                 {" "}
//                 <i className="pi pi-truck" style={{ fontSize: "2rem" }}></i>
//               </span>
//               <span>
//                 <h2 className="text-lg font-semibold"> Fast Delivery</h2>
//                 <p className="text-sm text-gray-500">
//                   Within 1-4 business days
//                 </p>
//               </span>
//             </div>
//             <div className="flex justify-center items-center gap-2">
//               <span>
//                 {" "}
//                 <i className="pi pi-undo" style={{ fontSize: "2rem" }}></i>
//               </span>
//               <span>
//                 <h2 className="text-lg font-semibold"> Fast Delivery</h2>
//                 <p className="text-sm text-gray-500">
//                   Within 1-4 business days
//                 </p>
//               </span>
//             </div>
//             <div className="flex justify-center items-center gap-2">
//               <span>
//                 {" "}
//                 <i className="pi pi-wallet" style={{ fontSize: "2rem" }}></i>
//               </span>
//               <span>
//                 <h2 className="text-lg font-semibold"> Fast Delivery</h2>
//                 <p className="text-sm text-gray-500">
//                   Within 1-4 business days
//                 </p>
//               </span>
//             </div>
//             <div className="flex justify-center items-center gap-2">
//               <span>
//                 {" "}
//                 <i className="pi pi-shop" style={{ fontSize: "2rem" }}></i>
//               </span>
//               <span>
//                 <h2 className="text-lg font-semibold"> Fast Delivery</h2>
//                 <p className="text-sm text-gray-500">
//                   Within 1-4 business days
//                 </p>
//               </span>
//             </div>
//             <div className="flex justify-around mt-4">
//               <img
//                 src="../../../../public/images/R.png"
//                 alt="Visa"
//                 className="w-12 h-8"
//               />
//               <img
//                 src="../../../../public/images/mastercard-logo.png"
//                 alt="MasterCard"
//                 className="w-12 h-8"
//               />
//               <img
//                 src="../../../../public/images/PayPal_logo.svg.png"
//                 alt="PayPal"
//                 className="w-12 h-8"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductPage;

import  { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "primeicons/primeicons.css";
import Recommendations from "../components/home/Recommandation";
import ProductTabs from "../components/home/ProductTabs";

const ProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(
    "../../../../public/images/132322.jpg"
  );

  const images = [
    "../../../../public/images/132322.jpg",
    "../../../../public/images/R.jpeg",
    "../../../../public/images/brufen-600mg-strip-of-15-tablets-5.1-1641535899.webp",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid mt-9 grid-cols-1 lg:grid-cols-3 gap-20">
        {/* Left Column: Product Image and Thumbnails */}
        <div className="lg:col-span-1 space-y-4">
          <div className="flex justify-center">
            <img
              src={selectedImage}
              alt="Product Image"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full rounded-lg"
            />
          </div>
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="px-2">
                <div className="w-24 h-24">
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className={`w-full h-full object-cover rounded border-2 cursor-pointer ${
                      selectedImage === image
                        ? "border-blue-500"
                        : "border-gray-300"
                    }`}
                    onClick={() => setSelectedImage(image)}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Middle Column: Product Details */}
        <div className="lg:col-span-1">
          <h1 className="text-2xl font-bold">
            FakeBlaster Keto-Fit Protein Shake 300g
          </h1>
          <p className="text-gray-500 text-sm">By Naturopanica</p>
          <div className="flex items-center space-x-2 my-4">
            <span className="text-yellow-500 text-xl">★★★★☆</span>
            <p className="text-sm">(2 Reviews)</p>
          </div>

          <div className="flex items-center space-x-4 my-4">
            <p className="text-xl font-bold text-green-600">$22.11-$29.11</p>
            <p className="text-gray-400 line-through">$31.59-$41.59</p>
            {/* <span className="text-red-500 bg-red-100 px-2 py-1 rounded-full text-sm">
              Sale! -30%
            </span> */}
          </div>

          <p className="text-sm text-gray-600 my-4">
            Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit.
            Aenean auctor wisi et urna. Aliquam erat volutpat.
          </p>

          {/* Color Options */}
          {/* <div className="my-4">
            <label className="block text-sm font-medium text-gray-700">
              Color
            </label>
            <div className="flex space-x-4 mt-2">
              <button className="w-8 h-8 rounded-full bg-gray-300 border-2 border-gray-400"></button>
              <button className="w-8 h-8 rounded-full bg-brown-700 border-2 border-gray-400"></button>
            </div>
          </div> */}

          {/* Flavor Dropdown */}
          {/* <div className="my-4">
            <label className="block text-sm font-medium text-gray-700">
              Flavor
            </label>
            <select className="mt-2 block w-full p-2 border border-gray-300 rounded-lg">
              <option>Please select</option>
              <option>Chocolate</option>
              <option>Vanilla</option>
            </select>
          </div> */}

          {/* Quantity Selector */}
          <div className="my-4">
            <label className="block text-sm font-medium text-gray-700">
              Quantity
            </label>
            <div className="flex  align-baseline space-x-2 mt-2">
              <button className="px-3 flex justify-center items-center py-1 border border-gray-300 rounded">
                -
              </button>
              <input
                type="number"
                min="1"
                defaultValue="1"
                className="w-14 text-center flex justify-center items-center border border-gray-300 rounded"
              />
              <button className="px-2  flex justify-center items-center py-1 border border-gray-300 rounded">
                +
              </button>
              {/* Add to Cart Button */}
              <button className=" bg-primary p-4 text-white py-2  rounded-lg ">
                Add to Cart
              </button>
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex items-center space-x-4 mt-4">
            <button className="text-blue-500 ">Add to Wishlist</button>
            {/* <button className="text-blue-500 underline">Add to Compare</button> */}
          </div>

          {/* Product Information */}
          {/* <p className="text-sm text-gray-500 mt-4">SKU: 100396</p> */}
          <p className="text-sm text-gray-500">
            Category: Weight Loss & Fitness, Weight Management
          </p>
          {/* <p className="text-sm text-gray-500">Tags: keto, protein, slimming</p> */}
        </div>

        {/* Right Column: Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 p-4 lg:w-64 rounded-lg space-y-4">
            <div className="flex justify-start items-center gap-2">
              <span>
                <i className="pi pi-truck" style={{ fontSize: "2rem" }}></i>
              </span>
              <span>
                <h2 className="text-lg font-semibold">Fast Delivery</h2>
                <p className="text-sm text-gray-500">
                  Within 1-4 business days
                </p>
              </span>
            </div>
            <div className="flex justify-start items-center gap-2">
              <span>
                <i className="pi pi-undo" style={{ fontSize: "2rem" }}></i>
              </span>
              <span>
                <h2 className="text-lg font-semibold">Return & Refund</h2>
                <p className="text-sm text-gray-500">30 days return policy</p>
              </span>
            </div>
            <div className="flex justify-start items-center gap-2">
              <span>
                <i className="pi pi-wallet" style={{ fontSize: "2rem" }}></i>
              </span>
              <span>
                <h2 className="text-lg font-semibold">Safe Shopping</h2>
                <p className="text-sm text-gray-500">100% secure payment</p>
              </span>
            </div>
            <div className="flex justify-start items-center gap-2">
              <span>
                <i className="pi pi-shop" style={{ fontSize: "2rem" }}></i>
              </span>
              <span>
                <h2 className="text-lg font-semibold">Click & Collect</h2>
                <p className="text-sm text-gray-500">
                  Collect in any of our stores
                </p>
              </span>
            </div>
            <div className="flex justify-around mt-4">
              <img
                src="../../../../public/images/R.png"
                alt="Visa"
                className="w-12 h-8"
              />
              <img
                src="../../../../public/images/mastercard-logo.png"
                alt="MasterCard"
                className="w-12 h-8"
              />
              <img
                src="../../../../public/images/PayPal_logo.svg.png"
                alt="PayPal"
                className="w-12 h-8"
              />
            </div>
          </div>
        </div>
      </div>
      <ProductTabs />
      <Recommendations />
    </div>
  );
};

export default ProductPage;
