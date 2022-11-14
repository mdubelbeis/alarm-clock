import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface WeatherState {
  currentZipCode: string;
  locations: { id: string; zipCode: string; isFavorite: boolean }[];
  favoriteLocations: { id: string; zipCode: string; isFavorite: boolean }[];
  temperature: string;
}

export const initialState: WeatherState = {
  currentZipCode: "78641",
  favoriteLocations: [],
  locations: [],
  temperature: "0",
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    addNewLocation(
      state,
      action: PayloadAction<{
        id: string;
        zipCode: string;
        isFavorite: boolean;
      }>
    ) {
      state.currentZipCode = action.payload.zipCode;
      if (action.payload.isFavorite) {
        state.favoriteLocations.push(action.payload);
      } else {
        state.locations.push(action.payload);
      }
    },
  },
});

export const weatherActions = weatherSlice.actions;

export default weatherSlice.reducer;
