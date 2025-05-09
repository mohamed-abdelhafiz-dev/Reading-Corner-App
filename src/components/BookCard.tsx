import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import type { AppDispatch, RootState } from "../redux/store";
import { addFavorite, removeFavorite } from "../redux/slices/favoritesSlice";
import { useEffect } from "react";

export interface bookInterface {
  id: string;
  volumeInfo: {
    authors: string[];
    averageRating: number;
    categories: string[];
    description: string;
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
    previewLink: string;
    title: string;
    subtitle: string;
  };
}

export default function BookCard({ book }: { book: bookInterface }) {
  const dispatch = useDispatch<AppDispatch>();
  const favorites = useSelector((state: RootState) => state.favorites);
  const isFavorite = favorites.some((fav) => fav.id === book.id);
  const getBookImage = () => {
    const imageLinks = book?.volumeInfo?.imageLinks;
    return (
      imageLinks?.thumbnail ||
      imageLinks?.smallThumbnail ||
      "/assets/default-image.png"
    );
  };
  const image = getBookImage();
  const previewLink = book?.volumeInfo?.previewLink;

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(book));
    } else {
      dispatch(addFavorite(book));
    }
  };
  const cardClasses = "group flex flex-col items-center gap-1 w-fit";
  const imageClasses = "w-[128px] h-[192px] object-cover";
  const buttonClasses =
    "flex items-center gap-1 text-[var(--theme-color)] border rounded-md hover:bg-[var(--theme-color)] hover:text-white duration-200 border-[var(--theme-color)] px-[5px] py-[3px]";
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);
  return (
    <div className={cardClasses}>
      <div className="relative overflow-hidden border border-black">
        <Link to={`/book_details/${book.id}`}>
          <img
            src={image}
            alt="book image"
            className={imageClasses}
            title={book.volumeInfo.title}
          />
        </Link>
        <div className="absolute -bottom-10 h-fit group-hover:bottom-0 cursor-pointer duration-300 bg-white py-1 w-full flex justify-center gap-2">
          {previewLink && (
            <a
              className={buttonClasses}
              href={previewLink}
              target="_blank"
              rel="noopener noreferrer"
              title="Preview"
            >
              <svg
                xmlns="https://www.w3.org/2000/svg"
                viewBox="0 0 24 20"
                fill="currentColor"
                className="size-4"
              >
                <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                <path
                  fillRule="evenodd"
                  d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          )}
          <span
            className={`flex items-center gap-1 border rounded-md duration-200 px-[5px] py-[3px] ${
              isFavorite
                ? "bg-[var(--theme-color)] text-white"
                : "text-[var(--theme-color)] hover:bg-[var(--theme-color)] hover:text-white border-[var(--theme-color)]"
            }`}
            title="Add to favorites"
            onClick={handleFavoriteClick} // Prevent propagation here too
          >
            <svg
              xmlns="https://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4"
            >
              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>
          </span>
        </div>
      </div>

      <Link
        to={`/book_details/${book.id}`}
        className="font-medium text-sm text-center max-w-[130px] hover:underline hover:text-[var(--theme-color)] max-h-[40px] line-clamp-2"
        dir="auto"
        title={book.volumeInfo.title}
      >
        {book.volumeInfo.title}
      </Link>
    </div>
  );
}
