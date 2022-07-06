import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { requestInstance } from "../utils";

import { TPost, TKeys, TSliceKeys } from "../types"

type PostState = {
  posts: TPost[];
}

const initialState: PostState = {
  posts: [],
}

const postSlice = createSlice({
  name: "postSlice",
  initialState,
  reducers: {
    setPosts(state, action: PayloadAction<TPost[]>) {
      state.posts = action.payload;
    },
  },
});

export default postSlice.reducer;

export const { setPosts } = postSlice.actions;

