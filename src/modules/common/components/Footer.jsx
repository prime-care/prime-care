import { footerLinks, socialMedia } from "../../../constants";
import logo from "../../../../public/images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => (
  <section
    className={`bg-[#00040f] text-white flex justify-center items-center sm:py-16 py-6 flex-col`}
  >
    <div
      className={`container flex justify-center items-start md:flex-row flex-col mb-8 w-full`}
    >
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src={logo}
          alt="prime care"
          className="w-[266px] h-[72.14px] object-contain"
        />
        <p
          className={`font-normal text-dimWhite text-[18px] leading-[30.8px] mt-4 max-w-[312px]`}
        >
          Find Your Path to Better Health with{" "}
          <span className=" font-bold text-secondary">Prime Care.</span>
        </p>
      </div>

      <div className=" flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div
            key={footerlink.title}
            className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
          >
            <h4 className=" font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={` text-gray-400 font-normal text-[16px] leading-[24px] text-dimWhite duration-200 hover:text-white cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  <Link to={link.link}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="container w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-normal text-center text-[18px] leading-[27px] text-gray-300">
        Copyright Ⓒ 2024 Prime Care. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
