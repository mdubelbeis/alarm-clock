import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface ClockState {
  time: string;
  activeTimers: {id: number, timerName: string, alarmTime: {}[];
  alarmPower: boolean;
};

const initialState: ClockState = {
  time: new Date().toLocaleTimeString(),
  activeTimers: [{id: 001, alarmName: 'Workout', alarmTime: '12:00:00'}],
  alarmPower: false,
}

export const clockSlice = createSlice({
  name: "clock",
  initialState,
  reducers: {
    addNewTimer(state, action: PayloadAction<string>) {
      state.activeTimers = [...state.activeTimers, action.payload];
    },
    removeTimer(state, action: PayloadAction<string>) {
      state.activeTimers = state.activeTimers.filter(
        (timer: {id: number, alarmName: string, alarmTime: string}) => timer.alarmName !== action.payload);
      );
    }
  },
});

export const clockActions = clockSlice.actions;

export default clockSlice.reducer;
