import React, { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import { fetchStoreData } from "./store/storeSlice";

const Cart = React.lazy(() => import("./pages/Cart"));
const Wishlist = React.lazy(() => import("./pages/Wishlist"));
const Confirmation = React.lazy(() => import("./pages/Confirmation"));

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchStoreData());
  }, [dispatch]);

  // Set the latest state in local storage every time state changes.
  if (state.store.length !== 0) {
    localStorage.setItem("appState", JSON.stringify(state));
  }

  return (
    <div className="App">
      <Suspense fallback={<h1 style={{ textAlign: "center" }}>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<Confirmation />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
