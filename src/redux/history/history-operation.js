import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "shared/services/history";

export const getAllHistory = createAsyncThunk(
  "history/all",
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.getAllHistory(data);
      return result;
    } catch ({ responce }) {
      return rejectWithValue(responce);
    }
  }
);

export const updHistory = createAsyncThunk(
  "history/upd",
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.updHistory(data);
      return result;
    } catch ({ responce }) {
      return rejectWithValue(responce);
    }
  }
);

export const getHistoryByNumber = createAsyncThunk(
  "history/by-number",
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.getHistoryByNumber(data);
      return result;
    } catch ({ responce }) {
      return rejectWithValue(responce);
    }
  }
);
