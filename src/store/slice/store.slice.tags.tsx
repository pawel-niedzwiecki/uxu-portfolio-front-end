import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TagsGetType, tagsGetState } from "utils/db/tags/get";

interface TagsState {
  status: string;
  tags?: TagsGetType;
}

const initialState: TagsState = {
  status: "loading",
  tags: tagsGetState,
};

export const tagsSlice = createSlice({
  name: "tag",
  initialState,
  reducers: {
    getTags: (state: TagsState, action: PayloadAction<TagsState>) => {
      state = action.payload;
    },
  },
});

export const { getTags } = tagsSlice.actions;

export default tagsSlice.reducer;
