import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/slices/favoritesSlice";
import type { AppDispatch, RootState } from "../redux/store";
import type { bookInterface } from "./BookCard";
import { Eye, Heart, HeartOff } from "lucide-react";

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

  const previewLink = volumeInfo?.previewLink;

  // 🔄 Show loader if data isn't ready
  if (!volumeInfo || !volumeInfo.title || !imageSrc) {
    return (
      <div className="w-[350px] h-[500px] flex items-center justify-center border rounded-2xl shadow-md bg-white">
        <div className="w-10 h-10 border-4 border-blue-400 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

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
              href={previewLink}
              target="_blank"
              rel="noopener noreferrer"
              title="Preview"
              className="text-blue-500 hover:text-blue-700 transition"
            >
              <Eye className="w-6 h-6" />
            </a>
          ) : (
            <span
              title="No preview available"
              className="text-gray-300 cursor-not-allowed"
            >
              <Eye className="w-6 h-6" />
            </span>
          )}

          <button
            onClick={handleFavoriteClick}
            title={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
            className="text-red-500 hover:text-red-700 transition"
          >
            {isFavorite ? (
              <HeartOff className="w-6 h-6 cursor-pointer" />
            ) : (
              <Heart className="w-6 h-6 cursor-pointer" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookPreviewCard;
