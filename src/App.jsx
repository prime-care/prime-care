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
import AboutUs from "./modules/user/pages/AboutUs";
import LoginPage from "./modules/auth/pages/Login";
import Signup from "./modules/auth/pages/Signup";
import Checkout from "./modules/user/components/checkout/Checkout";
import { AuthLayout, DashboardLayout, PublicLayout } from "./layouts";
import DashOrders from "./modules/Dashboard/pages/DashOrdes";

// react router
import { Navigate, Route, Routes } from "react-router-dom";
import Profile from "./modules/user/components/my-account/Profile";
import WishList from "./modules/user/components/my-account/WishList";
import Orders from "./modules/user/components/my-account/Orders";
import HelpCenter from "./modules/user/pages/HelpCenter";
import ContactUs from "./modules/user/pages/ContactUs";
import NotFound from "./modules/user/pages/NotFound";
import ProtectedAdminRoute from "./protectedRoutes/ProtectedAdminRoute";
import ProtectedUserRoute from "./protectedRoutes/ProtectedUserRoute";
import ProtectedAuthRoute from "./protectedRoutes/ProtectedAuthRoute";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route
            path="/"
            element={
              <ProtectedUserRoute>
                <Home />
              </ProtectedUserRoute>
            }
          />
          <Route
            path="/products"
            element={
              <ProtectedUserRoute>
                <Products />
              </ProtectedUserRoute>
            }
          />
          <Route
            path="/products/:productId"
            element={
              <ProtectedUserRoute>
                <ProductDetails />
              </ProtectedUserRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedUserRoute realUser={true}>
                <Cart />
              </ProtectedUserRoute>
            }
          />
          <Route
            path="/checkout"
            element={
              <ProtectedUserRoute realUser={true}>
                <Checkout />
              </ProtectedUserRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedUserRoute realUser={true}>
                <MyAccount />
              </ProtectedUserRoute>
            }
          >
            <Route index element={<Navigate to="info" />} />
            <Route path="info" element={<Profile />} />
            <Route path="orders" element={<Orders />} />
            <Route path="wishlist" element={<WishList />} />
          </Route>

          <Route
            path="/about"
            element={
              <ProtectedUserRoute>
                <AboutUs />
              </ProtectedUserRoute>
            }
          />
          <Route
            path="/help-center"
            element={
              <ProtectedUserRoute>
                <HelpCenter />
              </ProtectedUserRoute>
            }
          />
          <Route
            path="/contact-us"
            element={
              <ProtectedUserRoute>
                <ContactUs />
              </ProtectedUserRoute>
            }
          />
        </Route>

        {/* Auth Routes */}
        <Route
          element={
            <ProtectedAuthRoute>
              <AuthLayout />
            </ProtectedAuthRoute>
          }
        >
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/signup" element={<Signup />} />
        </Route>

        {/* Dashboard Routes - Protected by Admin Role */}
        <Route element={<DashboardLayout />}>
          <Route
            path="/dashboard"
            element={
              <ProtectedAdminRoute>
                <Dashboard />
              </ProtectedAdminRoute>
            }
          >
            <Route
              path="products"
              element={
                <ProtectedAdminRoute>
                  <DashProducts />
                </ProtectedAdminRoute>
              }
            />
            <Route
              path="customers"
              element={
                <ProtectedAdminRoute>
                  <DashCustomers />
                </ProtectedAdminRoute>
              }
            />
            <Route
              path="categories"
              element={
                <ProtectedAdminRoute>
                  <DashCategories />
                </ProtectedAdminRoute>
              }
            />
            <Route
              path="orders"
              element={
                <ProtectedAdminRoute>
                  <DashOrders />
                </ProtectedAdminRoute>
              }
            />
          </Route>
        </Route>
        {/* Not found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
