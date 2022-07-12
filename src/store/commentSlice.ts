import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { requestInstance } from "../utils"

const commentSlice = createSlice({
  name: "comment",
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
