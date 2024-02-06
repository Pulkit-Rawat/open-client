import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (state, action) => {
      let list = state.items;
      list = list.filter((item) => item.pID != action.payload);
      state.items = list;
    },
  },
});

export const { addToCart, removeFromCart } = productsSlice.actions;
export default productsSlice.reducer;
