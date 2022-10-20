import { configureStore } from "@reduxjs/toolkit";
import todoReducers from "../app/Todo/TodoSlice";
import deleteTodoReducer from "../app/Todo/TodoSlice";
import logTodoReducer from "../app/Todo/TodoSlice";

export const store = configureStore({
  reducer: {
    todoActions: todoReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
