import ProductSearch from "./ProductSearch";

function WelcomeSection({ search, setSearch }) {
  return (
    <section className="welcome-section" id="home">
      <h1>Welcome to N-jexocart</h1>
      <p>Find the products you need quickly and easily.</p>

      <ProductSearch
        search={search}
        setSearch={setSearch}
      />
    </section>
  );
}

export default WelcomeSection;