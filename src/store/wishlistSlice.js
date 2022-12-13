import { createSlice } from "@reduxjs/toolkit";

import { cartActions } from "./cartSlice";

const initialState = JSON.parse(localStorage.getItem("appState"))?.wishlist || {
  items: [],
  totalItems: 0,
};

const wishlistSlice = createSlice({
  name: "Wishlist",
  initialState,
  reducers: {
    addItemToWishlist(state, action) {
      state.items.unshift(action.payload);
      state.totalItems += 1;
    },
    removeItemFromWishlist(state, action) {
      state.items = state.items.filter(
        (item) => item.prodId !== action.payload.prodId
      );
      state.totalItems -= 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cartActions.moveToWishlist, (state, action) => {
      state.items.unshift(action.payload.item);
      state.totalItems += 1;
    });
  },
});

export const wishlistActions = wishlistSlice.actions;
export default wishlistSlice;
