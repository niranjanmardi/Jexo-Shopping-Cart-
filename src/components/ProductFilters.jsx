function ProductFilters({
  category,
  setCategory,
  brand,
  setBrand,
  maxPrice,
  setMaxPrice,
  minRating,
  setMinRating,
  clearFilters
}) {
  return (
    <section className="filter-section">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Fashion">Fashion</option>
        <option value="Accessories">Accessories</option>
      </select>

      <select
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
      >
        <option value="">All Brands</option>
        <option value="Sony">Sony</option>
        <option value="Boat">Boat</option>
        <option value="Nike">Nike</option>
        <option value="Skybags">Skybags</option>
        <option value="Puma">Puma</option>
        <option value="JBL">JBL</option>
      </select>

      <label>
        Maximum Price: ₹{maxPrice}
      </label>

      <input
        type="range"
        min="500"
        max="5000"
        step="100"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />

      <select
        value={minRating}
        onChange={(e) => setMinRating(e.target.value)}
      >
        <option value="">All Ratings</option>
        <option value="4">4★ & above</option>
        <option value="4.5">4.5★ & above</option>
      </select>

      <button onClick={clearFilters}>
        Clear Filters
      </button>
    </section>
  );
}

export default ProductFilters;