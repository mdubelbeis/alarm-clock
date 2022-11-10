import { configureStore } from "@reduxjs/toolkit";
import todoReducers from "../app/Todo/TodoSlice";
import clockReducers from "../app/Clock/ClockSlice";
import weatherReducers from "../app/Clock/WeatherSlice";

export const store = configureStore({
  reducer: {
    todoStore: todoReducers,
    clockStore: clockReducers,
    weatherStore: weatherReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
