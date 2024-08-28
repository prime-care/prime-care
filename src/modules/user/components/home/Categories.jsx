// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { IoIosArrowForward } from "react-icons/io";
// import { IoIosArrowBack } from "react-icons/io";
// import { categories } from "../../../../constants";
// export default function Categories() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const visibleCategories = 4;

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex > 0 ? prevIndex - 1 : categories.length - visibleCategories
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex < categories.length - visibleCategories ? prevIndex + 1 : 0
//     );
//   };

//   return (
//     <section className="container relative mt-14 ">
//       <h3 className="mb-4 font-bold text-center text-[#2e3133] text-[24px]">
//         Explore Popular Categories
//       </h3>
//       <div className="overflow-hidden">
//         <div
//           className="flex transition-transform duration-500"
//           style={{
//             transform: `translateX(-${
//               (currentIndex * 100) / visibleCategories
//             }%)`,
//           }}
//         >
//           {categories.map((cat) => (
//             <Link to={cat.link} key={cat.id} className="min-w-[25%] p-4">
//               <div
//                 className={`${cat.color} rounded-2xl overflow-hidden min-h-[264px] flex justify-between flex-col
//                 `}
//               >
//                 <p className="py-6 px-8 text-white text-xl font-semibold text-center">
//                   {cat.text}
//                 </p>
//                 <img src={cat.image} alt={cat.text} className=" rounded-2xl" />
//               </div>
//             </Link>
//           ))}
//         </div>
//         <button
//           className="absolute top-1/2 -left-10 transform -translate-y-1/2 bg-[#dce3e6] text-[#2e3133] text-lg  p-2 mt-7 rounded-full"
//           onClick={handlePrev}
//         >
//           <IoIosArrowBack />
//         </button>
//         <button
//           className="absolute top-1/2 -right-10 transform -translate-y-1/2 bg-[#dce3e6] text-[#2e3133] text-lg  p-2 mt-7 rounded-full"
//           onClick={handleNext}
//         >
//           <IoIosArrowForward />
//         </button>
//       </div>
//     </section>
//   );
// }
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { categories } from "../../../../constants";

export default function Categories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCategories, setVisibleCategories] = useState(4);

  useEffect(() => {
    const updateVisibleCategories = () => {
      if (window.innerWidth < 640) {
        setVisibleCategories(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCategories(2);
      } else if (window.innerWidth < 1280) {
        setVisibleCategories(3);
      } else {
        setVisibleCategories(4);
      }
    };

    updateVisibleCategories();
    window.addEventListener("resize", updateVisibleCategories);

    return () => {
      window.removeEventListener("resize", updateVisibleCategories);
    };
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : categories.length - visibleCategories
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < categories.length - visibleCategories ? prevIndex + 1 : 0
    );
  };

  return (
    <section className=" mx-24 relative mt-14">
      <h3 className="mb-4 font-bold text-center text-[#2e3133] text-[24px]">
        Explore Popular Categories
      </h3>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${
              (currentIndex * 100) / visibleCategories
            }%)`,
          }}
        >
          {categories.map((cat) => (
            <Link
              to={cat.link}
              key={cat.id}
              className="min-w-[100%] sm:min-w-[50%] lg:min-w-[33.33%] xl:min-w-[25%] p-2"
            >
              <div
                className={`${cat.color} rounded-2xl overflow-hidden h-[200px] sm:h-[240px] lg:h-[264px] flex justify-between flex-col`}
              >
                <p className="py-2 sm:py-4 lg:py-6 px-4 sm:px-6 lg:px-8 text-white text-base sm:text-lg lg:text-xl font-semibold text-center">
                  {cat.text}
                </p>
                <img
                  src={cat.image}
                  alt={cat.text}
                  className="rounded-2xl object-cover"
                />
              </div>
            </Link>
          ))}
        </div>
        <button
          className="absolute top-[200px] -left-10 transform -translate-y-1/2 bg-[#dce3e6] text-[#2e3133] text-lg p-2 rounded-full"
          onClick={handlePrev}
        >
          <IoIosArrowBack />
        </button>
        <button
          className="absolute top-[200px] -right-10 transform -translate-y-1/2 bg-[#dce3e6] text-[#2e3133] text-lg p-2 rounded-full"
          onClick={handleNext}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </section>
  );
}
