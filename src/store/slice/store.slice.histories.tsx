import { historiesGetQuery, HistoriesGetType, historiesGetState } from "utils/db/histories/get";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export const historiesGetFetch: any = createAsyncThunk<HistoriesGetType>(
  "histories/historiesGetStatus",
  async ({ language }, getState): Promise<HistoriesGetType> => {
    return await historiesGetQuery({ language });
  }
);

interface HistoriesState {
  status: "loading" | "succes" | "error";
  histories?: HistoriesGetType;
}

const initialState: HistoriesState = {
  status: "loading",
  histories: historiesGetState,
};

export const historiesSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    historiesGet: (state: HistoriesState, action: PayloadAction<HistoriesGetType>) => {
      state.histories = action.payload;
    },
    historiesChangeStatus: (state: HistoriesState, action: PayloadAction<"loading" | "succes" | "error">) => {
      state.status = action.payload;
    },
  },
  extraReducers: {
    [historiesGetFetch.fulfilled]: (state: HistoriesState, action: PayloadAction<HistoriesGetType>) => {
      !!action?.payload?.error ? (state.status = "error") : (state.status = "succes");
      state.histories = action.payload;
    },
  },
});

export const { historiesChangeStatus, historiesGet } = historiesSlice.actions;

export default historiesSlice.reducer;
