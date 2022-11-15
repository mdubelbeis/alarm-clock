import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface QuoteState {
  quoteText: string;
  quoteAuthor: string;
}

const initialState: QuoteState = {
  quoteText:
    "Here, there shall be text upon the Clock component. Learn the skills, the opportunities, will come",
  quoteAuthor: "ANON",
};

export const quoteSlice = createSlice({
  name: "quoteSlice",
  initialState,
  reducers: {
    setQuote(state, action: PayloadAction<QuoteState>): void {
      state.quoteText = action.payload.quoteText;
      state.quoteAuthor = action.payload.quoteAuthor;
    },
  },
});

const { actions, reducer } = quoteSlice;
export const { setQuote } = actions;
export default reducer;
