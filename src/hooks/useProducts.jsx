import { useState, useMemo } from "react";
import { generateProducts } from "../data/generateProducts";
import sorts from "../constants/sorts";

const PRODUCTS_LENGTH = 100;

const useProduct = () => {
  const [search, setSearch] = useState("");
  const [selectedColors, setSelectedColors] = useState([]);
  const [priceRange, setPriceRange] = useState(["", ""]);
  const [sort, setSort] = useState(sorts.cheap);
  const [filteredLength, setFilteredLength] = useState(PRODUCTS_LENGTH);

  const products = useMemo(() => generateProducts(PRODUCTS_LENGTH), []);

  return {
    search,
    setSearch,
    selectedColors,
    setSelectedColors,
    priceRange,
    setPriceRange,
    sort,
    setSort,
    filteredLength,
    setFilteredLength,
    products,
  };
};

export default useProduct;