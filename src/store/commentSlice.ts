import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { requestInstance } from "../utils"

import { initDetail, initArray } from "../const"

import { TComment, TSlice } from "../types"

const initialState: TSlice<TComment> = {
  detail: { ...initDetail },
  list: { ...initArray },
}

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    getComments(state, action: PayloadAction<TComment>) {
      state.detail.result = action.payload;
    },
  },
});

export default commentSlice.reducer;

export const { getComments } = commentSlice.actions;
