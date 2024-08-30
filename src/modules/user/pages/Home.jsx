import Banner from "../components/home/Banner";
import Categories from "../components/home/Categories";
import Slider from "../components/home/Slider";
import BestSellers from "../components/home/BestSellers";
import SubscribeBox from "../components/home/SubscribeBox";
import FeaturesList from "../components/home/FeaturesList";

const Home = () => {
  return (
    <>
      <Slider />
      <Categories />
      <Banner />
      <BestSellers />
      <SubscribeBox />
      <FeaturesList />
    </>
  );
};

export default Home;
