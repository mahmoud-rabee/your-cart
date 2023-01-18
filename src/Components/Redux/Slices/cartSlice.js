import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  initialState: [],
  name: "cartSlice",
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.find((item) => item.id === action.payload.id);
      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        const clone = { ...action.payload, quantity: 1 };
        state.push(clone);
      }
    },
    deleteFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    deleteAll: (state, action) => {
      return [];
    },
  },
});

export const { addToCart, deleteFromCart, deleteAll } = cartSlice.actions;

export default cartSlice.reducer;
