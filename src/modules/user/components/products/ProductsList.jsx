// icons
import { IoCartOutline } from "react-icons/io5";

const products = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/287237/pexels-photo-287237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Dental Chair",
    price: "1,260,000",
    currency: "EGP",
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Light Microscopy",
    price: "18,000",
    currency: "EGP",
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/5998514/pexels-photo-5998514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Vitamine D3",
    price: "1,200",
    currency: "EGP",
  },
  {
    id: 4,
    image:
      "https://images.pexels.com/photos/2565761/pexels-photo-2565761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Hemp Oil",
    price: "370",
    currency: "EGP",
  },
  {
    id: 5,
    image:
      "https://images.pexels.com/photos/7055286/pexels-photo-7055286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Toothbrush",
    price: "36",
    currency: "EGP",
  },
];

// components
import PaginationComponent from "../../../common/components/Pagination";

function addToCart(id) {
  console.log(id);
}

const ProductsList = () => {
  return (
    <mian className="products-list rounded-md">
      <div className="products gap-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="single-product p-3 border border-gray-300 rounded-md flex flex-col gap-1">
            <div className="product-image relative h-52">
              <img
                src={product.image}
                alt={product.name}
                title={product.name}
                className="rounded-md h-full w-full object-cover"
              />

              <div
                onClick={() => {
                  addToCart(product.id);
                }}
                className="add-to-cart bg-primary absolute p-3 w-1/4 flex justify-center items-center top-0 rounded-r-md h-full cursor-pointer">
                <IoCartOutline className="text-2xl text-white" />
              </div>
            </div>
            <h3 className="text-base font-medium text-gray-700">
              {product.name}
            </h3>
            <span className="text-base font-bold text-primary">
              {product.price}{" "}
              <span className="text-sm text-gray-500">{product.currency}</span>
            </span>
          </div>
        ))}
      </div>

      <PaginationComponent />
    </mian>
  );
};

export default ProductsList;
