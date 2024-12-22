import Chance from "chance";
import colors from "../constants/colors";
import categories from "../constants/categories";
import imageUrls from "../constants/imageUrls";

const chance = new Chance();

export const generateProducts = (num) => {
  return Array.from({ length: num }, () => {
    return {
      id: chance.guid(),
      name: chance.word({ syllables: 2 }),
      description: chance.sentence({ words: 5 }),
      color: chance.pickone(colors),
      category: chance.pickone(categories),
      price: chance.integer({ min: 10, max: 9999 }),
      rating: chance.floating({ min: 0, max: 5, fixed: 1 }),
      imageUrl: chance.pickone(imageUrls),
    };
  });
};
