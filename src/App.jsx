// pages and components imports
import ScrollToTop from "./modules/common/components/ScrollToTop";
import Home from "./modules/user/pages/Home";
import MyAccount from "./modules/user/pages/MyAccount";
import Products from "./modules/user/pages/Products";
import ProductDetails from "./modules/user/pages/ProductDetails";
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
import { AuthLayout, DashboardLayout, PublicLayout } from "./layouts";

// react router
import { Route, Routes } from "react-router-dom";
import Profile from "./modules/user/components/my-account/Profile";
import WishList from "./modules/user/components/my-account/WishList";
import Orders from "./modules/user/components/my-account/Orders";
import HelpCenter from "./modules/user/pages/HelpCenter";
import ContactUs from "./modules/user/pages/ContactUs";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/profile" element={<MyAccount />}>
            <Route path="info" element={<Profile />} />
            <Route path="orders" element={<Orders />} />
            <Route path="wishlist" element={<WishList />} />
          </Route>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Route>

        {/* Auth Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/signup" element={<Signup />} />
        </Route>

        {/* Dashboard Routes */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="products" element={<DashProducts />} />
            <Route path="customers" element={<DashCustomers />} />
            <Route path="categories" element={<DashCategories />} />
            <Route path="orders" element={<DashOrdes />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
