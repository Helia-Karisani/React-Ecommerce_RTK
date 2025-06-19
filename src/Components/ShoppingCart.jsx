// This component displays and managing products in shopping cart
import React from 'react';
import './ShoppingCart.css'; 
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart, clearCart, increaseItemQuantity, decreaseItemQuantity } from './CartSlice'; // Assuming you have action creators for increasing and decreasing item quantity
import './ShoppingCart.css';

const ShoppingCart = () => {

  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  // initially, "item" below, is the first item in the cartItems array
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  
  return (
    <>
    <div className="shopping-cart">
      <h2 className="shopping-cart-title">Shopping Cart</h2>
      <ul className="cart-items">
       
      </ul>
      <button className="clear-cart-btn">Clear Cart</button>
    </div>
  
    </>
  );
};

export default ShoppingCart;
