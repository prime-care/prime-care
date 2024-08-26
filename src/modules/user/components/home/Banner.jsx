import React from "react";
import SaveUp from "../home/SaveUp";
import { Link } from "react-router-dom";
import { IoMdCheckmark } from "react-icons/io";

export default function Banner() {
  return (
    <section className="mx-[4rem] mt-14 mb-20  flex justify-center text-white gap-8 ">
      {/* right*/}
      <Link className="rounded-2xl overflow-hidden bg-[url('images/banner-1.jpg')] bg-cover bg-center py-12 px-14 w-[650px] min-h-[300px] sm:min-h-[200px]">
        <SaveUp />
        <p className="text-5xl mt-1 mb-8">
          On All Aktins <br /> Products
        </p>
        <button className="text-white rounded-2xl te bg-[#4abfd9] text-base py-4 px-8 font-semibold mb-8">
          Shop Now!
        </button>
        <div className="flex gap-6 items-center">
          <img
            src="images/banner-label-1.png"
            alt="banner-label"
            className="h-16"
          />
          <ul>
            <li className="flex items-center gap-2">
              <IoMdCheckmark /> Low Carp
            </li>
            <li className="flex items-center gap-2">
              <IoMdCheckmark /> Low Sugar
            </li>
            <li className="flex items-center gap-2">
              <IoMdCheckmark /> High Protein
            </li>
          </ul>
        </div>
      </Link>

      <Link className="rounded-2xl overflow-hidden bg-[url('images/banner-2.jpg')] bg-cover bg-center py-12 px-14 w-[650px] min-h-[300px] sm:min-h-[200px]">
        <div className="flex flex-col text-5xl font-extrabold text-white">
          <span className="text-xl mt-[-3px]">Buy 1, Get 1 </span>
          FREE
        </div>
        <p className="text-5xl mt-1 mb-8 text-[#2e3133]">
          Sport Gel <br /> Rapid Active
        </p>
        <button className="text-white rounded-2xl te bg-primary text-base py-4 px-8 font-semibold mb-8">
          Shop Now!
        </button>
        <div className="flex gap-6 items-center">
          <img
            src="images/banner-label-2.png"
            alt="banner-label"
            className="h-14"
          />
          <ul>
            <li className="flex items-center gap-2">
              <IoMdCheckmark /> High Quailty
            </li>
            <li className="flex items-center gap-2">
              <IoMdCheckmark /> For Daily Use
            </li>
            <li className="flex items-center gap-2">
              <IoMdCheckmark /> Cooling Effect
            </li>
          </ul>
        </div>
      </Link>
    </section>
  );
}
