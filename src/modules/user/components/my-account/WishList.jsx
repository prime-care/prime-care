// components
import { Table } from "flowbite-react";
import { Button } from "flowbite-react";
import { IoIosHeartDislike } from "react-icons/io";

const WishList = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
    },
  ];

  const removeFromWishlist = (id) => {
    console.log(id);
  };

  return (
    <div className="overflow-x-auto">
      <div className="head">
        <h1 className="mb-6 text-2xl font-medium text-gray-700">Wishlist</h1>
      </div>

      <Table>
        <Table.Head>
          <Table.HeadCell>Product</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell></Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {products.map((product) => (
            <Table.Row
              key={product.id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {product.name}
              </Table.Cell>
              <Table.Cell>
                {product.price + " "}
                <span>EGP</span>
              </Table.Cell>
              <Table.Cell>
                <div className="flex gap-3">
                  <Button
                    color="failure"
                    onClick={() => removeFromWishlist(product.id)}>
                    <IoIosHeartDislike />
                  </Button>
                </div>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default WishList;
