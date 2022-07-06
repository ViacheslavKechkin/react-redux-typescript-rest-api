import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { requestInstance } from "../utils"

const todoSlice = createSlice({
  name: "todoSlice",
  initialState: {
    todos: [],
  },
  reducers: {
    setTodos(state, action) {
      state.todos = action.payload;
    },
  },
});

export default todoSlice.reducer;

export const { setTodos } = todoSlice.actions;
