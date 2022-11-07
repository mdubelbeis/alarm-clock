import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export interface ClockState {
  clockPower: boolean;
  time: string;
  alarmModule: {
    alarmPower: boolean;
    activeAlarms: { id: string; alarmName: string; alarmTime: string }[];
  };
  weatherModule: {
    currentZipCode: string;
    favoriteLocations: { id: string; zipCode: string; isFavorite: boolean }[];
  };
}

export interface FavoriteLocation {
  id: string;
  zipCode: string;
  isFavorite: { id: string; zipCode: string; isFavorite: boolean }[];
}

export interface AlarmState {
  alarmName: string;
  alarmTime: string;
}

const initialState: ClockState = {
  time: new Date().toLocaleTimeString(),
  clockPower: true,

  alarmModule: {
    alarmPower: false,
    activeAlarms: [],
  },

  weatherModule: {
    currentZipCode: "78641",
    favoriteLocations: [],
  },
};

export const clockSlice = createSlice({
  name: "clock",
  initialState,
  reducers: {
    addNewAlarm(state, action: PayloadAction<AlarmState>) {
      state.alarmModule.activeAlarms = [
        ...state.alarmModule.activeAlarms,
        {
          id: uuidv4(),
          alarmName: action.payload.alarmName,
          alarmTime: action.payload.alarmTime,
        },
      ];
    },

    // removeAlarm(state, action: PayloadAction<string>) {
    //   state.alarmModule.activeAlarms = state.alarmModule.activeAlarms.filter(
    //     (alarm) =>
    //   );
    // },

    addFavoriteLocation(state, action: PayloadAction<string>) {
      state.weatherModule.favoriteLocations = [
        ...state.weatherModule.favoriteLocations,
        {
          id: uuidv4(),
          zipCode: action.payload,
          isFavorite: true,
        },
      ];
    },
    addNewLocation(state, action: PayloadAction<string>) {
      state.weatherModule.currentZipCode = action.payload;
    },
    setAlarmPower(state, action: PayloadAction<boolean>) {
      state.alarmModule.alarmPower = action.payload;
    },
  },
});

export const clockActions = clockSlice.actions;

export default clockSlice.reducer;
