import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { initDetail, initArray } from "../const"

import { TPost, TSlice } from "../types"

import { postService } from "../services"

import { useAppSelector, useAppDispatch } from "../hooks"

const { getPost, getPosts, deletePost, updatePost } = postService;

const getPostsThunk = createAsyncThunk(
  "post/posts",
  async (_, thunkAPI) => {
    try {
      const { data } = await getPosts

      return data;
    }
    catch (e) {
      thunkAPI.rejectWithValue('Не удалось загрузить:')
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

const updatePostThunk = createAsyncThunk(
  "post/updatePost",
  async ({ id, values }, thunkAPI) => {
    try {
      const { data } = await updatePost
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
        state.list.success = false;
        state.list.fetching = true;
        state.list.message = action.meta.requestStatus;
      })
      .addCase(getPostsThunk.fulfilled, (state, action) => {
        state.list.success = true;
        state.list.fetching = true;
        state.list.message = action.meta.requestStatus;
        state.list.result = action.payload;
      })
      .addCase(getPostsThunk.rejected, (state, action) => {
        state.list.success = false;
        state.list.fetching = false;
        state.list.message = action.meta.requestStatus;
      })
  }
});

export default postSlice.reducer;

// export const { getPostsTest } = postSlice.actions;

