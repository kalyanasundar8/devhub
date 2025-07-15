import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./features/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
}); // Remeber the data when user signin or change something

export type RootState = ReturnType<typeof store.getState>; // Type or Blueprint
export type AppDispatch = typeof store.dispatch; // Remote controll to add, remove or change
