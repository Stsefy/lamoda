import useProduct from "./hooks/useProducts";
import Filters from "./components/Filters/Filters";
import ProductList from "./components/ProductList/ProductList";
import sorts from "./constants/sorts";
import sortLabels from "./constants/sortLabels";
import "./App.scss";

const App = () => {
  const {
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
  } = useProduct();

  return (
    <div className="app">
      <div className="app-layout">
        <Filters
          search={search}
          setSearch={setSearch}
          selectedColors={selectedColors}
          setSelectedColors={setSelectedColors}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          sort={sort}
          setSort={setSort}
          filteredCount={filteredLength}
        />
        <div className="right-wrap">
          <div className="search-sort">
            <input
              type="text"
              placeholder="Поиск"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="sort-buttons">
              {
                Object.values(sorts).map((value) => (
                  <button
                    key={value}
                    value={value}
                    className={value === sort ? "button-active" : ""}
                    onClick={() => setSort(value)}
                  >
                    { sortLabels[value] }
                  </button>
                ))
              }
            </div>
          </div>
          <ProductList
            products={products}
            search={search}
            selectedColors={selectedColors}
            priceRange={priceRange}
            sort={sort}
            setFilteredLength={setFilteredLength}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
