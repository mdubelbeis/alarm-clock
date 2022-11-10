import { configureStore } from "@reduxjs/toolkit";
import todoReducers from "../app/Todo/TodoSlice";
import clockReducers from "../app/Clock/ClockSlice";

export const store = configureStore({
  reducer: {
    todoStore: todoReducers,
    clockStore: clockReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
