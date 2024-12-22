import { useCallback } from "react";
import PropTypes from "prop-types";
import colors from "../../constants/colors";
import "./Filters.scss";

const Filters = ({
  selectedColors,
  setSelectedColors,
  priceRange,
  setPriceRange,
  filteredCount,
}) => {
  const handleInputClick = useCallback((color) => {
    const newColors = selectedColors.includes(color)
      ? selectedColors.filter((c) => c !== color)
      : [...selectedColors, color];
    setSelectedColors(newColors);
  }, [selectedColors, setSelectedColors]);

  const handleFirstPrice = useCallback((e) => {
    if (e.target.value && Number.isNaN(Number(e.target.value))) return;
    setPriceRange([
      e.target.value === "" ? "" : Number(e.target.value),
      priceRange[1],
    ]);
  }, [priceRange, setPriceRange]);

  const handleSecondPrice = useCallback((e) => {
    if (e.target.value && Number.isNaN(Number(e.target.value))) return;
    setPriceRange([
      priceRange[0],
      e.target.value === "" ? "" : Number(e.target.value),
    ]);
  }, [priceRange, setPriceRange]);

  return (
    <div className="filters">
      <div>
        <p>Цвета:</p>
        {
          colors.map((color) => (
            <label key={color}>
              <input
                type="checkbox"
                checked={selectedColors.includes(color)}
                onChange={() => handleInputClick(color)}
              />
              {color}
            </label>
          ))
        }
      </div>
      <div>
        <p>Цена:</p>
        <div className="inputs-wrap">
          <input
            type="text"
            placeholder="от"
            value={priceRange[0]}
            onInput={handleFirstPrice}
          />
          <span>-</span>
          <input
            type="text"
            placeholder="до"
            value={priceRange[1]}
            onInput={handleSecondPrice}
          />
        </div>
      </div>
      <p>Всего продуктов: {filteredCount}</p>
    </div>
  );
};

Filters.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  selectedColors: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSelectedColors: PropTypes.func.isRequired,
  priceRange: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
  setPriceRange: PropTypes.func.isRequired,
  sort: PropTypes.string.isRequired,
  setSort: PropTypes.func.isRequired,
  filteredCount: PropTypes.number.isRequired,
};

export default Filters;