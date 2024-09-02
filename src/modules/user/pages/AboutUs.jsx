import React from "react";
import Slider from "react-slick";
import Card from "../components/about/AboutCard";

import { RiShieldStarFill } from "react-icons/ri";
import { FaFaceGrinStars } from "react-icons/fa6";
import { LuListTodo } from "react-icons/lu";
import { LuShapes } from "react-icons/lu";
import { FaCheckCircle } from "react-icons/fa";


import { IconContext } from "react-icons";

export default function AboutUs() {
  const cardData = [
    {
      image:
        "https://as2.ftcdn.net/v2/jpg/05/67/27/47/1000_F_567274702_xrHtKta3TNgYnEdxCNDQ1nMfXQhXTc9P.jpg",
      title: "Our Vision",
      description:
        "Proin dictum elementum velit. Fusce euismod consequat ante. Lorem ipsum dolor sit amet, consectetuer adipiscing.",
    },
    {
      image:
        "https://t3.ftcdn.net/jpg/05/42/47/72/360_F_542477220_KzwuyWK8LXl23Am0HvbcRXGDQeoXj9Hs.jpg",
      title: "Our Promise",
      description:
        "Mauris accumsan nulla vel diam. Sed in lacus ut enim adipiscing aliquet. Nulla venenatis. In pede mi, aliquet.",
    },
    {
      image:
        "https://media.istockphoto.com/id/1371705287/photo/side-view-of-a-medical-researcher-looking-through-a-microscope.jpg?s=612x612&w=0&k=20&c=8FwGhOiVnSIt8ylCW3MNP2cZf3UercV0BpLlHLhEfOM=",
      title: "Our Mission",
      description:
        "Aliquam dapibus tincidunt metus. Praesent justo dolor, lobortis quis, lobortis dignissim, pulvinar ac, lorem. Vestibulum sed ante.",
    },
  ];

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  const carouselTwoSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  const partners = [
    {
      id: 1,
      name: "Colgeta",
      img: "https://www.colgate.com/content/dam/cp-sites/oral-care/oral-care-center-relaunch/global/logos/colgate-smile-badge.svg",
    },
    {
      id: 2,
      name: "Apamil",
      img: "https://logos-download.com/wp-content/uploads/2023/02/Aptamil_Logo-420x340.png",
    },
    {
      id: 3,
      name: "CetaFill",
      img: "https://i.pinimg.com/originals/4b/c7/1b/4bc71be1e103635a2f5d1ca0299e42a8.png",
    },
    {
      id: 4,
      name: "Nativu",
      img: "https://photos.encuentra24.com/t_user_logo/v1/users/logo/23/08/12/2308126_e57e27",
    },
    {
      id: 5,
      name: "Aktins",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJvFRAD0jV8kBXkp2qxEaypbDRzI62_LFrxQ&s",
    },
    {
      id: 6,
      name: "Colgeta 2",
      img: "https://logos-world.net/wp-content/uploads/2020/09/Colgate-Emblem.png",
    },
  ];

  return (
    <>
      <div className="bg-sky-100 mb-12 py-6">
        <div className="container mx-auto">
          <nav className="text-gray-600 text-sm mb-4">
            <a href="/" className="hover:text-gray-800">
              Home
            </a>{" "}
            / About Us
          </nav>
          <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
        </div>
      </div>
      <div className="container  mx-auto py-12 flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12">
        <div className="flex-1">
          <img
            src="https://images.theconversation.com/files/256057/original/file-20190129-108364-17hlc1x.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=926&fit=clip"
            alt="Books"
            className="w-full rounded shadow-lg"
          />
        </div>
        <div className="flex-1 text-gray-700">
          <h3 className="text-2xl font-semibold mb-4">
            15 Years and Counting ...
          </h3>
          <p className="mb-4">
            Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis.
            Integer rutrum ante eu lacus. Vestibulum libero nisl, porta vel,
            scelerisque eget, malesuada at, neque. Vivamus eget nibh. Etiam
            cursus leo vel metus. Nulla facilisi. Aenean nec eros.
          </p>
          <p>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Suspendisse sollicitudin velit sed leo. Ut
            pharetra augue nec augue. Nam elit agna, enderit sit amet.
          </p>
        </div>
      </div>

      <div className="bg-sky-800 py-12 text-white my-12">
        <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          <div className="flex items-center">
            <div className="mr-4">
              <IconContext.Provider value={{ size: "50px" }}>
                <RiShieldStarFill />
              </IconContext.Provider>
            </div>
            <div>
              <h3 className="text-4xl font-bold">15</h3>
              <p className="mt-2">Years of Experience</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="mr-4">
              <IconContext.Provider value={{ size: "50px" }}>
                <FaFaceGrinStars />
              </IconContext.Provider>
            </div>
            <div>
              <h3 className="text-4xl font-bold">370</h3>
              <p className="mt-2">Happy Clients</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="mr-4">
              <IconContext.Provider value={{ size: "50px" }}>
                <LuListTodo />
              </IconContext.Provider>
            </div>
            <div>
              <h3 className="text-4xl font-bold">170</h3>
              <p className="mt-2">Orders Daily</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="mr-4">
              <IconContext.Provider value={{ size: "50px" }}>
                <LuShapes />
              </IconContext.Provider>
            </div>
            <div>
              <h3 className="text-4xl font-bold">9264</h3>
              <p className="mt-2">Varieties Of Products</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-center">
          {cardData.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>

      <div className="relative w-full h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://epiccapital.com/wp-content/uploads/2020/08/61-Cost-of-Medical-Care-PIC.jpeg"
            alt="Medical Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 flex flex-wrap flex-col items-center content-start justify-center h-full  py-8 px-4 md:px-16">
          <div className="max-w-2xl text-left">
            <h2 className="text-3xl font-bold mb-6">
              Top 3 Reasons to Choose Us
            </h2>
            <div className="space-y-4">
              <div className="flex items-start justify-center">
              <IconContext.Provider value={{ size: "20px" }}>
              <FaCheckCircle />
              </IconContext.Provider>
                <div>
                  <h3 className="text-lg font-semibold">
                    The Latest Technology
                  </h3>
                  <p className="text-gray-600">
                    Ut tellus dolor, dapibus eget, elementum vel, cursus
                    eleifend, elit.
                  </p>
                </div>
              </div>
              <div className="flex items-start justify-center">
              <IconContext.Provider value={{ size: "20px" }}>
              <FaCheckCircle />
              </IconContext.Provider>
                <div>
                  <h3 className="text-lg font-semibold">Long Battery Life</h3>
                  <p className="text-gray-600">
                    Integer rutrum ante eu lacus. Vestibulum libero nisl, porta
                    vel.
                  </p>
                </div>
              </div>
              <div className="flex items-start justify-center">
              <IconContext.Provider value={{ size: "20px" }}>
              <FaCheckCircle />
              </IconContext.Provider>
                <div>
                  <h3 className="text-lg font-semibold">
                    Durable Construction
                  </h3>
                  <p className="text-gray-600">
                    Etiam cursus leo vel metus. Nulla facilisi. Aenean nec eros.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-20 w-full bg-gray-800 bg-opacity-90 text-white py-8">
          <Slider {...carouselSettings} className="max-w-6xl mx-auto">
            <div className="px-4">
              <p className="text-lg italic mb-4">
                "Fast delivery, pleased receiving sample products along with
                order!"
              </p>
              <div className="flex items-center">
                <img
                  src="https://lh6.googleusercontent.com/proxy/OVqMZxsELT1velBJ_bZz0oKLd71STl1qxzYt-RCI6Gc3Zh54rRKONqpSV4s6R3YWfGu4IPFu-tXB_g5cXDU2PsA6m-RIKcvNWpOMwRKL5OQla8cBQogsxrIKeNRXpkhGixAM"
                  alt="Patrik Smith"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-sm font-semibold">Patrik Smith</h3>
                  <p className="text-xs">Los Angeles, CA</p>
                </div>
              </div>
            </div>
            <div className="px-4">
              <p className="text-lg italic mb-4">
                "Good price and quality but I’m always disappointed with the
                slow delivery."
              </p>
              <div className="flex items-center">
                <img
                  src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg"
                  alt="Antonio Lopez"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-sm font-semibold">Antonio Lopez</h3>
                  <p className="text-xs">Albuquerque, NM</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="py-8 my-48 bg-white">
        <h2 className="text-center text-2xl font-bold mb-6">Our Partners</h2>
        <Slider {...carouselTwoSettings} className="max-w-6xl mx-auto px-4">
          {partners.map((partner) => (
            <div key={partner.id} className="p-4">
              <div className="bg-white p-6 shadow-lg rounded-lg">
                <img
                  src={partner.img}
                  alt={partner.name}
                  className="w-full object-contain h-24 mx-auto"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
