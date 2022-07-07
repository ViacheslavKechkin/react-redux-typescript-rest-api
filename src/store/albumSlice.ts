import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { requestInstance } from "../utils"

import { initDetail, initArray } from "../const"

import { TAlbum, TSlice } from "../types"

const initialState: TSlice<TAlbum> = {
  detail: { ...initDetail },
  list: { ...initArray },
}

const albumSlice = createSlice({
  name: "album",
  initialState,
  reducers: {
    getAlbums(state, action: PayloadAction<TAlbum>) {
      state.detail.result = action.payload;
    },
  },
});

export default albumSlice.reducer;

export const { getAlbums } = albumSlice.actions;
