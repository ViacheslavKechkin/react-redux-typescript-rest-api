import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { initDetail, initArray } from "../const"

import { TAlbum, TSlice, TDto } from "../types"

import { albumService } from "../services/albumService"

const { getAlbums } = albumService;

export const getAlbumThunk = createAsyncThunk(
  "album/albums",
  async ({ ...dto }: TDto, thunkAPI) => {
    try {
      const { data } = await getAlbums(dto);
      return data;
    }
    catch (error) {
      return thunkAPI.rejectWithValue('Не удалось загрузить!')
    }
  }
)

const initialState: TSlice<TAlbum> = {
  detail: { ...initDetail },
  list: { ...initArray },
}

const albumSlice = createSlice({
  name: "album",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAlbumThunk.pending, (state, action) => {
        state.list.success = false;
        state.list.fetching = true;
      })
      .addCase(getAlbumThunk.fulfilled, (state, action) => {
        state.list.success = true;
        state.list.fetching = true;
        state.list.result = action.payload;
      })
      .addCase(getAlbumThunk.rejected, (state, action) => {
        state.list.success = false;
        state.list.fetching = false;
        state.list.message = action.meta.requestStatus;
      })
  }
});

export default albumSlice.reducer;
