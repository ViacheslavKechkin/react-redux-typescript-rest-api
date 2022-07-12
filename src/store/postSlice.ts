import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { initDetail, initArray } from "../const"

import { TPost, TSlice } from "../types"

import { postService } from "../services"

const { getPost, getPosts, deletePost, updatePost } = postService;

const getPostsThunk = createAsyncThunk(
  "post/posts",
  async () => {
    try {
      await getPosts
    }
    catch (e) {
      console.error(e)
    }
  }
)

const deletePostThunk = createAsyncThunk(
  "post/deletePost",
  async (id: number) => {
    try {
      await deletePost
    }
    catch (e) {
      console.error(e)
    }
  }
)

const initialState: TSlice<TPost> = {
  detail: { ...initDetail },
  list: { ...initArray },
}

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getPostsThunk.pending, (state, action) => {
        state.list.fetching = true;
        state.list.success = false;
      })
      .addCase(getPostsThunk.fulfilled, (state, action) => {
        state.list.fetching = true;
        state.list.success = true;
        state.list.result = action.payload;
      })
      .addCase(getPostsThunk.rejected, (state, action) => {
        state.list.fetching = false;
        state.list.success = false;
        state.list.message = action.meta.requestStatus;
      })
      .addCase(deletePostThunk.pending, (state, action) => {
        state.list.fetching = true;
        state.list.success = false;
      })
      .addCase(deletePostThunk.fulfilled, (state, action) => {
        state.list.fetching = true;
        state.list.success = true;
        state.list.result = action.payload;
      })
      .addCase(deletePostThunk.rejected, (state, action) => {
        state.list.fetching = false;
        state.list.success = false;
        state.list.message = action.meta.requestStatus;
      })
  }
});

export default postSlice.reducer;

export const { getPostsTest } = postSlice.actions;

