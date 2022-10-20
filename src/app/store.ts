import { configureStore } from "@reduxjs/toolkit";
import addTodoReducer from "../app/Todo/TodoSlice";
import deleteTodoReducer from "../app/Todo/TodoSlice";
import logTodoReducer from "../app/Todo/TodoSlice";

export const store = configureStore({
  reducer: {
    addTodo: addTodoReducer,
    deleteTodo: deleteTodoReducer,
    logTodo: logTodoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
