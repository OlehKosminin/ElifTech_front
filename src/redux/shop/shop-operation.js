import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../shared/services/addPet";

export const getMconals = createAsyncThunk(
  "shop/mcdonals",
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addNoticesPet(data);

      return result;
    } catch ({ responce }) {
      return rejectWithValue(responce);
    }
  }
);
