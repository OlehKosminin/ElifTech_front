import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import shopsReducer from "./shop/shop-slice";
import historyReducer from "./history/history-slice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["token"],
};

const persisteShopsReducer = persistReducer(persistConfig, shopsReducer);
const persistHistoryReducer = persistReducer(persistConfig, historyReducer);

export const store = configureStore({
  reducer: {
    shops: persisteShopsReducer,
    history: persistHistoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
          "payload.headers",
        ],
      },
    }),
});

export const persistor = persistStore(store);
