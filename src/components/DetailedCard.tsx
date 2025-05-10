import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/slices/favoritesSlice";
import type { AppDispatch, RootState } from "../redux/store";
import type { bookInterface } from "./BookCard";
import { useEffect } from "react";
const BookPreviewCard = ({ book }: { book: bookInterface }) => {
  const dispatch = useDispatch<AppDispatch>();
  const favorites = useSelector((state: RootState) => state.favorites);
  const isFavorite = favorites.some((fav) => fav.id === book.id);

  const volumeInfo = book?.volumeInfo;
  const imageLinks = volumeInfo?.imageLinks;
  const imageSrc = imageLinks?.thumbnail || imageLinks?.smallThumbnail;

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(book));
    } else {
      dispatch(addFavorite(book));
    }
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);
  const previewLink = volumeInfo?.previewLink;

  // 🔄 Show loader if data isn't ready
  if (!volumeInfo || !volumeInfo.title || !imageSrc) {
    return (
      <div className="w-[350px] h-[500px] flex items-center justify-center border rounded-2xl shadow-md bg-white">
        <div className="w-10 h-10 border-4 border-blue-400 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }
  const buttonClasses =
    "flex items-center gap-1 text-[var(--theme-color)] border rounded-md hover:bg-[var(--theme-color)] hover:text-white duration-200 border-[var(--theme-color)] px-[5px] py-[3px]";
  return (
    <div className="max-w-[350px] w-full bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300">
      <img
        src={imageSrc}
        alt={volumeInfo.title}
        className="w-full h-[400px] object-cover"
      />

      <div className="p-5 flex flex-col gap-2">
        <h2
          className="text-lg font-semibold text-gray-900 line-clamp-2"
          title={volumeInfo.title}
        >
          {volumeInfo.title}
        </h2>

        {volumeInfo.authors && (
          <p className="text-sm text-gray-500 line-clamp-1">
            By {volumeInfo.authors.join(", ")}
          </p>
        )}

        <div className="flex justify-between mt-4">
          {previewLink ? (
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
          ) : (
            <span
              title="No preview available"
              className="text-gray-300 cursor-not-allowed"
            >
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
            </span>
          )}

          <button
            onClick={handleFavoriteClick}
            title={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
            className="text-red-500 hover:text-red-700 transition cursor-pointer"
          >
            <span
              className={`flex items-center gap-1 border rounded-md duration-200 px-[5px] py-[3px] ${
                isFavorite
                  ? "bg-[var(--theme-color)] text-white"
                  : "text-[var(--theme-color)] hover:bg-[var(--theme-color)] hover:text-white border-[var(--theme-color)]"
              }`}
              title="Add to favorites"
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
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookPreviewCard;
