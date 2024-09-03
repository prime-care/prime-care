// pages and components imports
import Header from "./modules/common/components/Header";
import Home from "./modules/user/pages/Home";
import MyAccount from "./modules/user/pages/MyAccount";
import Products from "./modules/user/pages/Products";
import ProductPage from "./modules/user/pages/ProductPage";
import Footer from "./modules/common/components/Footer";
import Cart from "./modules/user/pages/Cart";
import Dashboard from "./modules/Dashboard/pages/Dashboard";
import DashProducts from "./modules/Dashboard/pages/DashProducts";
import DashCustomers from "./modules/Dashboard/pages/DashCustomers";
import DashCategories from "./modules/Dashboard/pages/DashCategories";
import DashOrdes from "./modules/Dashboard/pages/DashOrdes";
import AboutUs from "./modules/user/pages/AboutUs";
import LoginPage from "./modules/auth/pages/Login";
import Signup from "./modules/auth/pages/Signup";

// react router
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<MyAccount />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="dashproducts" element={<DashProducts />} />
          <Route path="dashcustomers" element={<DashCustomers />} />
          <Route path="dashcategories" element={<DashCategories />} />
          <Route path="dashorders" element={<DashOrdes />} />
        </Route>
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
