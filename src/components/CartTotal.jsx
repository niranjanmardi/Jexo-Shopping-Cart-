function CartTotal({
  subtotal,
  discount,
  delivery,
  total,
  onCheckout
}) {
  return (
    <div className="cart-total">

      <h3>Order Summary</h3>

      <p>
        Subtotal:
        <span>₹{subtotal}</span>
      </p>

      <p>
        Discount:
        <span>- ₹{discount}</span>
      </p>

      <p>
        Delivery:
        <span>₹{delivery}</span>
      </p>

      <hr />

      <h3>
        Total:
        <span>₹{total}</span>
      </h3>

      <button
        className="checkout-button"
        onClick={onCheckout}
      >
        Proceed to Checkout
      </button>

    </div>
  );
}

export default CartTotal;