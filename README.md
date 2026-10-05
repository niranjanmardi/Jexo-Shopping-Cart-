# N-jexocart

N-jexocart is a React + Vite e-commerce storefront that lets users browse products, filter by category/brand/price/rating, add items to a cart, and complete a checkout form. The project is built as a front-end shopping demo and uses static product data stored in the app.

## Overview

This project simulates a simple online shopping experience with:

- a welcoming storefront landing area
- product search and filtering controls
- product detail modal for quick viewing
- add-to-cart functionality with quantity controls
- order summary calculations with discount and delivery logic
- checkout form validation and order confirmation state

## Tech Stack

- React 19
- Vite 8
- JavaScript
- CSS for styling
- ESLint for code linting

## Core Features

- Search products by name or category
- Filter by category, brand, maximum price, and minimum rating
- Clear all filters with one click
- View detailed product information in a modal panel
- Add products to the cart and adjust quantities
- Remove items independently from the cart
- Calculate subtotal, discount, delivery fee, and total price
- Validate checkout form fields before placing an order
- Display a success message after a completed order

## Project Structure

```text
E-Commerce Shopping Web Application
├── public/
│   └── products/
│       ├── backpack.jpg
│       ├── headphones.jpg
│       ├── shoes.jpg
│       ├── smartwatch.jpg
│       ├── speaker.jpg
│       └── tshirt.jpg
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   └── components/
│       ├── Cart.jsx
│       ├── CartItem.jsx
│       ├── CartTotal.jsx
│       ├── Checkout.jsx
│       ├── CustomerForm.jsx
│       ├── ItemCard.jsx
│       ├── ItemCollection.jsx
│       ├── ItemInfo.jsx
│       ├── ProductFilters.jsx
│       ├── ProductSearch.jsx
│       ├── StoreBottom.jsx
│       ├── StoreTop.jsx
│       └── WelcomeSection.jsx
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Key Application Flow

The app is centered around the main state in App.jsx:

1. A static product list is defined in the app.
2. Search and filter values update the visible product list.
3. Users can select a product to view more details.
4. Products can be added to the cart, where quantity and totals are managed.
5. Clicking checkout opens a customer form.
6. Submitting valid information places the order and shows a success message.

## Installation

1. Open the project directory in your terminal.
2. Install dependencies:

```bash
npm install
```

## Run the Application

Start the development server:

```bash
npm run dev
```

Then open the local URL shown in the terminal, typically:

```text
http://localhost:5173
```

## Production Build

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Notes

- This is a front-end demo project and does not include a real backend or database.
- Cart and order data are managed in React state during the current session.
- Product images are stored under the public folder and referenced by relative paths.

## License

This project is provided as a learning/demo storefront and can be used for educational purposes.
