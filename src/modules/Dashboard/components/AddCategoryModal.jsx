import React, { useState } from "react";
import { uploadImage } from "../../../utils/uploadImage";
import { v4 as uuidv4 } from "uuid";
import { Modal, Button, Label, TextInput } from "flowbite-react";

export default function AddCategoryModal({ onClose, onSubmit }) {
  const [categoryName, setCategoryName] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let imageUrl = "";

    if (image) {
      imageUrl = await uploadImage(image);
    }

    const categoryData = {
      categoryId: uuidv4(),
      name: categoryName,
      description: categoryDescription,
      image: imageUrl,
    };
    onSubmit(categoryData);
  };

  return (
    <form>
      <Modal show={true} onClose={onClose}>
        <Modal.Header>Add Category</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <div>
              <Label className="text-primary" htmlFor="name" value="Name" />
              <TextInput
                className="text-gray-900"
                id="name"
                name="name"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
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
                value={categoryDescription}
                onChange={(e) => setCategoryDescription(e.target.value)}
              />
            </div>
            <div>
              <Label className="text-primary" htmlFor="image" value="Image" />
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
              />
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="ml-4 w-32 h-32 object-cover rounded-md"
                />
              )}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSubmit}>Add Category</Button>
          <Button color="gray" onClick={onClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </form>
  );
}
