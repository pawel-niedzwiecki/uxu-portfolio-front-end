import { configureStore } from "@reduxjs/toolkit";
import tagsSlice from "./slice/store.slice.tags";
import portfolioSlice from "./slice/store.slice.portfolio";

export const store = configureStore({
  reducer: { tags: tagsSlice, portfolio: portfolioSlice },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
