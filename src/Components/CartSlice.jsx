import { createSlice } from '@reduxjs/toolkit';

//  apply logic for Redux toolkit to ensure that when you 
// click the Add Product button to add a product to the cart, 
// the information of product quantity entered by you should be available globally to any component.
const CartSlice = createSlice({
    name: 'cart',
    initialState, // The state passed into each reducer (like addItemToCart) represents the current state of the slice. 
    reducers:{
        addItemToCart(state, action) {
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
            if(existingItem){
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({...action.payload, quantity: 1});
            }
        },

        removeItemFromCart(state, action){
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        },

        clearCart(state){
            state.cartItems = [];
        },

        increaseItemQuantity(state, action){
            const itemToIncrease = state.cartItems.find(item => item.id === action.payload);
            if (itemToIncrease) {
                itemToIncrease.quantity += 1;
      }
        },

        decreaseItemQuantity(state, action){
            const itemToDecrease = state.cartItems.find(item => item.id === action.payload);
            if (itemToDecrease && itemToDecrease.quantity > 1) {
                itemToDecrease.quantity -= 1;
      }

        },

    }
    
});

export const {
  addItemToCart,
  removeItemFromCart,
  clearCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} = CartSlice.actions;
export default CartSlice.reducer; // when something is imported from this file, only the reducer will be imported

const initialState = {
    cartItems: [],
};

