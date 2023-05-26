import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "redux/store";
import React, { useState } from "react";

import Navbar from "./modules/NavBar";
import ShopPage from "./pages/ShopPage";
import ShopingCardPage from "pages/ShopingCardPage/ShopingCardPage";

import NotFoundPage from "pages/NotFoundPage";
import MainPage from "pages/MainPage/MainPage";

export const App = () => {
  const [order, setOrder] = useState([]);

  return (
    <Provider store={store}>
      <BrowserRouter basename="/">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/shop/:shop"
            element={<ShopPage setOrder={setOrder} />}
          />
          <Route
            path="/shop-card"
            element={<ShopingCardPage order={order} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
