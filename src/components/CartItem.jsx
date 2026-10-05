function CartItem({
  item,
  increaseQuantity,
  decreaseQuantity,
  removeItem
}) {
  return (
    <div className="cart-item">

      <img
        src={item.image}
        alt={item.name}
        className="cart-image"
      />

      <div className="cart-details">

        <h3>{item.name}</h3>

        <p>₹{item.price}</p>

        <div className="quantity">

          <button
            onClick={() => decreaseQuantity(item.id)}
          >
            -
          </button>

          <span>{item.quantity}</span>

          <button
            onClick={() => increaseQuantity(item.id)}
          >
            +
          </button>

        </div>

        <p>
          Item Total: ₹{item.price * item.quantity}
        </p>

        <button
          className="remove-button"
          onClick={() => removeItem(item.id)}
        >
          Remove
        </button>

      </div>

    </div>
  );
}

export default CartItem;