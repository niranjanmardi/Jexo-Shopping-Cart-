function ItemInfo({ product, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{product.name}</h2>

        <p>Brand: {product.brand}</p>
        <p>Category: {product.category}</p>
        <p>Rating: {product.rating}★</p>
        <p>Price: ₹{product.price}</p>

        <p>{product.description}</p>

        <button onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default ItemInfo;