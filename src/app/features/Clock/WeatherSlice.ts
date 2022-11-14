import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface Location {
  locationId: string;
  zipCode: string;
  isFavorite: boolean;
}

const FAV_LOCATIONS = [
  { locationId: uuidv4(), zipCode: "78641", isFavorite: true },
  { locationId: uuidv4(), zipCode: "08731", isFavorite: true },
];

uuidv4();
export interface WeatherState {
  currentZipCode: string;
  recentLocations: Location[];
  favoriteLocations: Location[];
  temperature: string;
}

export const initialState: WeatherState = {
  currentZipCode: "23511",
  favoriteLocations: FAV_LOCATIONS,
  recentLocations: [],
  temperature: "0",
};

export const weatherSlice = createSlice({
  name: "weatherSlice",
  initialState,
  reducers: {
    setNewLocation(
      state,
      action: PayloadAction<{
        id: string;
        zipCode: string;
        isFavorite: boolean;
      }>
    ) {
      state.currentZipCode = action.payload.zipCode;
      if (action.payload.isFavorite) {
        state.favoriteLocations = [
          {
            locationId: action.payload.id,
            zipCode: action.payload.zipCode,
            isFavorite: true,
          },
          ...state.favoriteLocations,
        ];
      } else {
        state.recentLocations = [
          {
            locationId: action.payload.id,
            zipCode: action.payload.zipCode,
            isFavorite: false,
          },
          ...state.recentLocations,
        ];
      }
    },
  },
});

const { actions, reducer } = weatherSlice;
export const { setNewLocation } = actions;
export default reducer;
