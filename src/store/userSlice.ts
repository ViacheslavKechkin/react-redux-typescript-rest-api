import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { initDetail, initArray } from "../const"

import { TUser, TSlice, TDto } from "../types"

import { userService } from "../services/userService"

const { getUsers } = userService;

export const getUserThunk = createAsyncThunk(
  "user/users",
  async ({ ...dto }: TDto, thunkAPI) => {
    try {
      const { data } = await getUsers(dto);
      return data;
    }
    catch (error) {
      return thunkAPI.rejectWithValue('Не удалось загрузить!')
    }
  }
)

const initialState: TSlice<TUser> = {
  detail: { ...initDetail },
  list: { ...initArray },
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getUserThunk.pending, (state, action) => {
        state.list.success = false;
        state.list.fetching = true;
      })
      .addCase(getUserThunk.fulfilled, (state, action) => {
        state.list.success = true;
        state.list.fetching = true;
        state.list.result = action.payload;
      })
      .addCase(getUserThunk.rejected, (state, action) => {
        state.list.success = false;
        state.list.fetching = false;
        state.list.message = action.meta.requestStatus;
      })
  }
});

export default userSlice.reducer;
