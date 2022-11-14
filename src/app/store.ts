import { configureStore } from "@reduxjs/toolkit";
import todoReducers from "../features/Todo/TodoSlice";
import clockReducers from "../features/Clock/ClockSlice";
import weatherReducers from "../features/Clock/WeatherSlice";
import { currentWeatherApi } from "../features/apiSlice";

export const store = configureStore({
  reducer: {
    todoStore: todoReducers,
    clockStore: clockReducers,
    weatherStore: weatherReducers,
    [currentWeatherApi.reducerPath]: currentWeatherApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(currentWeatherApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
