import { createSlice } from "@reduxjs/toolkit";

const removeItemHelperFunction = (state, action) => {
  state.items = state.items.filter(
    (itemObj) => itemObj.item.prodId !== action.payload.item.prodId
  );

  state.totalItems -= action.payload.qty;
  state.totalPrice -= action.payload.qty * action.payload.item.prodPrice;
};

const initialState = JSON.parse(localStorage.getItem("appState"))?.cart || {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      state.items.unshift(action.payload);

      state.totalItems += 1;

      state.totalPrice += action.payload.item.prodPrice;
    },
    removeItemFromCart(state, action) {
      removeItemHelperFunction(state, action);
    },
    moveToWishlist(state, action) {
      removeItemHelperFunction(state, action);
    },
    increaseQuantity(state, action) {
      state.totalItems += 1;

      state.items.find(
        (item) => item.item.prodId === action.payload.item.prodId
      ).qty += 1;

      state.totalPrice += action.payload.item.prodPrice;
    },
    decreaseQuantity(state, action) {
      state.totalItems -= 1;

      let reqItem = state.items.find(
        (item) => item.item.prodId === action.payload.item.prodId
      );
      if (reqItem.qty === 1) {
        state.items = state.items.filter(
          (itemObj) => itemObj.item.prodId !== action.payload.item.prodId
        );
        reqItem.qty = 0;
      } else {
        reqItem.qty -= 1;
      }

      state.totalPrice -= action.payload.item.prodPrice;
    },
    clearCart(state) {
      state.items = [];
      state.totalItems = 0;
      state.totalPrice = 0;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
