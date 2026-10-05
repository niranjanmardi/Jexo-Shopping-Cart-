import { useState } from "react";

function CustomerForm({ onPlaceOrder }) {

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    payment: "Cash on Delivery"
  });

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      customer.name === "" ||
      customer.phone === "" ||
      customer.address === "" ||
      customer.city === ""
    ) {
      alert("Please fill all required fields");
      return;
    }

    onPlaceOrder();
  };

  return (
    <form
      className="customer-form"
      onSubmit={handleSubmit}
    >

      <label>Name</label>
      <input
        type="text"
        name="name"
        value={customer.name}
        onChange={handleChange}
        placeholder="Enter your name"
      />

      <label>Phone</label>
      <input
        type="text"
        name="phone"
        value={customer.phone}
        onChange={handleChange}
        placeholder="Enter phone number"
      />

      <label>Address</label>
      <textarea
        name="address"
        value={customer.address}
        onChange={handleChange}
        placeholder="Enter delivery address"
      />

      <label>City</label>
      <input
        type="text"
        name="city"
        value={customer.city}
        onChange={handleChange}
        placeholder="Enter city"
      />

      <label>Payment Method</label>

      <select
        name="payment"
        value={customer.payment}
        onChange={handleChange}
      >
        <option>Cash on Delivery</option>
        <option>Credit / Debit Card</option>
        <option>UPI</option>
      </select>

      <button
        type="submit"
        className="place-order-button"
      >
        Place Order
      </button>

    </form>
  );
}

export default CustomerForm;