// import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";
import { createStore } from "redux";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persitConfig = {
  key: "todo-store",
  storage,
};

const persistedReducer = persistReducer(persitConfig, reducer);

const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);

export default store;
