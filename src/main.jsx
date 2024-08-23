import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// react router
import { BrowserRouter } from "react-router-dom";

// styles
import "./styles/app.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
