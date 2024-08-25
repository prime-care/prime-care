import { Carousel } from "flowbite-react";
import { slider } from "../../../../constants";
import { Link } from "react-router-dom";
export default function Slider() {
  return (
    // <div className="h-56 sm:h-64 xl:h-80 2xl:h-96"> // natural
    <div className="h-[630px] m-[-3px]  ">
      <Carousel
        theme={{
          control: {
            base: "hidden",
          },
          indicators: {
            active: {
              off: "bg-gray-800/50 hover:bg-gray-800/80",
              on: " scale-110	 bg-gray-800",
            },
          },
        }}
      >
        {slider.map((image) => (
          <div key={image.src} className="relative h-full w-full">
            <div className="absolute left-28 top-1/2 transform -translate-y-1/2 text-balck text-[59px]  cursor-default flex-col flex  max-w-[500px]">
              <p>{image.text}</p>
              <Link to="/procuctDetail">
                <button className="text-white rounded-2xl te py-5 px-9 bg-[#d94945] text-[24px] font-semibold ">
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
