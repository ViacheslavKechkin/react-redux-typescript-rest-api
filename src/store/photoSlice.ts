import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { requestInstance } from "../utils"

const photoSlice = createSlice({
  name: "photo",
  initialState: {
    photos: [],
  },
  reducers: {
    setPhotos(state, action) {
      state.photos = action.payload;
    },
  },
});

export default photoSlice.reducer;

export const { setPhotos } = photoSlice.actions;
