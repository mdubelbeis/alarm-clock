import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { RootState } from "../../store";

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
  date: string;
  dayOfWeek: number;
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
  date: new Date().toLocaleDateString(),
  dayOfWeek: new Date().getDay(),
  clockPower: true,
  alarmPower: false,
  activeAlarms: ACTIVE_ALARMS,
};

export const clockSlice = createSlice({
  name: "clockSlice",
  initialState,
  reducers: {
    setNewAlarm: (state, action: PayloadAction<AlarmState>) => {
      state.activeAlarms = [...state.activeAlarms].concat(action.payload);
    },

    // removeAlarm(state, action: PayloadAction<string>) {
    //   state.alarmModule.activeAlarms = state.alarmModule.activeAlarms.filter(
    //     (alarm) =>
    //   );
    // },

    setAlarmPower: (state, action: PayloadAction<boolean>) => {
      state.alarmPower = action.payload;
    },
  },
});

export const { setNewAlarm, setAlarmPower } = clockSlice.actions;
export default clockSlice.reducer;
