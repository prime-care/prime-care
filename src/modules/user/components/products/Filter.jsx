// components
import { or } from "firebase/firestore";
import { Accordion } from "flowbite-react";
import { Checkbox, Radio, Label } from "flowbite-react";
import { useState } from "react";
import { Rating } from "flowbite-react";
// icons
import { FaFilter } from "react-icons/fa";

export default function Filter({ categories, onFilterChange }) {
  const [selectedCategories, setSelectedCategories] = useState([]); // ex: ["c1","c2"]
  const [sortOrder, setSortOrder] = useState("");
  const [rating, setRating] = useState(0);

  const updateFilters = (newFilters) => {
    onFilterChange(newFilters);
  };

  const handleCategoryChange = (event) => {
    const category = event.target.value; // ex: c1 or c5

    let updatedCategories = [...selectedCategories];

    if (updatedCategories.includes(category)) {
      updatedCategories = updatedCategories.filter((c) => c !== category); // ex: if (c1 exist in the arr) {remove it} else {push it}
    } else {
      updatedCategories.push(category);
    }
    setSelectedCategories(updatedCategories);
    updateFilters({
      categories: updatedCategories,
      sortOrder,
      rating,
    });
  };

  const handleSortOrderChange = (event) => {
    const order = event.target.value;
    console.log(order);

    setSortOrder(order);
    updateFilters({
      categories: selectedCategories,
      sortOrder: order,
      rating,
    });
  };

  const handleRatingChange = (event) => {
    const ratingValue = Number(event.target.value);

    setRating(ratingValue);
    updateFilters({
      categories: selectedCategories,
      sortOrder,
      rating: ratingValue,
    });
  };

  return (
    <aside className="filter rounded-md">
      <div className="head p-3 mb-1 flex justify-start items-center gap-3">
        <FaFilter />
        <span className="text-xl font-semibold text-gray-900">Filter</span>
      </div>

      <Accordion>
        <Accordion.Panel>
          <Accordion.Title>Category</Accordion.Title>
          <Accordion.Content>
            <div className="flex flex-col gap-4" id="checkbox">
              {categories.map((category) => (
                <div
                  key={category.categoryId}
                  className="flex items-center gap-2"
                >
                  <Checkbox
                    id="accept"
                    onChange={handleCategoryChange}
                    value={category.name}
                  />
                  <Label htmlFor="accept" className="flex">
                    {category.name}
                  </Label>
                </div>
              ))}
            </div>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Price</Accordion.Title>
          <Accordion.Content>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Radio
                  id="htl"
                  name="price"
                  value="desc"
                  checked={sortOrder === "desc"}
                  onChange={handleSortOrderChange}
                />
                <Label htmlFor="htl">Highest to lowest</Label>
              </div>

              <div className="flex items-center gap-2">
                <Radio
                  id="lth"
                  name="price"
                  value="asc"
                  checked={sortOrder === "asc"}
                  onChange={handleSortOrderChange}
                />
                <Label htmlFor="lth">Lowest to highest</Label>
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Rate</Accordion.Title>
          <Accordion.Content>
            <div className="flex flex-col gap-3">
              {[1, 2, 3, 4, 5].map((rating) => (
                <div key={rating} className="flex items-center gap-2">
                  <Radio
                    id={`${rating}star`}
                    name="rating"
                    value={rating}
                    onChange={handleRatingChange}
                  />
                  <Label htmlFor={`${rating}star`}>
                    <Rating>
                      {Array.from({ length: 5 }, (_, i) => (
                        <Rating.Star key={i} filled={i < rating} />
                      ))}
                    </Rating>
                  </Label>
                </div>
              ))}
            </div>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </aside>
  );
}
