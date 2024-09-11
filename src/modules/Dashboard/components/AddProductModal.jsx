import React, { useState, useEffect } from "react";
import {
  Modal,
  Button,
  Checkbox,
  Label,
  TextInput,
  Textarea,
  Select,
} from "flowbite-react";
import { v4 as uuidv4 } from "uuid";
import { uploadImage } from "../../../utils/uploadImage";

function AddProductModal({
  onClose,
  categories,
  onSubmit,
  editMode,
  initialData,
}) {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [isBestSeller, setIsBestSeller] = useState(false);

  useEffect(() => {
    if (editMode && initialData) {
      setProductName(initialData.name || "");
      setProductDescription(initialData.description || "");
      setPrice(initialData.price || "");
      setCategory(initialData.categoryName || "");
      setIsBestSeller(initialData.bestSeller || false);
      setImagePreview(initialData.image || "");
    }
  }, [editMode, initialData]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let imageUrl = imagePreview;

    if (image) {
      imageUrl = await uploadImage(image);
    }

    const productData = {
      name: productName,
      description: productDescription,
      price: parseFloat(price),
      categoryName: category,
      image: imageUrl,
      bestSeller: isBestSeller,
    };

    if (editMode) {
      onSubmit({ ...productData, productId: initialData.productId });
    } else {
      onSubmit({ ...productData, productId: uuidv4() });
    }
  };

  return (
    <form className="space-y-4">
      <Modal show={true} onClose={onClose}>
        <Modal.Header>{editMode ? "Edit" : "Add"} Product</Modal.Header>
        <Modal.Body>
          {/* Product Name */}
          <div>
            <Label
              htmlFor="productName"
              value="Product Name"
              className="text-primary"
            />
            <TextInput
              id="productName"
              placeholder="brufen 600 mg"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
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
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
            />
          </div>

          {/* Category */}
          <div>
            <Label
              htmlFor="category"
              value="Category"
              className="text-primary"
            />
            <Select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select a Category</option>
              {categories.map((cat) => (
                <option key={cat.name} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </Select>
          </div>

          {/* Price and Discount */}

          <div>
            <Label htmlFor="price" value="Price" className="text-primary" />
            <TextInput
              id="price"
              type="number"
              placeholder="366"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          {/* Best Seller */}
          <div className="flex items-center gap-2">
            <Checkbox
              id="bestSeller"
              checked={isBestSeller}
              onChange={(e) => setIsBestSeller(e.target.checked)}
            />
            <Label className="text-primary" htmlFor="bestSeller">
              Best Seller
            </Label>
          </div>

          {/* Image Upload */}
          <div className="flex flex-col items-center">
            <Label
              htmlFor="imageUpload"
              value="Product Image"
              className="text-primary mb-2"
            />
            <div className="flex gap-2">
              <label htmlFor="file" className="cursor-pointer">
                <div className="w-16 h-16 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400">
                  <span className="text-xl">+</span>
                </div>
                <input
                  type="file"
                  id="file"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
            </div>
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="ml-4 w-32 h-32 object-cover rounded-md"
              />
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSubmit}>
            {editMode ? "Update Product" : "Add Product"}
          </Button>
          <Button color="gray" onClick={onClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </form>
  );
}

export default AddProductModal;
