import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export interface AlarmState {
  alarmId: string;
  alarmTime: string;
  alarmName: string;
}

const ACTIVE_ALARMS: AlarmState[] = [
  { alarmId: uuidv4(), alarmTime: "12:00 P", alarmName: "Study" },
  { alarmId: uuidv4(), alarmTime: "12:30 P", alarmName: "Workout" },
  { alarmId: uuidv4(), alarmTime: "1:00 P", alarmName: "Lunch" },
];

export interface ClockState {
  clockPower: boolean;
  time: string;
  alarmPower: boolean;
  activeAlarms: AlarmState[];
}

export interface FavoriteLocation {
  id: string;
  zipCode: string;
  isFavorite: { id: string; zipCode: string; isFavorite: boolean }[];
}

const initialState: ClockState = {
  time: new Date().toLocaleTimeString(),
  clockPower: true,
  alarmPower: false,
  activeAlarms: ACTIVE_ALARMS,
};

export const clockSlice = createSlice({
  name: "clock",
  initialState,
  reducers: {
    setNewAlarm(state, action: PayloadAction<AlarmState>): void {
      state.activeAlarms = [...state.activeAlarms, action.payload];
    },

    // removeAlarm(state, action: PayloadAction<string>) {
    //   state.alarmModule.activeAlarms = state.alarmModule.activeAlarms.filter(
    //     (alarm) =>
    //   );
    // },

    setAlarmPower(state, action: PayloadAction<boolean>) {
      state.alarmPower = action.payload;
    },
  },
});

export const clockActions = clockSlice.actions;

export default clockSlice.reducer;
