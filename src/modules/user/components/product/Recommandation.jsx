// import React from "react";
// import PropTypes from "prop-types";

// const ProductCard = ({
//   image,
//   category,
//   title,
//   price,
//   oldPrice,
//   stockLevel,
// }) => {
//   return (
//     <div className="border rounded-lg p-4 shadow-md">
//       <div className="relative">
//         <img
//           src={image}
//           alt={title}
//           className="w-full h-40 object-cover rounded-md"
//         />
//         {oldPrice && (
//           <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
//             Sale! -20%
//           </span>
//         )}
//       </div>
//       <div className="mt-4">
//         <p className="text-gray-500 text-xs">{category}</p>
//         <h3 className="text-lg font-semibold">{title}</h3>
//         {oldPrice && (
//           <p className="text-gray-500 text-sm line-through">{`$${oldPrice}`}</p>
//         )}
//         <p className="text-green-600 font-bold text-lg">{`$${price}`}</p>
//         <p className="text-xs mt-1 text-gray-500">Stock Level</p>
//         <div className="w-full h-2 bg-gray-300 rounded-full mt-1">
//           <div
//             className={`h-full ${
//               stockLevel > 75
//                 ? "bg-green-500"
//                 : stockLevel > 50
//                 ? "bg-yellow-500"
//                 : "bg-red-500"
//             } rounded-full`}
//             style={{ width: `${stockLevel}%` }}
//           ></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// ProductCard.propTypes = {
//   image: PropTypes.string.isRequired,
//   category: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
//   oldPrice: PropTypes.number,
//   stockLevel: PropTypes.number.isRequired,
// };

// const Recommendations = () => {
//   const products = [
//     {
//       image: "path_to_image_1",
//       category: "Fish Oil & Omega 3, 6, 9",
//       title: "Nature’s Road Odourless Fish Oil 1000mg Cap X 450",
//       price: 24.79,
//       oldPrice: 30.99,
//       stockLevel: 80,
//     },
//     {
//       image: "path_to_image_2",
//       category: "Bone & Joints Health",
//       title: "Caltrain Bone Health Tab X 100",
//       price: 17.99,
//       stockLevel: 70,
//     },
//     {
//       image: "path_to_image_3",
//       category: "Antioxidants",
//       title: "Nature’s Road Super Foods Super Greens + Reds 100g",
//       price: 24.29,
//       stockLevel: 40,
//     },
//   ];

//   const recentProducts = [
//     {
//       category: "Skin Care",
//       title: "Jack Phunkett Super-Fade Face Cream",
//       price: 17.99,
//     },
//     {
//       category: "Waxing & Hair Removal",
//       title: "Minea For Men Extra Moisturising",
//       price: 7.95,
//     },
//     {
//       category: "Bath & Body",
//       title: "Posken Intensive Moisture Body",
//       price: 12.99,
//     },
//   ];

//   return (
//     <div className="p-8">
//       <h2 className="text-xl font-bold mb-4">You May Be Interested In...</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {products.map((product, index) => (
//           <ProductCard key={index} {...product} />
//         ))}
//       </div>
//       <div className="mt-8">
//         <h3 className="text-lg font-bold mb-2">Recent products</h3>
//         <ul className="space-y-4">
//           {recentProducts.map((product, index) => (
//             <li key={index} className="flex justify-between items-center">
//               <div>
//                 <p className="text-gray-500 text-xs">{product.category}</p>
//                 <p className="font-semibold">{product.title}</p>
//               </div>
//               <p className="text-green-600 font-bold">{`$${product.price}`}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Recommendations;
import PropTypes from "prop-types";

const ProductCard = ({
  image,
  category,
  title,
  price,
  oldPrice,
  stockLevel,
}) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded-md"
        />
        {oldPrice && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            Sale! -20%
          </span>
        )}
      </div>
      <div className="mt-4">
        <p className="text-gray-500 text-xs">{category}</p>
        <h3 className="text-lg font-semibold">{title}</h3>
        {oldPrice && (
          <p className="text-gray-500 text-sm line-through">{`$${oldPrice}`}</p>
        )}
        <p className="text-green-600 font-bold text-lg">{`$${price}`}</p>
        <p className="text-xs mt-1 text-gray-500">Stock Level</p>
        <div className="w-full h-2 bg-gray-300 rounded-full mt-1">
          <div
            className={`h-full ${
              stockLevel > 75
                ? "bg-green-500"
                : stockLevel > 50
                ? "bg-yellow-500"
                : "bg-red-500"
            } rounded-full`}
            style={{ width: `${stockLevel}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  oldPrice: PropTypes.number,
  stockLevel: PropTypes.number.isRequired,
};

const Recommendations = () => {
  const products = [
    {
      image: "public/images/OIP.jpeg",
      category: "Fish Oil & Omega 3, 6, 9",
      title: "Nature’s Road Odourless Fish Oil 1000mg Cap X 450",
      price: 24.79,
      oldPrice: 30.99,
      stockLevel: 80,
    },
    {
      image: "public/images/OIP (1).jpeg",
      category: "Bone & Joints Health",
      title: "Caltrain Bone Health Tab X 100",
      price: 17.99,
      stockLevel: 70,
    },
    {
      image: "public/images/R (1).jpeg",
      category: "Antioxidants",
      title: "Nature’s Road Super Foods Super Greens + Reds 100g",
      price: 24.29,
      stockLevel: 40,
    },
  ];

  const recentProducts = [
    {
      category: "Skin Care",
      image: "public/images/OIP.jpeg",

      title: "Jack Phunkett Super-Fade Face Cream",
      price: 17.99,
    },
    {
      category: "Waxing & Hair Removal",
      image: "public/images/OIP.jpeg",

      title: "Minea For Men Extra Moisturising",
      price: 7.95,
    },
    {
      category: "Bath & Body",
      image: "public/images/OIP.jpeg",

      title: "Posken Intensive Moisture Body",
      price: 12.99,
    },
  ];

  return (
    <div className="mt-14">
      <h2 className="text-xl font-bold mb-4">You May Be Interested In...</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
        <div className="md:col-span-1">
          <h3 className="text-lg font-bold mb-2">Recent products</h3>
          <ul className="space-y-4">
            {recentProducts.map((product, index) => (
              <li key={index} className="flex justify-between items-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-20 object-cover rounded-md"
                />
                <div>
                  <p className="text-gray-500 text-xs">{product.category}</p>
                  <p className="font-semibold">{product.title}</p>
                  <p className="text-green-600 font-bold">{`$${product.price}`}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
