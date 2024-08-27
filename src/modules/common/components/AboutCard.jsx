import React from "react";

const Card = ({ image, title, description }) => {
  return (
    <div className="p-4">
      <img
        src={image}
        alt={title}
        className="rounded-lg mb-6 w-full h-48 object-cover"
      />
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
