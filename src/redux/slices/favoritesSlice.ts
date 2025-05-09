import type { bookInterface } from "./../../components/BookCard";
import { createSlice } from "@reduxjs/toolkit";
const favoritesSlice = createSlice({
  name: "favorites",
  initialState: JSON.parse(
    localStorage.getItem("favorites") || "[]"
  ) as bookInterface[],
  reducers: {
    addFavorite: (state, action: { payload: bookInterface }) => {
      state.push(action.payload);
    },
    removeFavorite: (state, action: { payload: bookInterface }) => {
      return state.filter((fav) => fav.id !== action.payload.id);
    },
  },
});
export default favoritesSlice.reducer;
export const { addFavorite, removeFavorite } = favoritesSlice.actions;
