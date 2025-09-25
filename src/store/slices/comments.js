import { createSlice } from "@reduxjs/toolkit";
import { mockComments } from "store/api";

export const name = "comments"; // this was how it was done in the view selector, decided to keep with the practice.

const commentsSlice = createSlice({
  name: name,
  initialState: mockComments,
  reducers: {
    addComment(state, action) {
      const { name, comment } = action.payload;
      state.push({
        id: Date.now(), // for React key mapping purposes
        name,
        comment,
      });
    },
  },
});

export const selectComments = (state) => state[name] || [];

export const { addComment } = commentsSlice.actions;

export default commentsSlice.reducer;
