import { createSlice } from "@reduxjs/toolkit";
import { Post } from "../pages/main/MainPage";

interface mainState {
  posts: Post[];
}

const initialState = { posts: [] } as mainState;

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    addPosts(state, action) {
      state.posts = action.payload;
    },
  },
});

export default mainSlice;
export const mainActions = mainSlice.actions;
