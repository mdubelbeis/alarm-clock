import { createSlice } from "@reduxjs/toolkit";
import { CaseReducer } from "@reduxjs/toolkit";
import { CaseReducerWithPrepare } from "@reduxjs/toolkit";
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
    addTodo: (state, action) => {
      state.todoList = [
        { id: Math.random(), todo: action.payload, isComplete: false },
        ...state.todoList,
      ];
    },
    completeTodo: (
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
    logTodo: (state: any) => {
      console.log(state.todoList);
    },
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice.reducer;
