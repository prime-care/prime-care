import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// toast notification
import { ToastContainer } from "react-toastify";

// redux
import { Provider } from "react-redux";
import { store } from "./redux/store";

// react router
import { BrowserRouter } from "react-router-dom";

// styles
import "react-toastify/dist/ReactToastify.css";
import "./styles/index.css";
import "./styles/pages/home.scss";
import "./styles/pages/products.scss";
import "./styles/pages/product-details.scss";
import "./styles/pages/user-wishlist.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <ToastContainer />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
