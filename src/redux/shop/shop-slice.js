import { createSlice } from "@reduxjs/toolkit";
import { getMconals } from "./shop-operations";

const initialState = {
  products: {},
  loading: false,
  error: null,
};

const shopSlice = createSlice({
  name: "shops",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getMconals.pending, (store) => {
        store.loading = true;
        store.error = null;
      })
      .addCase(getMconals.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.products = payload;
      })
      .addCase(getMconals.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      });
  },
});
export default shopSlice.reducer;
