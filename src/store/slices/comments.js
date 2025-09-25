import { createSlice } from "@reduxjs/toolkit";
import { mockComments } from "store/api";

export const name = "comments";

const commentsSlice = createSlice({
  name: name,
  initialState: mockComments,
});

export const selectComments = (state) => state[name] || [];

export default commentsSlice.reducer;
