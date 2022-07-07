import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { portfoliosGetQuery, PortfoliosGetType, portfoliosGetState } from "utils/db/portfolio/get";

export const portfolioGetFetch: any = createAsyncThunk<PortfoliosGetType>(
  "portfolio/portfolioGetStatus",
  async (dispatch, getState): Promise<PortfoliosGetType> => {
    return await portfoliosGetQuery();
  }
);

interface PortfolioState {
  status: "loading" | "succes" | "error";
  portfolio?: PortfoliosGetType;
}

const initialState: PortfolioState = {
  status: "loading",
  portfolio: portfoliosGetState,
};

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    portfolioGet: (state: PortfolioState, action: PayloadAction<PortfoliosGetType>) => {
      state.portfolio = action.payload;
    },
    portfolioChangeStatus: (state: PortfolioState, action: PayloadAction<"loading" | "succes" | "error">) => {
      state.status = action.payload;
    },
  },
  extraReducers: {
    [portfolioGetFetch.fulfilled]: (state: PortfolioState, action: PayloadAction<PortfoliosGetType>) => {
      !!action?.payload?.error ? (state.status = "error") : (state.status = "succes");
      state.portfolio = action.payload;
    },
  },
});

export const { portfolioChangeStatus, portfolioGet } = portfolioSlice.actions;

export default portfolioSlice.reducer;
