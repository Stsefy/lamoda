import { useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import ProductItem from "../ProductItem/ProductItem";
import filterProducts from "../../data/filterProducts"
import sortProducts from "../../data/sortProducts";
import "./ProductList.scss";

const ProductList = (props) => {
  const {
    products,
    search,
    selectedColors,
    priceRange,
    sort,
    setFilteredLength,
  } = props;

  const filteredProducts = useMemo(() => {
    const filtered = filterProducts(products, { search, selectedColors, priceRange });
    const sorted = sortProducts(filtered, sort);
    return sorted;
  }, [products, search, selectedColors, priceRange, sort]);

  useEffect(() => {
    setFilteredLength(filteredProducts.length);
  }, [filteredProducts, setFilteredLength]);

  return filteredProducts.length > 0
    ? (<section className="product-list">
        {
          filteredProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        }
      </section>)
    : <p className="no-products">По вашему запросу ничего не найдено.</p>;
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  search: PropTypes.string.isRequired,
  selectedColors: PropTypes.arrayOf(PropTypes.string).isRequired,
  priceRange: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,  sort: PropTypes.string.isRequired,
  setFilteredLength: PropTypes.func.isRequired,
};

export default ProductList;
