import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { initDetail, initArray } from "../const"

import { TPost, TSlice, TDto } from "../types"

import { postService } from "../services"

import { IUpdatePost, IUpdateParams } from "../interfaces"

import { useAppSelector, useAppDispatch } from "../hooks"

const { getPost, getPosts, deletePost, updatePost } = postService;

const getPostsThunk = createAsyncThunk(
  "post/posts",
  async ({ ...dto }: TDto, thunkAPI) => {
    try {
      const { data } = await getPosts(dto);
      console.log('data', data);

      return data;
    }
    catch (error) {
      return thunkAPI.rejectWithValue('Не удалось загрузить!')
    }
  }
)

const deletePostThunk = createAsyncThunk(
  "post/deletePost",
  async (id: number, thunkAPI) => {
    try {
      const response = await deletePost(id);

      return response;
    }
    catch (error) {
      return thunkAPI.rejectWithValue('Не удалось удалить!')
    }
  }
)

const updatePostThunk = createAsyncThunk(
  "post/updatePost",
  async ({ request, config }: IUpdateParams, thunkAPI) => {
    try {
      const response = await updatePost(request, config);

      return response;
    }
    catch (error) {
      return thunkAPI.rejectWithValue('Не удалось обновить!')
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
      })
      .addCase(getPostsThunk.fulfilled, (state, action) => {
        state.list.success = true;
        state.list.fetching = true;
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

