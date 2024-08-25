// pages and components imports
import Header from "./modules/common/components/Header";
import Home from "./modules/user/pages/Home";

// react router
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
