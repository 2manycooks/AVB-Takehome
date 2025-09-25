import { createSlice, createSelector } from "@reduxjs/toolkit";
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

// new logic for selecting top comments. Could have been done inside the component, but it would be best to keep the components "dumb" and only re-render when comments changes. also now we get to make more selectors.

// considered starting with an array, and pushing a new object every time a unique name was discovered, but decided this was probably a bit simpler/easier.
const sanitized = (c) => c.trim().toLowerCase();

export const selectTopCommenters = createSelector(
  [(state) => state.comments],
  (comments) => {
    // store frequency in a new object. called it freq instead of count because that's already a property name.
    const freq = {};

    for (const comment of comments) {
      const key = sanitized(comment.name); // decided to abstract this out after not liking having to type it out a million times
      if (!freq[key]) {
        freq[key] = { name: comment.name.trim(), count: 1 };
      } else {
        freq[key].count += 1;
      }
    }

    const list = Object.values(freq);

    // sort by count, descending, or tiebreak alphabetically if count is the same.
    list.sort((a, b) => {
      if (b.count !== a.count) return b.count - a.count;
      return a.name.localeCompare(b.name);
    });

    return list.slice(0, 3);
  }
);

export const { addComment } = commentsSlice.actions;

export default commentsSlice.reducer;
