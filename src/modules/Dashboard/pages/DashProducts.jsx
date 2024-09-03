import { Checkbox, Table } from "flowbite-react";
import { MdOutlineModeEdit, MdOutlineDeleteSweep } from "react-icons/md";
import { useState } from "react";
import AddProductModal from "../components/AddProductModal";

export default function DashProducts() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const products = [
    {
      productId: "p1",
      name: "Face Cream",
      description: "A moisturizing face cream.",
      price: 50,
      categoryId: "c1",
      categoryName: "Skincare",
      image: "face_cream_image_url",
      bestSeller: true,
    },
    {
      productId: "p2",
      name: "Vitamin C",
      description: "Essential Vitamin C supplement.",
      price: 20,
      categoryId: "c2",
      categoryName: "Vitamins",
      image: "vitamin_c_image_url",
      bestSeller: false,
    },
    {
      productId: "p3",
      name: "Hair Oil",
      description: "Nourishing hair oil.",
      price: 30,
      categoryId: "c3",
      categoryName: "Haircare",
      image: "hair_oil_image_url",
      bestSeller: true,
    },
    {
      productId: "p4",
      name: "Protein Powder",
      description: "High-quality protein powder.",
      price: 40,
      categoryId: "c4",
      categoryName: "Fitness",
      image: "protein_powder_image_url",
      bestSeller: false,
    },
    {
      productId: "p5",
      name: "Lip Balm",
      description: "Hydrating lip balm.",
      price: 15,
      categoryId: "c5",
      categoryName: "Beauty",
      image: "lip_balm_image_url",
      bestSeller: true,
    },
    {
      productId: "p6",
      name: "Weight Loss Tea",
      description: "Effective weight loss tea.",
      price: 25,
      categoryId: "c6",
      categoryName: "Diet",
      image: "weight_loss_tea_image_url",
      bestSeller: false,
    },
    {
      productId: "p7",
      name: "Eye Cream",
      description: "Cream for reducing dark circles.",
      price: 35,
      categoryId: "c1",
      categoryName: "Skincare",
      image: "eye_cream_image_url",
      bestSeller: true,
    },
    {
      productId: "p8",
      name: "Omega-3",
      description: "Omega-3 fatty acids supplement.",
      price: 22,
      categoryId: "c2",
      categoryName: "Vitamins",
      image: "omega_3_image_url",
      bestSeller: false,
    },
    {
      productId: "p9",
      name: "Shampoo",
      description: "Gentle shampoo for all hair types.",
      price: 18,
      categoryId: "c3",
      categoryName: "Haircare",
      image: "shampoo_image_url",
      bestSeller: true,
    },
    {
      productId: "p10",
      name: "Yoga Mat",
      description: "Comfortable yoga mat.",
      price: 28,
      categoryId: "c4",
      categoryName: "Fitness",
      image: "yoga_mat_image_url",
      bestSeller: false,
    },
    {
      productId: "p11",
      name: "Moisturizer",
      description: "Hydrating moisturizer for face and body.",
      price: 40,
      categoryId: "c1",
      categoryName: "Skincare",
      image: "moisturizer_image_url",
      bestSeller: true,
    },
    {
      productId: "p12",
      name: "Multivitamins",
      description: "Daily multivitamins for overall health.",
      price: 35,
      categoryId: "c2",
      categoryName: "Vitamins",
      image: "multivitamins_image_url",
      bestSeller: false,
    },
    {
      productId: "p13",
      name: "Hair Mask",
      description: "Deep conditioning hair mask.",
      price: 45,
      categoryId: "c3",
      categoryName: "Haircare",
      image: "hair_mask_image_url",
      bestSeller: true,
    },
    {
      productId: "p14",
      name: "Resistance Bands",
      description: "Set of resistance bands for workout.",
      price: 30,
      categoryId: "c4",
      categoryName: "Fitness",
      image: "resistance_bands_image_url",
      bestSeller: false,
    },
    {
      productId: "p15",
      name: "Nail Polish",
      description: "Long-lasting nail polish.",
      price: 20,
      categoryId: "c5",
      categoryName: "Beauty",
      image: "nail_polish_image_url",
      bestSeller: true,
    },
    {
      productId: "p16",
      name: "Detox Drink",
      description: "Detox drink for cleansing.",
      price: 25,
      categoryId: "c6",
      categoryName: "Diet",
      image: "detox_drink_image_url",
      bestSeller: false,
    },
  ];
  return (
    <div>
      <div className="overflow-x-auto">
        <button
          className="bg-primary mb-3 text-white px-4 py-2 rounded-lg hover:bg-secondary transition"
          onClick={openModal}>
          Add Product
        </button>
        <AddProductModal isOpen={isModalOpen} onClose={closeModal} />

        <Table hoverable>
          <Table.Head className="p-4 text-primary">
            <Table.HeadCell className="p-4">
              <Checkbox />
            </Table.HeadCell>
            <Table.HeadCell>Product Id</Table.HeadCell>
            <Table.HeadCell>name</Table.HeadCell>
            <Table.HeadCell>description</Table.HeadCell>
            <Table.HeadCell>image</Table.HeadCell>
            <Table.HeadCell>category name</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>bestSeller</Table.HeadCell>
            <Table.HeadCell>actions</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {products.map((product) => (
              <Table.Row
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                key={product.productId}>
                <Table.Cell className="p-4">
                  <Checkbox />
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {product.productId}
                </Table.Cell>
                <Table.Cell>{product.name}</Table.Cell>
                <Table.Cell>{product.description}</Table.Cell>
                <Table.Cell>
                  <img src={product.image}></img>
                </Table.Cell>
                <Table.Cell>{product.categoryName}</Table.Cell>
                <Table.Cell>{product.price} LE</Table.Cell>
                <Table.Cell>
                  {product.bestSeller ? "true" : "false"}
                </Table.Cell>{" "}
                <Table.Cell className="flex gap-4 items-center ">
                  <button className="text-secondary text-xl">
                    <MdOutlineModeEdit />
                  </button>
                  <button className="text-pink-700 text-xl">
                    <MdOutlineDeleteSweep />
                  </button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}
