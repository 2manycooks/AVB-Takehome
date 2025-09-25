import { combineReducers } from "@reduxjs/toolkit";

import viewReducer, { name as viewName } from "store/slices/view";
import commentReducer, { name as commentName } from "store/slices/comments";

const rootReducer = combineReducers({
  [viewName]: viewReducer,
  [commentName]: commentReducer, // again, kept with the practice of abstracting the name as a variable.
});

export default rootReducer;
