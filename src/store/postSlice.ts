import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { instance } from "../utils/index";

const postSlice = createSlice({
  name: "postSlice",
  initialState: {
    posts: [],
  },
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
    },
  },
});

export default postSlice.reducer;

export const { setPosts } = postSlice.actions;
