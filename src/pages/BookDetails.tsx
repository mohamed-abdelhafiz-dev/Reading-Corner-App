import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { type bookInterface } from "../components/BookCard";

import BookPreviewCard from "../components/DetailedCard";

export default function BookDetails() {
  const [book, setBook] = useState<bookInterface>({
    id: "",
    volumeInfo: {
      authors: [],
      averageRating: 0,
      title: "",
      subtitle: "",
      description: "",
      previewLink: "",
      imageLinks: {
        smallThumbnail: "",
        thumbnail: "",
      },
      categories: [],
    },
  });
  const { id } = useParams();
  useEffect(() => {
    const fetchBook = async () => {
      const res = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${id}&&key=AIzaSyCbVUR3hZkdiATFodSOl7fz3a9quBOxiEE`
      );
      setBook(res.data.items[0]);
    };
    fetchBook();
  }, [id]);
  return (
    <div className="flex justify-center">
      <BookPreviewCard book={book} />
    </div>
  );
}
