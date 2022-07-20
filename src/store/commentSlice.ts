import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { initDetail, initArray } from "../const"

import { TComment, TSlice, TDto } from "../types"

import { commentService } from "../services/commentService"

const { getComments } = commentService;

export const getCommentThunk = createAsyncThunk(
  "comment/comments",
  async ({ ...dto }: TDto, thunkAPI) => {
    try {
      const { data } = await getComments(dto);
      return data;
    }
    catch (error) {
      return thunkAPI.rejectWithValue('Не удалось загрузить!')
    }
  }
)

const initialState: TSlice<TComment> = {
  detail: { ...initDetail },
  list: { ...initArray },
}

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCommentThunk.pending, (state, action) => {
        state.list.success = false;
        state.list.fetching = true;
      })
      .addCase(getCommentThunk.fulfilled, (state, action) => {
        state.list.success = true;
        state.list.fetching = true;
        state.list.result = action.payload;
      })
      .addCase(getCommentThunk.rejected, (state, action) => {
        state.list.success = false;
        state.list.fetching = false;
        state.list.message = action.meta.requestStatus;
      })
  }
});

export default commentSlice.reducer;
