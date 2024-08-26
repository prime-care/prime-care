// components
import Filter from "../components/products/Filter";
import ProductsList from "../components/products/ProductsList";

const Products = () => {
  return (
    <div className="products-page p-3">
      <div className="container">
        <div className="shop-grid gap-3">
          <Filter />
          <ProductsList />
        </div>
      </div>
    </div>
  );
};

export default Products;
