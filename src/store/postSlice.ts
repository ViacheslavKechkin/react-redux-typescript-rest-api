import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { requestInstance } from "../utils";

import { initDetail, initArray } from "../const"

import { TPost, TSlice } from "../types"

const initialState: TSlice<TPost> = {
  detail: { ...initDetail },
  list: { ...initArray },
}

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getPosts(state, action: PayloadAction<TPost>) {
      state.detail.result = action.payload;
    },
  },
});

export default postSlice.reducer;

export const { getPosts } = postSlice.actions;

