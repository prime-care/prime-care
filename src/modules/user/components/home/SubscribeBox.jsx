import React from "react";

export default function SubscribeBox() {
  return (
    <section className=" mb-[6rem] mt-24  flex flex-col lg:flex-row  items-center px-7 container rounded-[1rem] bg-[#26658c] text-white overflow-hidden">
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 350 342.38"
        className="text-[#4abfd9] w-[200px] -rotate-12 fill-current px-8"
      >
        <defs>
          <style>
            {`.cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:14px;}`}
          </style>
        </defs>
        <title>subscribe</title>
        <path
          className="cls-1"
          d="M133,37.78,175,7l42,30.78M49,99.33,7,130.11V335.38H343V130.11L301,99.33m42,236-130.65-107c-21.84-17.89-55.28-15.9-74.25-.37L7,335.37m3.53-200.3L132.76,227.7m206.71-92.62L217.24,227.7M174.06,108.63c-9.2,0-18.14,7.53-19.87,16.73l-2.86,15.24c-1.73,9.2,4.38,16.73,13.58,16.73h2.6c9.2,0,18.14-7.53,19.87-16.73l2.86-15.24c1.73-9.2-4.38-16.73-13.58-16.73ZM198.73,107c-8.21,14.47-10,21.16-10.92,35.65-1.44,21.74,24.46,19.12,34.91,5.81a38.73,38.73,0,0,0,7.56-14.78c8.17-35.14-20-57.75-53.28-57.75-33,0-59.81,25.16-59.81,56.21S144,188.31,177,188.31a62.85,62.85,0,0,0,24.77-5m95.41-16.61v-124H52.82v124"
        />
      </svg>
      <span className="my-5 text-lg sm:text-xl px-7">
        Get Our Best Deals Straight to Your Inbox!
      </span>
      <div className="flex items-center mb-2 lg:mb-0">
        <input
          type="text"
          placeholder="Enter your email"
          className="text-black w-[200px] sm:w-[400px] h-12 p-3 rounded-l-[1rem] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="h-12 w-28 bg-[#4abfd9] text-white rounded-r-[1rem] ">
          Sign Up
        </button>
      </div>
    </section>
  );
}
