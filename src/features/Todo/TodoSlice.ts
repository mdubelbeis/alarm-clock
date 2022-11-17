import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export interface TodoState {
  todoText: string;
  todoList: { id: string; todo: string; isComplete: boolean }[];
}

interface NewTodoState {
  id: string;
  todo: string;
  isComplete: boolean;
}

const initialState: TodoState = {
  todoText: "",
  todoList: [
    { id: uuidv4(), todo: "Meta Certificate", isComplete: false },
    { id: uuidv4(), todo: "Build Projects", isComplete: false },
    { id: uuidv4(), todo: "Apply for jobs", isComplete: false },
    { id: uuidv4(), todo: "Study", isComplete: false },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addNewTodo: (
      state,
      action: PayloadAction<{ id: string; todo: string; isComplete: boolean }[]>
    ) => {
      state.todoList = action.payload;
    },
    setTodoText: (state, action) => {
      state.todoText = action.payload;
    },
    completeTodo: (
      state,
      action: PayloadAction<{ id: string; todo: string; isComplete: boolean }[]>
    ) => {
      state.todoList = action.payload;
    },
    clearTodoText: (state) => {
      state.todoText = "";
    },
    deleteTodo: (
      state,
      action: PayloadAction<{ id: string; todo: string; isComplete: boolean }[]>
    ) => {
      state.todoList = action.payload;
    },
    logTodo: (state: any) => {
      console.log(state.todoList);
    },
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice.reducer;
