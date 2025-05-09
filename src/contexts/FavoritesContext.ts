import { createContext, useContext } from "react";
import type { bookInterface } from "../components/BookCard";

export const FavContext = createContext<{
  favorites: bookInterface[];
  setFavorites: (favorites: bookInterface[]) => void;
}>({
  favorites: [],
  setFavorites: () => {},
});
export const useFavorites = () => {
  return useContext(FavContext);
};
