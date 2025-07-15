import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type userState = {
  id: string;
  username: string;
  email: string;
  isAuthenticated: boolean;
  theme: "light" | "dark";
};

const initialState: userState = {
  id: "",
  username: "",
  email: "",
  isAuthenticated: false,
  theme: "light",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signin: (
      state,
      action: PayloadAction<{
        id: string;
        username: string;
        email: string;
        theme: "light" | "dark";
      }>
    ) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.theme = action.payload.theme;
      state.isAuthenticated = true;
    },
  },
});
