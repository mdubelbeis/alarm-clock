import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export interface WeatherState {
  currentZipCode: string;
  locations: { id: string; zipCode: string; isFavorite: boolean }[];
  favoriteLocations: { id: string; zipCode: string; isFavorite: boolean }[];
  temperature: string;
}

export const initialState: WeatherState = {
  currentZipCode: "78641",
  favoriteLocations: [],
  locations: [
    { id: uuidv4(), zipCode: "78641", isFavorite: true },
    { id: uuidv4(), zipCode: "23515", isFavorite: true },
    { id: uuidv4(), zipCode: "08731", isFavorite: true },
    { id: uuidv4(), zipCode: "78717", isFavorite: true },
    { id: uuidv4(), zipCode: "08753", isFavorite: true },
    { id: uuidv4(), zipCode: "60409", isFavorite: true },
  ],
  temperature: "0",
};

export const weatherSlice = createSlice({
  name: "clock",
  initialState,
  reducers: {
    addFavoriteLocation(state, action: PayloadAction<string>) {
      state.favoriteLocations = [
        ...state.favoriteLocations,
        {
          id: uuidv4(),
          zipCode: action.payload,
          isFavorite: true,
        },
      ];
    },
    addNewLocation(state, action: PayloadAction<string>) {
      state.currentZipCode = action.payload;
    },
  },
});

export const weatherActions = weatherSlice.actions;

export default weatherSlice.reducer;
