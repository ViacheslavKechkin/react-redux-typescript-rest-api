import { combineReducers, configureStore } from "@reduxjs/toolkit";

import postSlice from "./postSlice";
import albumSlice from "./albumSlice";
import commentSlice from "./commentSlice";
import photoSlice from "./photoSlice";
import todoSlice from "./todoSlice";
import userSlice from "./userSlice";

const rootReducer = combineReducers({
  post: postSlice,
  album: albumSlice,
  comment: commentSlice,
  photo: photoSlice,
  todo: todoSlice,
  user: userSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
