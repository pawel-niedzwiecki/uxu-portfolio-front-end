import { tagsGetQuery, TagsGetType, tagsGetState } from "utils/db/tags/get";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export const tagsGetFetch: any = createAsyncThunk<TagsGetType>("tags/tagsGetStatus", async (dispatch, getState): Promise<TagsGetType> => {
  return await tagsGetQuery();
});

interface TagsState {
  status: "loading" | "succes" | "error";
  tags?: TagsGetType;
}

const initialState: TagsState = {
  status: "loading",
  tags: tagsGetState,
};

export const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    tagsGet: (state: TagsState, action: PayloadAction<TagsGetType>) => {
      state.tags = action.payload;
    },
    tagsChangeStatus: (state: TagsState, action: PayloadAction<"loading" | "succes" | "error">) => {
      state.status = action.payload;
    },
  },
  extraReducers: {
    [tagsGetFetch.fulfilled]: (state: TagsState, action: PayloadAction<TagsGetType>) => {
      !!action?.payload?.error ? (state.status = "error") : (state.status = "succes");
      state.tags = action.payload;
    },
  },
});

export const { tagsChangeStatus, tagsGet } = tagsSlice.actions;

export default tagsSlice.reducer;
