import axios from "axios";
import type { bookInterface } from "./../../components/BookCard";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchBooks = createAsyncThunk(
  "fetchBooks",
  async ({
    searchTerm,
    currentPage,
  }: {
    searchTerm: string;
    currentPage: number;
  }) => {
    const res = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${
        searchTerm.trim().length ? searchTerm : "best+selling+books"
      }&startIndex=${
        (currentPage - 1) * 10
      }&maxResults=40&key=AIzaSyCbVUR3hZkdiATFodSOl7fz3a9quBOxiEE`
    );
    return res.data.items;
  }
);

const booksSlice = createSlice({
  name: "books",
  initialState: {
    booksData: [] as bookInterface[],
    error: "",
    isLoading: true,
  },
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        if (!action.payload) {
          state.error = "We could not find any results for your search... 🚩";
        } else state.booksData = action.payload;
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.error = "Oops Something went wrong.. 🚩";
      });
  },
});
export default booksSlice.reducer;
export const { setError, setIsLoading } = booksSlice.actions;
