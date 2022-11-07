import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export interface ClockState {
  time: string;
  activeAlarms: { id: string; alarmName: string; alarmTime: string }[];
  favoriteLocations: {
    id: string;
    state: string;
    city: string;
    zipCode: string;
  }[];
  alarmPower: boolean;
  clockPower: boolean;
}

export interface AlarmState {
  alarmName: string;
  alarmTime: string;
}

const initialState: ClockState = {
  time: new Date().toLocaleTimeString(),
  activeAlarms: [],
  favoriteLocations: [],
  alarmPower: false,
  clockPower: true,
};

export const clockSlice = createSlice({
  name: "clock",
  initialState,
  reducers: {
    addNewAlarm(state, action: PayloadAction<AlarmState>) {
      state.activeAlarms = [
        ...state.activeAlarms,
        {
          id: uuidv4(),
          alarmName: action.payload.alarmName,
          alarmTime: action.payload.alarmTime,
        },
      ];
    },
    removeAlarm(state, action: PayloadAction<string>) {
      state.activeAlarms = state.activeAlarms.filter(
        (alarm) => alarm.alarmName !== action.payload
      );
    },
    addFavoriteLocation(state, action: PayloadAction<string>) {
      state.favoriteLocations = [
        ...state.favoriteLocations,
        {
          id: uuidv4(),
          state: action.payload,
          city: action.payload,
          zipCode: action.payload,
        },
      ];
    },
    setAlarmPower(state, action: PayloadAction<boolean>) {
      state.alarmPower = action.payload;
    },
  },
});

export const clockActions = clockSlice.actions;

export default clockSlice.reducer;
