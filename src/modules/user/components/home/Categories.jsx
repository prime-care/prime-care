import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import useCarousel from "../../../common/hooks/useCarousel";
import { categories } from "../../../../constants";

export default function Categories() {
  const { currentIndex, visibleCategories, handlePrev, handleNext } =
    useCarousel(categories);

  return (
    <section className=" mx-20 relative mt-14">
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
          className="absolute top-[60%] -left-10 transform -translate-y-1/2 bg-[#dce3e6] text-[#2e3133] text-sm sm:text-lg p-2 rounded-full"
          onClick={handlePrev}
        >
          <IoIosArrowBack />
        </button>
        <button
          className="absolute top-[60%] -right-10 transform -translate-y-1/2 bg-[#dce3e6] text-[#2e3133]  text-sm sm:text-lg p-2 rounded-full"
          onClick={handleNext}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </section>
  );
}
