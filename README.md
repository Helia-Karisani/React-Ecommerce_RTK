# React-Ecommerce_RTK

A simple e-commerce web application built with **React** and **Redux Toolkit**, using global state management for the shopping cart, reward points (Super Coins), and product interaction.

## Features

- Display a list of products with name and price.
- Add products to the cart with quantity management.
- Prevent duplicate product entries in the cart.
- Remove individual items or clear the entire cart.
- Automatically calculate the total price.
- Reward users with **Super Coins** based on total purchase:
  - 10 coins for $100–199
  - 20 coins for $200–299
  - 30 coins for $300+

## Tech Stack

- **React** (functional components and hooks)
- **Redux Toolkit** (createSlice, configureStore)
- **React-Redux** (useSelector, useDispatch)
- **Vite**
- **CSS**

## Project Structure

```
src/
├── Components/
│   ├── CartSlice.jsx         # Redux logic (reducers, actions)
│   ├── ProductList.jsx       # Product list with Add to Cart
│   ├── ShoppingCart.jsx      # Cart items with quantity control
│   ├── SuperCoin.jsx         # Super Coins based on total amount
│   └── *.css                 # Component styles
├── App.jsx                   # Main app layout
├── main.jsx                  # Entry point with Redux Provider
├── store.js                  # Redux store
```

## How to Run

### 1. Clone the repository

```bash
git clone https://github.com/Helia-Karisani/React-Ecommerce_RTK.git
cd React-Ecommerce_RTK
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app locally

```bash
npm run preview
```

Then open `http://localhost:4173` in your browser.
