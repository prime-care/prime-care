// pages and components imports
import Header from "./modules/common/components/Header";
import Home from "./modules/user/pages/Home";
import MyAccount from "./modules/user/pages/MyAccount";
import Products from "./modules/user/pages/Products";
import Footer from "./modules/common/components/Footer";
import Cart from "./modules/user/pages/Cart";

// react router
import { Route, Routes } from "react-router-dom";
import Dashboard from "./modules/Dashboard/pages/Dashboard";
import DashProducts from "./modules/Dashboard/pages/DashProducts";
import DashCustomers from "./modules/Dashboard/pages/DashCustomers";
import DashCategories from "./modules/Dashboard/pages/DashCategories";
import DashOrdes from "./modules/Dashboard/pages/DashOrdes";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<MyAccount />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="dashproducts" element={<DashProducts />} />
          <Route path="dashcustomers" element={<DashCustomers />} />
          <Route path="dashcategories" element={<DashCategories />} />
          <Route path="dashorders" element={<DashOrdes />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
