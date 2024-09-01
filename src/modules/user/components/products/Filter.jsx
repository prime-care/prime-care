// components
import { Accordion } from "flowbite-react";
import { Checkbox, Radio, Label } from "flowbite-react";
// icons
import { FaFilter } from "react-icons/fa";

// categories
import { categories } from "../../../../constants/index";
console.log(categories);

export default function Filter() {
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
              {categories.map((item) => (
                <div key={item.id} className="flex items-center gap-2">
                  <Checkbox id="accept" />
                  <Label htmlFor="accept" className="flex">
                    {item.text}
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
                <Radio id="htl" name="price" value="htl" defaultChecked />
                <Label htmlFor="htl">Hightest to lowest</Label>
              </div>

              <div className="flex items-center gap-2">
                <Radio id="lth" name="price" value="lth" defaultChecked />
                <Label htmlFor="lth">Lowest to highest</Label>
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </aside>
  );
}
