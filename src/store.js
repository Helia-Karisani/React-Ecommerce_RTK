import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Components/CartSlice';

// global state

const store = configureStore({
  reducer: {
    cart: cartReducer,
//  user: userReducer, // this could have been another slice
  },
});

export default store;