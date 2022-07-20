import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { TPhoto, TSlice, TDto } from "../types"

import { initDetail, initArray } from "../const"

import { photoService } from "../services/photoService"

const { getPhotos } = photoService;

export const getPhotoThunk = createAsyncThunk(
  "photo/photos",
  async ({ ...dto }: TDto, thunkAPI) => {
    try {
      const { data } = await getPhotos(dto);
      return data;
    }
    catch (error) {
      return thunkAPI.rejectWithValue('Не удалось загрузить!')
    }
  }
)

const initialState: TSlice<TPhoto> = {
  detail: { ...initDetail },
  list: { ...initArray },
}

const photoSlice = createSlice({
  name: "photo",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getPhotoThunk.pending, (state, action) => {
        state.list.success = false;
        state.list.fetching = true;
      })
      .addCase(getPhotoThunk.fulfilled, (state, action) => {
        state.list.success = true;
        state.list.fetching = true;
        state.list.result = action.payload;
      })
      .addCase(getPhotoThunk.rejected, (state, action) => {
        state.list.success = false;
        state.list.fetching = false;
        state.list.message = action.meta.requestStatus;
      })
  }
});

export default photoSlice.reducer;
