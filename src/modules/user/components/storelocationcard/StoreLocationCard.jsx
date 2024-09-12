import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const StoreLocationCard = ({ store }) => {
  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg flex flex-col md:flex-row">
      <img
        src={store.image}
        alt={`${store.name} Image`}
        className="lg:w-48 md:w-32 h-32 md:h-48 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
      />
      <div className=" truncate ">
        <h2 className="text-lg md:text-xl font-bold mb-2 truncate">
          {store.name}
        </h2>
        <div className="space-y-2 text-sm  md:text-base">
          <div className="flex items-start   space-x-2">
            <FaMapMarkerAlt className="text-teal-500" />
            <p className="break-words">{store.address}</p>
          </div>
          <div className="flex items-start space-x-2">
            <FaPhoneAlt className="text-teal-500" />
            <p className="break-words">{store.phone}</p>
          </div>
          <div className="flex items-start space-x-2">
            <FaEnvelope className="text-teal-500" />
            <p className="break-words">{store.email}</p>
          </div>
          <div className="flex items-start space-x-2">
            <FaClock className="text-teal-500" />
            <p className="break-words">{store.hours}</p>
          </div>
        </div>
        <a
          href={store.directionsUrl}
          className="text-teal-500 mt-4 inline-block"
        >
          Get Directions
        </a>
      </div>
    </div>
  );
};

export default StoreLocationCard;
