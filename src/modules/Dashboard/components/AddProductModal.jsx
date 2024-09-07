import { Checkbox, Label } from "flowbite-react";

function AddProductModal({ isOpen, onClose }) {

  const categories = [
    {
      categoryId: "c1",
      name: "Skincare",
      description: "Products for healthy and glowing skin.",
      image: "skincare_image_url",
    },
    {
      categoryId: "c2",
      name: "Vitamins",
      description: "Essential vitamins and supplements.",
      image: "vitamins_image_url",
    },
    {
      categoryId: "c3",
      name: "Haircare",
      description: "Products for healthy and shiny hair.",
      image: "haircare_image_url",
    },
    {
      categoryId: "c4",
      name: "Fitness",
      description: "Fitness supplements and equipment.",
      image: "fitness_image_url",
    },
    {
      categoryId: "c5",
      name: "Beauty",
      description: "Beauty and personal care products.",
      image: "beauty_image_url",
    },
    {
      categoryId: "c6",
      name: "Diet",
      description: "Diet and weight loss products.",
      image: "diet_image_url",
    },
  ];
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-3xl h-full lg:h-auto lg:max-h-[90vh] p-4 lg:p-8 rounded-lg shadow-lg relative overflow-y-auto">
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>

        <div className="flex flex-col lg:flex-row">
          {/* Image Slider Section */}
          <div className="w-full lg:w-1/3 lg:pr-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Add Product
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              E-cart / Ecommerce / Product
            </p>
            <div className="flex flex-col items-center">
              <img
                src="\images\cat-4.png"
                alt="Main Product"
                className="rounded-lg mb-4 w-full max-w-xs"
              />
              <div className="flex flex-col space-y-2 items-center">
                <img
                  src="\images\cat-4.png"
                  alt="Product Thumbnail 1"
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <img
                  src="\images\cat-3.png"
                  alt="Product Thumbnail 2"
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <img
                  src="\images\cat-1.png"
                  alt="Product Thumbnail 3"
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <label htmlFor="file">
                      <button className="w-16 h-16 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400">
                        <span className="text-xl">+</span>
                      </button>
                      <button className="absolute bottom-0 right-0 bg-secondary text-white p-1 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L3.5 13.672V16.5a.5.5 0 00.5.5h2.828l11.086-11.086a2 2 0 000-2.828z" />
                          <path
                            fillRule="evenodd"
                            d="M4 16v-1.828l11.086-11.086a1 1 0 111.414 1.414L5.414 16H4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </label>

                    <input type="file" id="file" className="hidden" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="w-full lg:w-2/3 mt-6 lg:mt-0">
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-1">
                Product Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none ring-0 focus:border-secondary"
                placeholder="brufen 600 mg"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-1">
                Description
              </label>
              <textarea
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none ring-0 focus:border-secondary h-32"
                placeholder="Enter product description here..."
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-1">
                Category
              </label>
              <select className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none ring-0 focus:border-secondary">
                {categories.map((category) => (
                  <option key={category.categoryId}>{ category.name}</option>
                ))}
                {/* <option>Anti-inflammatory</option>
                <option>Antibiotic</option>
                <option>Analgesics</option> */}
              </select>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 mb-6">
              <div className="flex-1">
                <label className="block text-gray-700 font-medium mb-1">
                  Price
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none ring-0 focus:border-secondary"
                  placeholder="366"
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 font-medium mb-1">
                  Discount
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none ring-0 focus:border-secondary"
                  placeholder="50%"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <Checkbox className="text-secondary" id="remember" />
              <Label htmlFor="remember">Best Seller</Label>
            </div>
            <div className="flex mt-4 gap-4">
              <button className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-primary transition">
                Upload
              </button>
              <button
                onClick={onClose}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProductModal;
