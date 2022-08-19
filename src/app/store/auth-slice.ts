import { createSlice } from "@reduxjs/toolkit";

interface authState {
  isLoggedIn: boolean;
}

const initialState = { isLoggedIn: false } as authState;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state: authState) {
      state.isLoggedIn = true;
    },
    logout(state: authState) {
      state.isLoggedIn = false;
    },
  },
});

export default authSlice;
export const authActions = authSlice.actions;
