// pages and components imports
import Header from "./modules/common/components/Header";
import Home from "./modules/user/pages/Home";
import Products from "./modules/user/pages/Products";

// react router
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
};

export default App;
