import { useEffect } from "react";
import BookCard, { type bookInterface } from "../components/BookCard";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux/slices/booksSlice";
import type { AppDispatch, RootState } from "../redux/store";

export default function SearchPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { booksData, isLoading, error } = useSelector(
    (state: RootState) => state.books
  );
  const currentPage = useSelector((state: RootState) => state.currentPage);
  const searchTerm = useSelector((state: RootState) => state.searchTerm);

  useEffect(() => {
    const debounce = setTimeout(() => {
      dispatch(fetchBooks({ searchTerm, currentPage }));
    }, 1000);
    return () => clearTimeout(debounce);
  }, [currentPage, searchTerm, dispatch]);
  return (
    <main className="px-[25px] py-10">
      {isLoading && <Loader />}

      {error && !isLoading && (
        <p className="text-red-600 text-xl font-bold absolute-centered">
          {error}
        </p>
      )}

      {booksData.length > 0 && !error && (
        <>
          <div className="grid gap-[50px] grid-cols-[repeat(auto-fill,minmax(120px,1fr))] justify-items-center">
            {booksData.map((book: bookInterface) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
          <Pagination />
        </>
      )}
    </main>
  );
}
