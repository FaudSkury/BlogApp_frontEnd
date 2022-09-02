import { createSlice } from "@reduxjs/toolkit";

interface authState {
  isLoggedIn: boolean;
  userName?: string;
}

const initialState = { isLoggedIn: false, userName: undefined } as authState;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state: authState, action) {
      state.isLoggedIn = !!action.payload.token;
      state.userName = action.payload.userName;
    },
    logout(state: authState) {
      state.isLoggedIn = false;
      state.userName = undefined;
    },
  },
});

export default authSlice;
export const authActions = authSlice.actions;
