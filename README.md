# React/Vite/RTK/Redux

```markdown
# 🛒 React-Ecommerce_RTK

A simple E-Commerce web application built with **React** and **Redux Toolkit**, demonstrating global state management for shopping cart functionality, reward points (Super Coins), and product interaction.

## 🚀 Features

- Display a list of products with name and price.
- Add products to the cart with quantity management.
- Prevent duplicate product entries in the cart.
- Remove individual items or clear the entire cart.
- Automatically calculate the total price.
- Reward users with **Super Coins** based on total purchase:
  - 10 coins for $100–199
  - 20 coins for $200–299
  - 30 coins for $300+

## 🧠 Tech Stack

- **React** (Functional components & hooks)
- **Redux Toolkit** (createSlice, configureStore)
- **React-Redux** (useSelector, useDispatch)
- **Vite** (for fast bundling and preview)
- **CSS** (component-level styling)

## 📁 Project Structure

```

src/
├── Components/
│   ├── CartSlice.jsx         # Redux logic (reducers, actions)
│   ├── ProductList.jsx       # Displays product list with Add to Cart
│   ├── ShoppingCart.jsx      # Displays cart items with quantity control
│   ├── SuperCoin.jsx         # Displays Super Coins based on total amount
│   └── \*.css                 # Component-specific styles
├── App.jsx                   # Main app layout
├── main.jsx                  # Entry point with Redux Provider
├── store.js                  # Configures global Redux store

````

## 🛠️ How to Run
````
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

> Visit `http://localhost:4173` in your browser to use the application.

## ✨ Credits

This project is based on the **IBM Developer Skills Network** lab:
*E-Commerce Data Rendering using Redux Toolkit*




