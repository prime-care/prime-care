// pages and components imports
import Header from "./modules/common/components/Header";
import Home from "./modules/user/pages/Home";
import MyAccount from "./modules/user/pages/MyAccount";
import Products from "./modules/user/pages/Products";
import Footer from "./modules/common/components/Footer";
import Cart from "./modules/user/pages/Cart";

// react router
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
<<<<<<< HEAD
        <Route path="/cart" element={<Cart />} />
=======
        <Route path="/my-account" element={<MyAccount />} />
>>>>>>> aeae048526aa8d59a2e3e96167e44bc37085eaeb
      </Routes>
      <Footer />
    </>
  );
};

export default App;
