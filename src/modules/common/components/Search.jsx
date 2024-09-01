// components
import { TextInput } from "flowbite-react";
import { CiSearch } from "react-icons/ci";

export default function Search() {
  return (
    <div className="max-w-md">
      <TextInput type="text" icon={CiSearch} placeholder="Search..." required />
    </div>
  );
}
