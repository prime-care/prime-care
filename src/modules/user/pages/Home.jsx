import Banner from "../components/home/Banner";
import Categories from "../components/home/Categories";
import Slider from "../components/home/Slider";
import LatestProducts from "../components/home/LatestProducts";
// import SubscribeBox from "../components/home/SubscribeBox";
import FeaturesList from "../components/home/FeaturesList";

const Home = () => {
  return (
    <>
      <Slider />
      <Categories />
      <Banner />
      <LatestProducts />
      {/* <SubscribeBox /> */}
      <FeaturesList />
    </>
  );
};

export default Home;
