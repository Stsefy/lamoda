import sorts from "../constants/sorts";

const sortProducts = (products, sort) => {
  return products.sort((a, b) => {
    switch (sort) {
      case sorts.cheap:
        return a.price - b.price;
      case sorts.expensive:
        return b.price - a.price;
      case sorts.popular:
        return b.rating - a.rating;
      default:
        return 0;
    }
  });
};

export default sortProducts;