import { createSlice } from "@reduxjs/toolkit";

const currentPageSlice = createSlice({
  name: "currentPage",
  initialState: 1,
  reducers: {
    setCurrentPage: (_, action) => {
      return action.payload;
    },
  },
});
export default currentPageSlice.reducer;
export const { setCurrentPage } = currentPageSlice.actions;
