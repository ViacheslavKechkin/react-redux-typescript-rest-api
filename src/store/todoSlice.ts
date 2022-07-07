import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { requestInstance } from "../utils"

import { initDetail, initArray } from "../const"

import { TTodo, TSlice } from "../types"

const initialState: TSlice<TTodo> = {
  detail: { ...initDetail },
  list: { ...initArray },
}

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    getTodos(state, action: PayloadAction<TTodo>) {
      state.detail.result = action.payload;
    },
  },
});

export default todoSlice.reducer;

export const { getTodos } = todoSlice.actions;
