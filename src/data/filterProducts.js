const filtersFunctions = {
  search: (product, filters) =>
    product.name.toLowerCase().includes(filters.search.toLowerCase()) ||
    product.description.toLowerCase().includes(filters.search.toLowerCase()),
  color: (product, filters) =>
    filters.selectedColors.length === 0 || filters.selectedColors.includes(product.color),
  price: (product, filters) =>
    (product.price >= filters.priceRange[0] || filters.priceRange[0] === "") &&
    (product.price <= filters.priceRange[1] || filters.priceRange[1] === "")
};

const filterProducts = (products, filters) => {
  return products
    .filter((product) => filtersFunctions.search(product, filters))
    .filter((product) => filtersFunctions.color(product, filters))
    .filter((product) => filtersFunctions.price(product, filters));
};

export default filterProducts;