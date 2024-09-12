import React from "react";
import ContactItem from "../components/contactus/ContactItem";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import StoreLocationCard from "../components/storelocationcard/StoreLocationCard";

const ContactUs = () => {
  const stores = [
    {
      name: "Iekerna Mill",
      address: "9863 - 9867 Mill Road, Cambridge, MG09 99HT",
      phone: "+1 800 603 6035, +1 800 889 9898",
      email: "info@companyname.com",
      hours: "Mon - Fri: 8am - 11pm, Sat - Sun: 8am - 12pm",
      directionsUrl: "#",
      image:
        "https://images.squarespace-cdn.com/content/v1/5efa0fe78713d718e5a23e0d/1607942729498-WN51MEZMIPW4R5NEWCFI/pharma-1600-px.jpg",
    },
    {
      name: "Iekerna Vincent",
      address: "9863 - 9867 Mill Road, Cambridge, MG09 99HT",
      phone: "+1 800 603 6035, +1 800 889 9898",
      email: "info@companyname.com",
      hours: "Mon - Fri: 8am - 11pm, Sat - Sun: 8am - 12pm",
      directionsUrl: "#",
      image:
        "https://www.summahealth.org/-/media/project/summahealth/website/page-content/pharmacy/beyondprescriptions-1098323548.jpg?la=en&h=600&w=800&hash=FB569AD547858A1F45E02CFAC185DF2A",
    },
  ];

  return (
    <>
      <div className="bg-sky-100 mb-12 py-6">
        <div className="container mx-auto px-4">
          <nav className="text-gray-600 text-sm mb-4">
            <a href="/" className="hover:text-gray-800">
              Home
            </a>{" "}
            / Contact Us
          </nav>
          <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Contact Information</h3>
          <p className="mb-6 text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            fugiat ipsam ex soluta asperiores.
          </p>
          <div className="space-y-4">
            <ContactItem
              Icon={FaMapMarkerAlt}
              label="Our Address:"
              content="9863 - 9867 Mill Road, Cambridge, MG09 99HT"
              iconClassName="text-teal-500"
            />
            <ContactItem
              Icon={FaPhoneAlt}
              label="Call Us:"
              content="+1 800 559 6580, +1 800 559 6588"
              iconClassName="text-teal-500"
            />
            <ContactItem
              Icon={FaEnvelope}
              label="Email Us:"
              content="info@companyname.com"
              iconClassName="text-teal-500"
            />
            <ContactItem
              Icon={FaClock}
              label="Opening Hours:"
              content="Mon - Fri: 8am - 11pm, Sat - Sun: 8am - 12pm"
              iconClassName="text-teal-500"
            />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Have a Question?</h3>
          <p className="mb-6 text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            fugiat ipsam ex soluta asperiores.
          </p>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                id="Name"
                className="w-full border rounded-lg px-4 py-2 focus:ring focus:outline-none"
                placeholder="Name"
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                className="w-full border rounded-lg px-4 py-2 focus:ring focus:outline-none"
                placeholder="Email Address"
              />
            </div>
            <div>
              <input
                type="number"
                id="number"
                className="w-full border rounded-lg px-4 py-2 focus:ring focus:outline-none"
                placeholder="Phone (optional)"
              />
            </div>
            <div>
              <textarea
                id="message"
                className="w-full border rounded-lg px-4 py-2 focus:ring focus:outline-none"
                placeholder="Your Message"
                rows="4"
              ></textarea>
            </div>
            <button className="bg-secondary text-white rounded-lg py-3 font-semibold w-full">
              Submit
            </button>
          </form>
        </div>
      </div>

      <section className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-semibold mb-8">Store Locations</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stores.map((store, index) => (
            <StoreLocationCard key={index} store={store} />
          ))}
        </div>
      </section>
    </>
  );
};

export default ContactUs;
