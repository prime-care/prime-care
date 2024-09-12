import React, { useState } from "react";
import { IconContext } from "react-icons";
import { RiCustomerService2Line } from "react-icons/ri";
import { MdOutlineMarkEmailRead } from "react-icons/md";

const HelpCenter = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const faqData = [
    {
      question: "Can I know whether your pharmacy is licensed?",
      answer:
        "Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna.",
    },
    {
      question: "What are your hours of operations?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "What is your office address and phone number?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "How do I contact Pharmacists?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "Do you accept my Insurance Plans?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "What is Refund and Return Policy?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "Is it safe to use my credit/debit card at your website?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question:
        "Why is the image shown on the website different from the item I received?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
            / Frequently Asked Questions
          </nav>
          <h1 className="text-4xl font-bold text-gray-800">
            Frequently Asked Questions
          </h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-4">
          {/* Category Questions */}
          <div className="col-span-1 md:col-span-3 lg:col-span-3 bg-gray-100 p-5 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Categories</h2>
            <ul className="space-y-4 text-blue-500">
              <li>General Questions</li>
              <li>Medicine Questions</li>
              <li>Ordering Questions</li>
              <li>Delivery Questions</li>
            </ul>
          </div>

          {/* FAQ Section */}
          <div className="col-span-1 md:col-span-3 lg:col-span-6 p-5">
            {faqData.map((faq, i) => (
              <div key={i} className="border-b border-gray-300 mb-4">
                <button
                  className="w-full text-left py-2 text-primary font-semibold focus:outline-none"
                  onClick={() => toggle(i)}
                >
                  {faq.question}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    selected === i ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  <p className="py-2">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Customer Care Section */}
          <div className="col-span-1 md:col-span-3 lg:col-span-3 bg-gray-100 p-5 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Customer Care</h2>
            <ul className="space-y-4 text-blue-500">
              <li>My Account</li>
              <li>My Orders</li>
              <li>Track Your Order</li>
              <li>Wishlist</li>
              <li>FAQs</li>
              <li>Refunds/Return Policy</li>
            </ul>

            <div className="mt-6">
              <h3 className="font-semibold">Still Need Help?</h3>
              <div className="flex flex-col sm:flex-row gap-y-4 sm:gap-x-3">
                <IconContext.Provider value={{ size: "50px" }}>
                  <RiCustomerService2Line />
                </IconContext.Provider>
                <div>
                  <p>24/7 Customer Service:</p>
                  <p className="font-bold text-lg">+1 800 559 6580</p>
                  <p className="font-bold text-lg">+1 800 559 6588</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-y-4 sm:gap-x-3 mt-4">
                <IconContext.Provider value={{ size: "50px" }}>
                  <MdOutlineMarkEmailRead />
                </IconContext.Provider>
                <div>
                  <p className="mt-4">Email Us:</p>
                  <a
                    href="mailto:info@companyname.com"
                    className="text-blue-500 underline"
                  >
                    info@companyname.com
                  </a>
                </div>
              </div>
            </div>

            <button className="bg-teal-500 text-white py-2 px-4 mt-6 rounded-lg w-full">
              Submit an Enquiry
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HelpCenter;
