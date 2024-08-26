import React from "react";
import { categories } from "../../../../constants";
import { IoCartOutline } from "react-icons/io5";
import { Rating, RatingStar } from "flowbite-react";

export default function BestSellers() {
  return (
    <section>
      <h3 className="mb-4 font-bold text-center text-[#2e3133] text-[24px]">
        Best Sellers
      </h3>

      <ul className="flex justify-center gap-4 font-semibold  text-[#26658c] mb-5">
        <li className="px-6 py-2 bg-[#26658c] text-white rounded-[1rem]">
          <a href="">All</a>
        </li>
        {categories.map((cat) => (
          <li className="px-6 py-2" key={cat.id}>
            <a href="">{cat.text}</a>
          </li>
        ))}
      </ul>

      <div className="container flex gap-4 mx-[4rem] mb-5 rounded-[1rem] pt-7  border-x border-t border-[#dce3e6]">
        {/* Right Product */}
        <div className="w-1/4 flex flex-col border-r border-[#dce3e6] px-7 ">
          <div>
            <img
              src="images/product-1.jpg"
              alt="Large Product"
              className="w-full h-80 object-cover rounded-lg"
            />
            <p className="text-gray-500 mt-4">COVID-19 Essentials</p>
            <h2 className="text-2xl font-bold text-blue-800">
              Medisou Antibacterial Hand Sanitiser 250ml
            </h2>
          </div>
          <div>
            <div className="flex items-center mt-2">
              <span className="text-[#d9a934] text-xl">
                <Rating>
                  <RatingStar />
                  <RatingStar />
                  <RatingStar />
                  <RatingStar />
                  <RatingStar />
                </Rating>
              </span>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-2xl text-[#46a69c] mt-2 font-bold">$19.99</p>
              <div className=" hover:bg-primary duration-300 rounded-full p-2 bg-[#edf1f2]">
                <IoCartOutline className="text-2xl hover:text-white" />
              </div>
            </div>
            <p className="text-gray-500 mt-2">Stock Level</p>
            <div className="h-2 bg-gray-200 rounded-full mt-1">
              <div
                className="h-full bg-[#46a69c] rounded-full"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>
        </div>

        {/* left products */}
        <div className="w-3/4 grid grid-cols-3 gap-4">
          {[...Array(9)].map((_, index) => (
            <div
              key={index}
              className="bg-white pb-8 pr-8  flex justify-between gap-6 border-b  border-[#dce3e6]"
            >
              <img
                src={`images/product-${index + 1 + 1}.jpg`}
                alt={`Product ${index + 1}`}
                className="h-32 object-cover rounded-lg"
              />

              <div>
                <a
                  href=""
                  className="block text-[#747c80] text-sm mb-2 font-medium"
                >
                  Category
                </a>
                <a href="" className="text-base font-bold text-[#26658c] ">
                  Product Name
                </a>
                <div className="flex items-center mt-2">
                  <span className="text-[rgb(217,169,52)] text-lg">
                    <Rating>
                      <RatingStar />
                      <RatingStar />
                      <RatingStar />
                      <RatingStar />
                      <RatingStar filled={false} />
                    </Rating>
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-lg text-[#46a69c] mt-2 font-bold">
                    $19.99
                  </p>
                  <a
                    href=""
                    className="rounded-full p-2 bg-[#edf1f2] hover:bg-primary duration-300 hover:text-white mt-1"
                  >
                    <IoCartOutline className="  text-lg" />
                  </a>
                </div>
                <p className="text-[#8b9599] mt-1 text-sm font-medium">
                  Stock Level
                </p>
                <div className="h-2 bg-gray-200 rounded-full mt-1">
                  <div
                    className="h-full bg-secondary rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
