import { createSlice } from "@reduxjs/toolkit";
import {
  updHistory,
  getAllHistory,
  getHistoryByNumber,
} from "./history-operation";

const initialState = {
  orders: [],
  loading: false,
  error: null,
};

const historySlice = createSlice({
  name: "history",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(updHistory.pending, (store) => {
        store.loading = true;
        store.error = null;
      })
      .addCase(updHistory.fulfilled, (store, { payload }) => {
        store.loading = false;
      })
      .addCase(updHistory.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload.data;
      })
      .addCase(getAllHistory.pending, (store) => {
        store.loading = true;
        store.error = null;
      })
      .addCase(getAllHistory.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.orders = payload.data;
      })
      .addCase(getAllHistory.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(getHistoryByNumber.pending, (store) => {
        store.loading = true;
        store.error = null;
      })
      .addCase(getHistoryByNumber.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.orders = payload;
      })
      .addCase(getHistoryByNumber.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      });
  },
});
export default historySlice.reducer;
