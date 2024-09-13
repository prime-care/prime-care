import { Link } from "react-router-dom";

const MainTitle = ({ title }) => {
  return (
    <div className="bg-sky-100 mb-12 py-6">
      <div className="container mx-auto">
        <nav className="text-gray-600 text-sm mb-4">
          <Link to="/" className="hover:text-gray-800">
            Home
          </Link>{" "}
          / <span className="text-gray-500">{title}</span>
        </nav>
        <h1 className="text-4xl font-bold text-gray-800">{title}</h1>
      </div>
    </div>
  );
};

export default MainTitle;
