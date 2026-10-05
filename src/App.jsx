import { useState } from "react";

import StoreTop from "./components/StoreTop";
import WelcomeSection from "./components/WelcomeSection";
import ProductFilters from "./components/ProductFilters";
import ItemCollection from "./components/ItemCollection";
import ItemInfo from "./components/ItemInfo";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import StoreBottom from "./components/StoreBottom";

import "./App.css";

function App() {

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      category: "Electronics",
      brand: "Sony",
      price: 2499,
      rating: 4.5,
      image: "/products/headphones.jpg",
      description: "Wireless headphones with clear sound and comfortable design."
    },
    {
      id: 2,
      name: "Smart Watch",
      category: "Electronics",
      brand: "Boat",
      price: 1999,
      rating: 4.2,
      image: "/products/smartwatch.jpg",
      description: "Smart watch with fitness tracking and notification features."
    },
    {
      id: 3,
      name: "Running Shoes",
      category: "Fashion",
      brand: "Nike",
      price: 3499,
      rating: 4.7,
      image: "/products/shoes.jpg",
      description: "Comfortable running shoes suitable for daily workouts."
    },
    {
      id: 4,
      name: "Laptop Backpack",
      category: "Accessories",
      brand: "Skybags",
      price: 1299,
      rating: 4.1,
      image: "/products/backpack.jpg",
      description: "Durable backpack with space for laptops and accessories."
    },
    {
      id: 5,
      name: "Cotton T-Shirt",
      category: "Fashion",
      brand: "Puma",
      price: 899,
      rating: 4.0,
      image: "/products/tshirt.jpg",
      description: "Soft cotton T-shirt designed for comfortable everyday use."
    },
    {
      id: 6,
      name: "Bluetooth Speaker",
      category: "Electronics",
      brand: "JBL",
      price: 2999,
      rating: 4.6,
      image: "/products/speaker.jpg",
      description: "Portable Bluetooth speaker with powerful audio output."
    }
  ];

  /* Search and Filter State */

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [maxPrice, setMaxPrice] = useState(5000);
  const [minRating, setMinRating] = useState("");

  const [selectedProduct, setSelectedProduct] = useState(null);

  /* Cart State */

  const [cart, setCart] = useState([]);

  /* Checkout State */

  const [checkout, setCheckout] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  /* Product Filtering */

  const filteredProducts = products.filter((product) => {

    const searchMatch =
      product.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      product.category
        .toLowerCase()
        .includes(search.toLowerCase());

    const categoryMatch =
      category === "" ||
      product.category === category;

    const brandMatch =
      brand === "" ||
      product.brand === brand;

    const priceMatch =
      product.price <= Number(maxPrice);

    const ratingMatch =
      minRating === "" ||
      product.rating >= Number(minRating);

    return (
      searchMatch &&
      categoryMatch &&
      brandMatch &&
      priceMatch &&
      ratingMatch
    );
  });

  /* Clear Filters */

  const clearFilters = () => {
    setSearch("");
    setCategory("");
    setBrand("");
    setMaxPrice(5000);
    setMinRating("");
  };

  /* Add Product to Cart */

  const addToCart = (product) => {

    const existingProduct = cart.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {

      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        )
      );

    } else {

      setCart([
        ...cart,
        {
          ...product,
          quantity: 1
        }
      ]);

    }
  };

  /* Increase Quantity */

  const increaseQuantity = (id) => {

    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      )
    );
  };

  /* Decrease Quantity */

  const decreaseQuantity = (id) => {

    setCart(
      cart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  /* Remove Product */

  const removeItem = (id) => {

    setCart(
      cart.filter((item) => item.id !== id)
    );
  };

  /* Order Calculation */

  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const discount =
    subtotal >= 5000 ? 500 : 0;

  const delivery =
    subtotal > 0 && subtotal < 3000
      ? 100
      : 0;

  const total =
    subtotal - discount + delivery;

  /* Open Checkout */

  const openCheckout = () => {

    if (cart.length === 0) {
      alert("Please add a product to the cart first.");
      return;
    }

    setCheckout(true);

    setTimeout(() => {

      document
        .getElementById("checkout")
        ?.scrollIntoView({
          behavior: "smooth"
        });

    }, 100);
  };

  /* Place Order */

  const placeOrder = () => {

    setCart([]);
    setCheckout(false);
    setOrderPlaced(true);

    setTimeout(() => {

      document
        .getElementById("order-success")
        ?.scrollIntoView({
          behavior: "smooth"
        });

    }, 100);
  };

  return (
    <>
      {/* Header */}

      <StoreTop
        onCheckout={openCheckout}
      />

      <main className="main-container">

        {/* Home / Search */}

        <WelcomeSection
          search={search}
          setSearch={setSearch}
        />

        {/* Filters */}

        <ProductFilters
          category={category}
          setCategory={setCategory}
          brand={brand}
          setBrand={setBrand}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          minRating={minRating}
          setMinRating={setMinRating}
          clearFilters={clearFilters}
        />

        {/* Product List */}

        <ItemCollection
          products={filteredProducts}
          onProductSelect={setSelectedProduct}
          addToCart={addToCart}
        />

        {/* Product Details */}

        {selectedProduct && (
          <ItemInfo
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}

        {/* Shopping Cart */}

        <Cart
          cart={cart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeItem={removeItem}
          subtotal={subtotal}
          discount={discount}
          delivery={delivery}
          total={total}
          onCheckout={openCheckout}
        />

        {/* Checkout */}

        {checkout && (
          <div id="checkout">

            <Checkout
              total={total}
              onPlaceOrder={placeOrder}
            />

          </div>
        )}

        {/* Order Success */}

        {orderPlaced && (
          <div
            id="order-success"
            className="success-message"
          >

            <h2>
              Order Placed Successfully!
            </h2>

            <p>
              Thank you for shopping with N-jexocart.
            </p>

          </div>
        )}

      </main>

      {/* Footer */}

      <StoreBottom />
    </>
  );
}

export default App;