import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { instance } from "../utils/index"

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    users: [],
  },
  reducers: {
    setUsers(state, action) {
      state.users = action.payload;
    },
  },
});

export default userSlice.reducer;

export const { setUsers } = userSlice.actions;