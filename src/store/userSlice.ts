import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { requestInstance } from "../utils"

import { initDetail, initArray } from "../const"

import { TUser, TSlice } from "../types"

const initialState: TSlice<TUser> = {
  detail: { ...initDetail },
  list: { ...initArray },
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUsers(state, action: PayloadAction<TUser>) {
      state.detail.result = action.payload;
    },
  },
});

export default userSlice.reducer;

export const { getUsers } = userSlice.actions;
