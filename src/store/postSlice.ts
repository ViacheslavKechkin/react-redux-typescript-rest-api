import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { requestInstance } from "../utils";

import { initDetail, initArray } from "../const"

import { TPost, TPostSlice } from "../types"

const initialState: TPostSlice = {
  detail: { ...initDetail },
  list: { ...initArray },
}

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPosts(state, action: PayloadAction<TPost>) {
      state.detail.result = action.payload;
    },
  },
});

export default postSlice.reducer;

export const { setPosts } = postSlice.actions;

