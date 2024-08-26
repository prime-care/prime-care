import Banner from "../components/home/Banner";
import Categories from "../components/home/Categories";
import Slider from "../components/home/Slider";
import BestSellers from "../components/home/BestSellers";
import SubscribeBox from "../components/home/SubscribeBox";
import FeaturesList from "../components/home/FeaturesList";
import Footer from "../../../modules/common/components/Footer";

const Home = () => {
  return (
    <>
      <Slider />
      <Categories />
      <Banner />
      <BestSellers />
      <SubscribeBox />
      <FeaturesList />
      <Footer></Footer>
    </>
  );
};

export default Home;
