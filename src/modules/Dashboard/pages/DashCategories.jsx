import { useState } from "react";
import {
  Checkbox,
  Table,
  Modal,
  Button,
  Label,
  TextInput,
} from "flowbite-react";
import { MdOutlineModeEdit, MdOutlineDeleteSweep } from "react-icons/md";

export default function DashCategories() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [newImage, setNewImage] = useState(null);

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

  const handleEditClick = (category) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedCategory(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedCategory((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewImage(URL.createObjectURL(file));
    }
  };

  const handleSaveChanges = () => {
    //firebase logic
    console.log("Updated category data:", selectedCategory);
    handleModalClose();
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head className="p-4 text-primary">
            <Table.HeadCell className="p-4 text-primary">
              <Checkbox />
            </Table.HeadCell>
            <Table.HeadCell>Category Id</Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Description</Table.HeadCell>
            <Table.HeadCell>Image</Table.HeadCell>
            <Table.HeadCell>Actions</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {categories.map((category) => (
              <Table.Row
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                key={category.categoryId}
              >
                <Table.Cell className="p-4">
                  <Checkbox />
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {category.categoryId}
                </Table.Cell>
                <Table.Cell>{category.name}</Table.Cell>
                <Table.Cell>{category.description}</Table.Cell>
                <Table.Cell>
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-12 h-12 object-cover"
                  />
                </Table.Cell>
                <Table.Cell className="flex gap-4 items-center">
                  <button
                    className="text-secondary text-xl"
                    onClick={() => handleEditClick(category)}
                  >
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

      {/* Modal for Editing Category */}

      <Modal show={isModalOpen} onClose={handleModalClose}>
        <Modal.Header>Edit Category</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <div>
              <Label className="text-primary" htmlFor="name" value="Name" />
              <TextInput
                className="text-gray-900"
                id="name"
                name="name"
                value={selectedCategory?.name || ""}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label
                className="text-primary"
                htmlFor="description"
                value="Description"
              />
              <TextInput
                className="text-gray-900"
                id="description"
                name="description"
                value={selectedCategory?.description || ""}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label className="text-primary" htmlFor="image" value="Image" />
              <div className="mb-4">
                <img
                  src={newImage || selectedCategory?.image}
                  alt="Current or new image"
                  className="h-24 w-24 object-cover"
                />
              </div>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSaveChanges}>Save Changes</Button>
          <Button color="gray" onClick={handleModalClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
