import { configureStore } from "@reduxjs/toolkit";

import storeSlice from "./storeSlice";
import cartSlice from "./cartSlice";
import wishlistSlice from "./wishlistSlice";

const store = configureStore({
  reducer: {
    store: storeSlice.reducer,
    cart: cartSlice.reducer,
    wishlist: wishlistSlice.reducer,
  },
});

export default store;
