import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { cartActions } from "./cartSlice";
import { wishlistActions } from "./wishlistSlice";

export const fetchStoreData = createAsyncThunk(
  "store/fetchStoreData",
  async () => {
    return fetch(`${process.env.REACT_APP_DB_STRING}/store.json`).then(
      (response) => response.json()
    );
  }
);

const findItem = (state, action) => {
  return state.find((item) => item.prodId === action.payload.item.prodId);
};

const localStorageProducts = localStorage.getItem("appState"); // To know whether appState property exists in local storage or not

// If store property is available in localstorage's appState object, set initial to it otherwise blank array.
const initialState = JSON.parse(localStorage.getItem("appState"))?.store || [];

const storeSlice = createSlice({
  name: "store",
  initialState,
  extraReducers: (builder) => {
    // If there is no appState object in local storage, fetch data from DB and set state
    if (!localStorageProducts) {
      builder.addCase(fetchStoreData.fulfilled, (state, action) => {
        return (state = Object.values(action.payload));
      });
    }
    builder.addCase(cartActions.addItemToCart, (state, action) => {
      findItem(state, action).inCart = true;
    });
    builder.addCase(cartActions.removeItemFromCart, (state, action) => {
      findItem(state, action).inCart = false;
    });
    builder.addCase(cartActions.moveToWishlist, (state, action) => {
      let reqProduct = findItem(state, action);
      reqProduct.inCart = false;
      reqProduct.inWishlist = true;
    });
    builder.addCase(cartActions.clearCart, (state) => {
      state.forEach((item) => {
        if (item.inCart === true) {
          item.inCart = false;
        }
      });
    });
    builder.addCase(wishlistActions.addItemToWishlist, (state, action) => {
      state.find(
        (item) => item.prodId === action.payload.prodId
      ).inWishlist = true;
    });
    builder.addCase(wishlistActions.removeItemFromWishlist, (state, action) => {
      state.find(
        (item) => item.prodId === action.payload.prodId
      ).inWishlist = false;
    });
  },
});

export const storeActions = storeSlice.actions;
export default storeSlice;
