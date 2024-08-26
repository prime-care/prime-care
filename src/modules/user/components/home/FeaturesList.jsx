import React from "react";

import { features } from "../../../../constants";

const FeaturesList = () => {
  return (
    <section className="bg-[#f6f8f8] px-11 py-8 mb-24">
      <div className="container flex justify-between gap-4">
        {features.map((feature, index) => (
          <div key={index} className="flex gap-4 items-center">
            <div className="icon-wrapper">
              <img
                src={feature.icon}
                className="w-12 h-12"
                alt={feature.title}
              />
            </div>
            <div>
              <p className="mt-2 text-base font-semibold">{feature.title}</p>
              <p className="mt-2 text-sm text-gray-500">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesList;
