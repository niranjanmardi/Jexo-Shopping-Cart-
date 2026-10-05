import CartItem from "./CartItem";
import CartTotal from "./CartTotal";

function Cart({
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  subtotal,
  discount,
  delivery,
  total,
  onCheckout
}) {
  return (
    <section id="cart" className="cart-section">

      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="empty-cart">
          Your cart is empty.
        </p>
      ) : (
        <div className="cart-layout">

          <div className="cart-items">

            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                removeItem={removeItem}
              />
            ))}

          </div>

          <CartTotal
            subtotal={subtotal}
            discount={discount}
            delivery={delivery}
            total={total}
            onCheckout={onCheckout}
          />

        </div>
      )}

    </section>
  );
}

export default Cart;