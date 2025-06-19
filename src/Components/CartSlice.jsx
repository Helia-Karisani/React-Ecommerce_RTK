import { createSlice } from '@reduxjs/toolkit';

//  apply logic for Redux toolkit to ensure that when you 
// click the Add Product button to add a product to the cart, 
// the information of product quantity entered by you should be available globally to any component.
const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addItemToCart(state, action) {

        },

        removeItemFromCart(state, action){

        },

        clearCart(state){

        },

        increaseItemQuantity(state, action){

        },

        decreaseItemQuantity(state, action){

        },

    }
    
});


const initialState = {
    cartItems: [],
};

