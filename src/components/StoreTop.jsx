function StoreTop({ onCheckout }) {

  const handleCheckout = () => {
    onCheckout();
  };

  return (
    <header className="store-header">

      <div className="logo-area">

        <div className="logo">
          JEXO
        </div>

        <h2>
          N-jexocart
        </h2>

      </div>

      <nav>

        <a href="#products">
          Products
        </a>

        <a href="#cart">
          Cart
        </a>

        <button
          className="nav-checkout"
          onClick={handleCheckout}
        >
          Checkout
        </button>

      </nav>

    </header>
  );
}

export default StoreTop;