import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { FavContext } from "./FavoritesContext";
import type { bookInterface } from "../components/BookCard";

export default function FavoritesProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [favorites, setFavorites] = useState<bookInterface[]>(
    JSON.parse(localStorage.getItem("favorites") || "[]")
  );
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);
  return (
    <FavContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavContext.Provider>
  );
}
