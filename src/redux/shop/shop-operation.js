import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "shared/services/shop";

export const getProducts = createAsyncThunk(
  "shop/products",
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.getProducts(data);
      return result;
    } catch ({ responce }) {
      return rejectWithValue(responce);
    }
  }
);

export const getProductsById = createAsyncThunk(
  "shop/list",
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.getProductsById(data);
      return result;
    } catch ({ responce }) {
      return rejectWithValue(responce);
    }
  }
);
