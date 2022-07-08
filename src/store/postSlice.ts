import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { requestInstance } from "../utils";

import { initDetail, initArray } from "../const"

import { TPost, TSlice } from "../types"

import { postService } from "../services"

const { getPost, getPosts } = postService;

const fetchPosts = createAsyncThunk(
  "post/posts",
  async (_, dispatch) => {
    await getPosts
  }
)

const initialState: TSlice<TPost> = {
  detail: { ...initDetail },
  list: { ...initArray },
}

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getPostsTest(state, action: PayloadAction<TPost>) {
      state.detail.result = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state: TSlice<TPost>, action) => {
        state.list.fetching = true;
      })
      .addCase(fetchPosts.fulfilled, (state: TSlice<TPost>, action) => {
        state.list.fetching = false;
        state.list.success = true;
        state.list.result = action.payload;
      })
      .addCase(fetchPosts.rejected, (state: TSlice<TPost>, action) => {
        state.list.fetching = false;
        state.list.success = true;
        state.list.message = action.meta.requestStatus;
      })
  }
});

export default postSlice.reducer;

export const { getPostsTest } = postSlice.actions;

