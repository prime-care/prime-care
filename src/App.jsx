// pages and components imports
import Header from "./modules/common/components/Header";
import AboutUs from "./modules/user/pages/AboutUs";
import Home from "./modules/user/pages/Home";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


// react router
import { Route, Routes } from "react-router-dom";
import LoginPage from "./modules/user/pages/LoginPage";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </>
  );
};

export default App;
