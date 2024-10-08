import { Link } from "react-router-dom";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import useCarousel from "../../../common/hooks/useCarousel";
import { categories } from "../../../../constants";

export default function Categories() {
  const { currentIndex, visibleCategories, handlePrev, handleNext } =
    useCarousel(categories);

  return (
    <section className="container relative mt-14">
      <div className="head mb-6 flex flex-col items-center gap-2">
        <h2 className="text-center text-3xl font-bold text-gray-700">
          Explore Our Categories
        </h2>
        <p className="text-center text-base font-medium text-gray-500">
          Browse our diverse categories, where you'll find everything from
          skincare <br />
          essentials to fitness gear, all curated for your unique lifestyle
          needs.
        </p>
      </div>

      <div className="mb-1 flex justify-end items-center gap-3">
        <button
          className="bg-[#dce3e6] text-[#2e3133] text-sm sm:text-lg p-2 rounded-full"
          onClick={handlePrev}>
          <IoIosArrowBack />
        </button>
        <button
          className="bg-[#dce3e6] text-[#2e3133] text-sm sm:text-lg p-2 rounded-full"
          onClick={handleNext}>
          <IoIosArrowForward />
        </button>
      </div>

      <div className="overflow-hidden relative">
        <div
          className={`flex transition-transform duration-500`}
          style={{
            transform: `translateX(-${
              (currentIndex * (window.innerWidth < 920 ? 70 : 100)) /
              visibleCategories
            }%)`,
          }}>
          {categories.map((cat) => (
            <Link
              to={cat.link}
              key={cat.id}
              className="min-w-[70%] sm:min-w-[50%] lg:min-w-[33.33%] xl:min-w-[25%] p-2">
              <div
                className={`${cat.color} rounded-2xl overflow-hidden h-[200px] sm:h-[240px] lg:h-[264px] flex justify-between flex-col`}>
                <p className="py-2 sm:py-4 lg:py-6 px-4 sm:px-6 lg:px-8 text-white text-base sm:text-lg lg:text-xl font-semibold text-center">
                  {cat.text}
                </p>
                <img
                  src={cat.image}
                  alt={cat.text}
                  className="rounded-2xl object-cover w-full h-auto"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
