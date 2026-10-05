import CustomerForm from "./CustomerForm";

function Checkout({ total, onPlaceOrder }) {
  return (
    <section id="checkout" className="checkout-section">

      <h2>Checkout</h2>

      <p>
        Final Amount: <strong>₹{total}</strong>
      </p>

      <CustomerForm onPlaceOrder={onPlaceOrder} />

    </section>
  );
}

export default Checkout;