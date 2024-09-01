// components
import Filter from "../components/products/Filter";
import ProductsList from "../components/products/ProductsList";

const Products = () => {
  return (
    <div className="products-page p-4">
      <div className="container">
        <div className="shop-grid gap-4">
          <Filter />
          <ProductsList />
        </div>
      </div>
    </div>
  );
};

export default Products;
