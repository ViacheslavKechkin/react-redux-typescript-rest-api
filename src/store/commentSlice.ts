import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { instance } from "../utils/index"

const commentSlice = createSlice({
  name: "commentSlice",
  initialState: {
    comments: [],
  },
  reducers: {
    setComments(state, action) {
      state.comments = action.payload;
    },
  },
});

export default commentSlice.reducer;

export const { setComments } = commentSlice.actions;