import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// redux
import { Provider } from "react-redux";
import { store } from "./redux/store";

// react router
import { BrowserRouter } from "react-router-dom";

// styles
import "./styles/index.css";
import "./styles/pages/products.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
