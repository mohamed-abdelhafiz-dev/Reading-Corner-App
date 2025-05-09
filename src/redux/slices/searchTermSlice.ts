import { createSlice } from "@reduxjs/toolkit";

const searchTermSlice = createSlice({
  name: "searchTerm",
  initialState: "",
  reducers: {
    setSearchTerm: (state, action) => {
      return action.payload;
    },
  },
});
export default searchTermSlice.reducer;
export const { setSearchTerm } = searchTermSlice.actions;
