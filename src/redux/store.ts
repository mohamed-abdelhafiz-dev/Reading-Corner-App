import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./slices/favoritesSlice";
import searchTermReducer from "./slices/searchTermSlice";
import currentPageReducer from "./slices/currentPageSlice";
import alertReducer from "./slices/alertSlice";
import booksReducer from "./slices/booksSlice";
export const store = configureStore({
  reducer: {
    books: booksReducer,
    searchTerm: searchTermReducer,
    favorites: favoritesReducer,
    currentPage: currentPageReducer,
    alert: alertReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
