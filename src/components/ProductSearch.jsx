function ProductSearch({ search, setSearch }) {
  return (
    <div className="search-box">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search products..."
      />
    </div>
  );
}

export default ProductSearch;