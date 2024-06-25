import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Slices/authSlice";
import cartSlice from "./Slices/cartSlice";

const store = configureStore({
  reducer: {
    authSlice,
    cartSlice,
  },
});

export default store;
