import { Carousel } from "flowbite-react";
import { slider } from "../../../../constants";
import { Link } from "react-router-dom";

export default function Slider() {
  return (
    <div className="h-[250px] sm:h-[400px] lg:h-[630px] m-[-3px]">
      <Carousel
        theme={{
          control: {
            base: "hidden",
          },
          indicators: {
            active: {
              off: " bg-gray-800/50 hover:bg-gray-800/80",
              on: "scale-110 bg-gray-800",
            },
            base: "w-2 h-2 rounded-full sm:w-3 sm:h-3",
          },
        }}
      >
        {slider.map((image) => (
          <div key={image.src} className="relative h-full w-full">
            <div className="absolute left-3 sm:left-10 lg:left-52 top-1/2 transform -translate-y-1/2 text-black text-[18px] sm:text-[24px] lg:text-[59px] cursor-default flex-col flex max-w-[200px] sm:max-w-[300px] lg:max-w-[500px]">
              <h2 dangerouslySetInnerHTML={{ __html: image.text }} />
              <Link to="/procuctDetail">
                <button className="mt-2 sm:mt-3 text-white rounded-2xl py-2 sm:py-3 lg:py-5 px-4 sm:px-5 lg:px-9 bg-[#d94945] text-[14px] sm:text-[18px] lg:text-[24px] font-semibold">
                  Shop Now!
                </button>
              </Link>
            </div>

            <img
              src={image.src}
              alt={image.alt}
              className="cursor-default h-full w-full object-cover"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
