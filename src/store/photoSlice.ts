import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { requestInstance } from "../utils"

import { initDetail, initArray } from "../const"

import { TPhoto, TSlice } from "../types"

const initialState: TSlice<TPhoto> = {
  detail: { ...initDetail },
  list: { ...initArray },
}

const photoSlice = createSlice({
  name: "photo",
  initialState,
  reducers: {
    getPhotos(state, action: PayloadAction<TPhoto>) {
      state.detail.result = action.payload;
    },
  },
});

export default photoSlice.reducer;

export const { getPhotos } = photoSlice.actions;
