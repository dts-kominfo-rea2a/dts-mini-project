import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
