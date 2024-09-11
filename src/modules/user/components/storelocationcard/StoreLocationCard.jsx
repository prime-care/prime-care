// StoreLocationCard.jsx
import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const StoreLocationCard = ({ store }) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start bg-white p-6 rounded-lg shadow-lg">
      <img
        src={store.image}
        alt={`${store.name} Image`}
        className="w-48 h-48 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
      />
      <div className="flex-1">
        <h2 className="text-xl font-bold mb-2">{store.name}</h2>
        <div className="space-y-2">
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-teal-500 mr-2" />
            <p>{store.address}</p>
          </div>
          <div className="flex items-center">
            <FaPhoneAlt className="text-teal-500 mr-2" />
            <p>{store.phone}</p>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="text-teal-500 mr-2" />
            <p>{store.email}</p>
          </div>
          <div className="flex items-center">
            <FaClock className="text-teal-500 mr-2" />
            <p>{store.hours}</p>
          </div>
        </div>
        <a href={store.directionsUrl} className="text-teal-500 mt-4 inline-block">
          Get Directions
        </a>
      </div>
    </div>
  );
};

export default StoreLocationCard;
