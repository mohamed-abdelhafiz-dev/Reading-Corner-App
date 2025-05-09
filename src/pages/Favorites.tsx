import { useSelector } from "react-redux";
import BookCard, { type bookInterface } from "../components/BookCard";
import type { RootState } from "../redux/store";
import { useEffect } from "react";

export default function Favorites() {
  const favorites = useSelector((state: RootState) => state.favorites);
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);
  return (
    <main className="px-[25px] py-10">
      <div className="grid gap-[50px] grid-cols-[repeat(auto-fill,minmax(120px,1fr))] justify-items-center">
        {favorites &&
          favorites.map((book: bookInterface) => (
            <BookCard key={book.id} book={book} />
          ))}
      </div>
      {!favorites.length && (
        <p className="fixed-centered text-lg">
          You haven't added any to favorites yet.👀🙋‍♂️
        </p>
      )}
    </main>
  );
}
