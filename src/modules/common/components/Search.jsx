// components
import { TextInput } from "flowbite-react";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

export default function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <div className="max-w-md">
      <TextInput
        type="text"
        icon={CiSearch}
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
}
