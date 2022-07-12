import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { requestInstance } from "../utils";

import { initDetail, initArray } from "../const"

import { TPost, TSlice } from "../types"

import { postService } from "../services"

import type WritableDraft from "immer";

const { getPost, getPosts } = postService;

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
        state.list.fetching = false;
        state.list.success = false;
        state.list.result = action.payload;
      })
      .addCase(getPostsThunk.rejected, (state, action) => {
        state.list.fetching = false;
        state.list.success = true;
        state.list.message = action.meta.requestStatus;
      })
  }
});

export default postSlice.reducer;

export const { getPostsTest } = postSlice.actions;

