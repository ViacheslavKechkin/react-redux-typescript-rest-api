import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { initDetail, initArray } from "../const"

import { todoService } from "../services/todoService"

import { TTodo, TSlice, TDto } from "../types"

const { getTodos } = todoService

export const getTodoThunk = createAsyncThunk(
  "todo/todos",
  async ({ ...dto }: TDto, thunkAPI) => {
    try {
      const { data } = await getTodos(dto);
      return data;
    }
    catch (error) {
      return thunkAPI.rejectWithValue('Не удалось загрузить!')
    }
  }
)

const initialState: TSlice<TTodo> = {
  detail: { ...initDetail },
  list: { ...initArray },
}

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getTodoThunk.pending, (state, action) => {
        state.list.success = false;
        state.list.fetching = true;
      })
      .addCase(getTodoThunk.fulfilled, (state, action) => {
        state.list.success = true;
        state.list.fetching = true;
        state.list.result = action.payload;
      })
      .addCase(getTodoThunk.rejected, (state, action) => {
        state.list.success = false;
        state.list.fetching = false;
        state.list.message = action.meta.requestStatus;
      })
  }
});

export default todoSlice.reducer;
