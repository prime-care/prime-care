// components
import { TextInput } from "flowbite-react";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

export default function Search({ onSearch, resetPage }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    resetPage();
    onSearch(term);
  };

  return (
    <div className="max-w-md my-2">
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
