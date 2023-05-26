import { createSlice } from "@reduxjs/toolkit";
import { getProducts, getProductsById } from "./shop-operation";

const initialState = {
  products: [],
  orders: [],
  loading: false,
  error: null,
};

const shopSlice = createSlice({
  name: "shops",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (store) => {
        store.loading = true;
        store.error = null;
      })
      .addCase(getProducts.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.products = payload.data;
      })
      .addCase(getProducts.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(getProductsById.pending, (store) => {
        store.loading = true;
        store.error = null;
      })
      .addCase(getProductsById.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.orders = payload.data;
      })
      .addCase(getProductsById.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      });
  },
});
export default shopSlice.reducer;
