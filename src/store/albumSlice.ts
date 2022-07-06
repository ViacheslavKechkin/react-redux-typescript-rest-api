import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { requestInstance } from "../utils"

const albumSlice = createSlice({
  name: "albumSlice",
  initialState: {
    albums: [],
  },
  reducers: {
    setAlbums(state, action) {
      state.albums = action.payload;
    },
  },
});

export default albumSlice.reducer;

export const { setAlbums } = albumSlice.actions;
