function ItemCard({
  product,
  onProductSelect,
  addToCart
}) {
  return (
    <div className="product-card">

      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <h3>{product.name}</h3>

      <p>{product.brand}</p>

      <p>
        Rating: {product.rating}
      </p>

      <p className="price">
        ₹{product.price}
      </p>

      <button
        onClick={() => onProductSelect(product)}
      >
        View Details
      </button>

      <button
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>

    </div>
  );
}

export default ItemCard;