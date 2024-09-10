import {
  Modal,
  Button,
  Checkbox,
  Label,
  TextInput,
  Textarea,
  Select,
} from "flowbite-react";

function AddProductModal({ isOpen, onClose }) {
  const categories = [
    { categoryId: "c1", name: "Skincare" },
    { categoryId: "c2", name: "Vitamins" },
    { categoryId: "c3", name: "Haircare" },
    { categoryId: "c4", name: "Fitness" },
    { categoryId: "c5", name: "Beauty" },
    { categoryId: "c6", name: "Diet" },
  ];

  return (
    <Modal show={isOpen} onClose={onClose}>
      <Modal.Header>Add Product</Modal.Header>
      <Modal.Body>
        <div className="space-y-4">
          {/* Product Name */}
          <div>
            <Label
              htmlFor="productName"
              value="Product Name"
              className="text-primary"
            />
            <TextInput id="productName" placeholder="brufen 600 mg" />
          </div>

          {/* Description */}
          <div>
            <Label
              htmlFor="description"
              value="Description"
              className="text-primary"
            />
            <Textarea
              id="description"
              placeholder="Enter product description here..."
            />
          </div>

          {/* Category */}
          <div>
            <Label
              htmlFor="category"
              value="Category"
              className="text-primary"
            />
            <Select id="category">
              {categories.map((category) => (
                <option className="text-gray-500" key={category.categoryId}>
                  {category.name}
                </option>
              ))}
            </Select>
          </div>

          {/* Price and Discount */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="price" value="Price" className="text-primary" />
              <TextInput id="price" type="number" placeholder="366" />
            </div>
            <div>
              <Label
                htmlFor="discount"
                value="Discount"
                className="text-primary"
              />
              <TextInput id="discount" placeholder="50%" />
            </div>
          </div>

          {/* Best Seller */}
          <div className="flex items-center gap-2">
            <Checkbox id="bestSeller" />
            <Label className="text-primary" htmlFor="bestSeller">
              Best Seller
            </Label>
          </div>

          {/* Image Upload */}
          <div className="flex flex-col items-center">
            <Label
              htmlFor="imageUpload"
              value="Product Images"
              className="text-primary mb-2"
            />
            <div className="flex gap-2">
              <label htmlFor="file" className="cursor-pointer">
                <div className="w-16 h-16 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400">
                  <span className="text-xl">+</span>
                </div>
                <input type="file" id="file" className="hidden" />
              </label>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => console.log("Upload Product")}>Upload</Button>
        <Button color="gray" onClick={onClose}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddProductModal;
