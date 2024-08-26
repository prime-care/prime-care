import{ useState } from "react";

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("description");

  const renderContent = () => {
    switch (activeTab) {
      case "description":
        return (
          <div>
            <p>
              Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus
              dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean
              auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis.
              Integer rutrum ante eu lacus. Vestibulum libero nisl, porta vel,
              scelerisque eget, malesuada at, neque. Vivamus eget nibh. Etiam
              cursus leo vel metus. Nulla facilisi. Aenean nec eros.
            </p>
            <ul className="mt-4 list-disc list-inside">
              <li>Suspendisse sollicitudin velit sed leo.</li>
              <li>Ut pharetra augue nec augue.</li>
              <li>
                Nam elit agna, endrerit sit amet, tincidunt ac, viverra sed,
                nulla.
              </li>
              <li>Donec porta diam eu massa.</li>
              <li>Quisque diam lorem, interdum vitae, dapibus ac.</li>
            </ul>
          </div>
        );
      case "additional-info":
        return (
          <div>
            <p>
              Additional information about the product, such as specifications,
              size charts, or ingredient lists, can be displayed here.
            </p>
          </div>
        );
      case "reviews":
        return (
          <div>
            <p>Here are customer reviews for this product:</p>
            <ul className="mt-4 list-disc list-inside">
              <li>Great product! Highly recommend it - John Doe</li>
              <li>Good value for money. - Jane Smith</li>
            </ul>
          </div>
        );
      case "shipping-returns":
        return (
          <div>
            <p>
              Shipping and return information for the product, including
              delivery times, shipping costs, and return policies, can be
              outlined here.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="border-spacing-1 mt-16 p-8 border-2">
      <div className="border-b-2 border-gray-200 mb-4">
        <ul className="flex space-x-8">
          <li>
            <button
              className={`pb-2 text-lg font-semibold ${
                activeTab === "description" ? "border-b-2 border-black" : ""
              }`}
              onClick={() => setActiveTab("description")}
            >
              Description
            </button>
          </li>
          <li>
            <button
              className={`pb-2 text-lg font-semibold ${
                activeTab === "additional-info" ? "border-b-2 border-black" : ""
              }`}
              onClick={() => setActiveTab("additional-info")}
            >
              Additional Information
            </button>
          </li>
          <li>
            <button
              className={`pb-2 text-lg font-semibold ${
                activeTab === "reviews" ? "border-b-2 border-black" : ""
              }`}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews (2)
            </button>
          </li>
          <li>
            <button
              className={`pb-2 text-lg font-semibold ${
                activeTab === "shipping-returns"
                  ? "border-b-2 border-black"
                  : ""
              }`}
              onClick={() => setActiveTab("shipping-returns")}
            >
              Shipping and Returns
            </button>
          </li>
        </ul>
      </div>
      <div className="mt-4">{renderContent()}</div>
    </div>
  );
};

export default ProductTabs;
