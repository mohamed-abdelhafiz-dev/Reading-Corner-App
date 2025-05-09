import { useEffect, useState } from "react";
import BookCard, { type bookInterface } from "../components/BookCard";
import axios from "axios";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination";

export default function SearchPage({
  searchTerm,
  currentPage,
  setCurrentPage,
}: {
  searchTerm: string;
  currentPage: number;
  setCurrentPage: (p: number | ((p: number) => number)) => void;
}) {
  const [books, setBooks] = useState<bookInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const debounce = setTimeout(() => {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${
            searchTerm.trim().length ? searchTerm : "best+selling+books"
          }&startIndex=${
            (currentPage - 1) * 10
          }&maxResults=40&key=AIzaSyCbVUR3hZkdiATFodSOl7fz3a9quBOxiEE`
        )
        .then((res) => {
          setBooks(res.data.items);
        })
        .catch(() => {
          setError("Oops Something went wrong.. 🚩");
        })
        .finally(() => setLoading(false));
    }, 1000);
    return () => clearTimeout(debounce);
  }, [currentPage, searchTerm]);
  return (
    <main className="px-[25px] py-10">
      {loading && <Loader />}
      {error && (
        <p className="text-red-600 text-xl font-bold absolute-centered">
          {error}
        </p>
      )}

      <div className="grid gap-[50px] grid-cols-[repeat(auto-fill,minmax(120px,1fr))] justify-items-center">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
      {!loading && !error && (
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      )}
    </main>
  );
}
