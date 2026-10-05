import ItemCard from "./ItemCard";

function ItemCollection({
  products,
  onProductSelect,
  addToCart
}) {
  return (
    <section
      id="products"
      className="product-section"
    >

      <h2>Our Products</h2>

      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="product-grid">

          {products.map((product) => (
            <ItemCard
              key={product.id}
              product={product}
              onProductSelect={onProductSelect}
              addToCart={addToCart}
            />
          ))}

        </div>
      )}

    </section>
  );
}

export default ItemCollection;