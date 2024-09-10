// pages and components imports
import Header from "./modules/common/components/Header";
import ScrollToTop from "./modules/common/components/ScrollToTop";
import Home from "./modules/user/pages/Home";
import MyAccount from "./modules/user/pages/MyAccount";
import Products from "./modules/user/pages/Products";
import ProductDetails from "./modules/user/pages/ProductDetails";
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
import Checkout from "./modules/user/components/checkout/Checkout";

// react router
import { Route, Routes } from "react-router-dom";
import Profile from "./modules/user/components/my-account/Profile";
import WishList from "./modules/user/components/my-account/WishList";
import OrderHistory from "./modules/user/components/my-account/OrderHistory";
import HelpCenter from "./modules/user/pages/HelpCenter";

const App = () => {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<MyAccount />}>
          <Route path="info" element={<Profile />} />
          <Route path="orders" element={<OrderHistory />} />
          <Route path="wishlist" element={<WishList />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="products" element={<DashProducts />} />
          <Route path="customers" element={<DashCustomers />} />
          <Route path="categories" element={<DashCategories />} />
          <Route path="orders" element={<DashOrdes />} />
        </Route>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
