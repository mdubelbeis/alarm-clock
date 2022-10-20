import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TodoState {
  todoList: { id: number; todo: string; isComplete: boolean }[];
}

const initialState: TodoState = {
  todoList: [
    { id: 1, todo: "Meta Certificate", isComplete: false },
    { id: 2, todo: "Build Projects", isComplete: false },
    { id: 3, todo: "Apply for jobs", isComplete: false },
    { id: 4, todo: "Study", isComplete: false },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (
      state,
      action: PayloadAction<{ id: number; todo: string; isComplete: boolean }[]>
    ) => {
      state.todoList = action.payload;
    },
    deleteTodo: (
      state,
      action: PayloadAction<{ id: number; todo: string; isComplete: boolean }[]>
    ) => {
      state.todoList = action.payload;
    },
    logTodo: (state) => {
      console.log("Hello from todoSlice");
    },
  },
});

export const { addTodo, deleteTodo, logTodo } = todoSlice.actions;

export default todoSlice.reducer;
